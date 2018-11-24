import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
import LayoutContent from '../components/utility/layoutContent';
import ListItem from './listItem';

export default class extends Component {

  constructor(props) {
    super(props);
    const articles = [
      {
        id: 'a',
        timestamp: 811396800000,
        desc: <IntlMessages id="shuffle.descriptionOne" />,
        img: Img1,
      },
      {
        id: 'b',
        timestamp: 1108702800000,
        desc: <IntlMessages id="shuffle.descriptionTwo" />,
        img: Img2,
      },]
    this.state = {
      articles
    };
  }
  renderArticles() {
    return this.state.articles.map((article, i) => {
      return (
        <ListItem
          key={article.id}
          view={this.state.view}
          index={i}
          clickHandler={throttle(
            () => this.moveArticle('articles', 'removedArticles', article.id),
            800
          )}
          {...article}
        />
      );
    };
  render() {
    return (
      <LayoutContentWrapper style={{ height: '100vh' }}>
        <LayoutContent>
          <h1>Blank Page</h1>
          {this.renderArticles()}
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
