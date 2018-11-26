import React, { Component } from 'react';
import ListItem from './listItem';
import Img1 from '../../image/1.jpg';
import Img2 from '../../image/2.jpg';
import { SortableCardWrapper } from './shuffle.style';

export default class extends Component {

  constructor(props) {
    super(props);
    const records = [
      {
        id: 'a',
        timestamp: 811396800000,
        name: "sddssddssd",
        img: Img1,
        location: 'location 1',
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
        location: 'kujhjhj',
        race: 'international spa'
      },]
    this.state = {
      records
    };
  }
  renderArticles() {
    return this.state.records.map((records, i) => {
      return (
        <ListItem
          key={records.id}
          view='list'
          index={i}
          {...records}
        />
      );
    })}


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
