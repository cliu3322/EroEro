import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from 'antd';
import moment from 'moment';
import shuffle from 'lodash/shuffle';
import throttle from 'lodash/throttle';
import articles from './config';
import FlipMove from 'react-flip-move';
import Toggle from './Toggle.js';
import IntlMessages from '../../components/utility/intlMessages';
import { SingleCardWrapper, SortableCardWrapper } from './shuffle.style';
import SuperFetch from '../../helpers/superFetch';

//import SuperFetch from '../../helpers/superFetch';



class ListItem extends Component {
  render() {
    const listClass = `isoSingleCard card ${this.props.view}`;
    const style = { zIndex: 1000 - this.props.index };

    return (
      <SingleCardWrapper id={this.props._id} className={listClass} style={style}>
        <div className="isoCardImage">
          <img alt="#" />
        </div>
        <div className="isoCardContent">
          <h3 className="isoCardTitle">{this.props.name}</h3>
          <span className="isoCardDate">
            {moment(this.props.lastUpdated).format('MMM Do, YYYY')}
          </span>
        </div>
        <button className="isoDeleteBtn" onClick={this.props.clickHandler}>
          <Icon type="close" />
        </button>
      </SingleCardWrapper>
    );
  }
}

class Shuffle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removedArticles: [],
      view: 'list',
      order: 'asc',
      sortingMethod: 'chronological',
      enterLeaveAnimation: 'accordionVertical',
      articles,
      recordlist:[]
    };



    this.toggleList = this.toggleList.bind(this);
    this.toggleGrid = this.toggleGrid.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.sortRotate = this.sortRotate.bind(this);
    this.sortShuffle = this.sortShuffle.bind(this);
  }

  componentDidMount () {
    console.log(this.props.match.params)
    const { id } = this.props.match.params
    SuperFetch.get(`/getcityxrecordlist?id=${id}`)
      .then((recordlist) => {
        this.setState(() => ({ recordlist }))
      })
  }

  toggleList() {
    this.setState({
      view: 'list',
      enterLeaveAnimation: 'accordionVertical',
    });
  }

  toggleGrid() {
    this.setState({
      view: 'grid',
      enterLeaveAnimation: 'accordionHorizontal',
    });
  }

  toggleSort() {
    console.log(this.state.recordlist)
    const sortAsc = (a, b) => a.lastUpdated - b.lastUpdated;
    const sortDesc = (a, b) => b.lastUpdated - a.lastUpdated;

    this.setState({
      order: this.state.order === 'asc' ? 'desc' : 'asc',
      sortingMethod: 'chronological',
      recordlist: this.state.recordlist.sort(
        this.state.order === 'asc' ? sortDesc : sortAsc
      ),
    });
  }

  sortShuffle() {
    this.setState({
      sortingMethod: 'shuffle',
      recordlist: shuffle(this.state.recordlist),
    });
  }

  moveArticle(source, dest, id) {
    const sourceArticles = this.state[source].slice();
    let destArticles = this.state[dest].slice();

    if (!sourceArticles.length) return;

    // Find the index of the article clicked.
    // If no ID is provided, the index is 0
    const i = id ? sourceArticles.findIndex(article => article.id === id) : 0;

    // If the article is already removed, do nothing.
    if (i === -1) return;

    destArticles = [].concat(sourceArticles.splice(i, 1), destArticles);

    this.setState({
      [source]: sourceArticles,
      [dest]: destArticles,
    });
  }

  sortRotate() {
    const articles = this.state.articles.slice();
    articles.unshift(articles.pop());

    this.setState({
      sortingMethod: 'rotate',
      articles,
    });
  }

  renderArticles() {
    return this.state.recordlist.map((city, i) => {
      return (
        <ListItem
          key={city._id}
          view={this.state.view}
          index={i}
          clickHandler={throttle(
            () => this.moveArticle('articles', 'removedArticles', city._id),
            800
          )}
          {...city}
        />
      );
    });
  }

  render() {
    return (
      <SortableCardWrapper
        id="shuffle"
        className={`isomorphicSortableCardsHolder ${this.state.view}`}
      >
        <header className="isoControlBar">
          <div className="isoViewBtnGroup">
            <Toggle
              clickHandler={this.toggleList}
              text={<IntlMessages id="toggle.list" />}
              icon="bars"
              active={this.state.view === 'list'}
            />
            <Toggle
              clickHandler={this.toggleGrid}
              text={<IntlMessages id="toggle.grid" />}
              icon="appstore"
              active={this.state.view === 'grid'}
            />
          </div>

          <div className="isoControlBtnGroup">
            <Toggle
              clickHandler={this.toggleSort}
              text={
                this.state.order === 'asc' ? (
                  <IntlMessages id="toggle.ascending" />
                ) : (
                  <IntlMessages id="toggle.descending" />
                )
              }
              icon={this.state.order === 'asc' ? 'up' : 'down'}
              active={this.state.sortingMethod === 'chronological'}
            />
            <Toggle
              clickHandler={this.sortShuffle}
              text={<IntlMessages id="toggle.shuffle" />}
              icon="shake"
              active={this.state.sortingMethod === 'shuffle'}
            />
            <Toggle
              clickHandler={this.sortRotate}
              text={<IntlMessages id="toggle.rotate" />}
              icon="reload"
              active={this.state.sortingMethod === 'rotate'}
            />
          </div>
        </header>

        <div className="isoSortableCardsContainer">
          <FlipMove
            staggerDurationBy="30"
            duration={500}
            enterAnimation={this.state.enterLeaveAnimation}
            leaveAnimation={this.state.enterLeaveAnimation}
            typeName="ul"
          >
            {this.renderArticles()}

            <footer key="foot" className="isoAddRemoveControlBar">
              <div className="isoControlBtnGroup">
                <Toggle
                  clickHandler={() =>
                    this.moveArticle('removedArticles', 'articles')}
                  text={<IntlMessages id="toggle.addItem" />}
                  icon="plus"
                  active={this.state.removedArticles.length > 0}
                />
                <Toggle
                  clickHandler={() =>
                    this.moveArticle('articles', 'removedArticles')}
                  text={<IntlMessages id="toggle.removeItem" />}
                  icon="close"
                  active={this.state.articles.length > 0}
                />
              </div>
            </footer>
          </FlipMove>
        </div>
      </SortableCardWrapper>
    );
  }
}


function mapStateToProps(state) {
  return {
    recordlist: state.RecordList.recordlist
  };
}

export default connect(
  mapStateToProps,
  {}
)(Shuffle);
