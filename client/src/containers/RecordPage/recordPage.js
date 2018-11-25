import React, { Component } from 'react';
import ListItem from './listItem';
import Img1 from '../../image/1.jpg';
import Img2 from '../../image/2.jpg';
import { SortableCardWrapper } from './shuffle.style';

export default class extends Component {

  constructor(props) {
    super(props);
    const articles = [
      {
        id: 'a',
        timestamp: 811396800000,
        name: "sddssddssd",
        img: Img1,
        location: {zipcode: 96859, exactAdd: '', },
        tag: {race: 'asian', incall: 1, outcall: 0, Catalog:  'SPA/Agency'},
        Contact: {phone:'222334564',email: ''},
        price:{type: "Over Market price", exact: "Pleace contact the provider"},
        appointmentNeeded:1
      },
      {
        id: 'b',
        timestamp: 1108702800000,
        name: "sddssdd",
        img: Img2,
        race: 'international spa'
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
          view='list'
          index={i}
          {...article}
        />
      );})}


  render() {
    return (
      <SortableCardWrapper
        id="shuffle"
        className={`isomorphicSortableCardsHolder`}
      >
          <h1>Blank Page</h1>
          <div className="isoSortableCardsContainer">
            {this.renderArticles()}
          </div>
      </SortableCardWrapper>
    );
  }
}
