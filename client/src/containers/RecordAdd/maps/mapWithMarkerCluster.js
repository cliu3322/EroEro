import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

import actions from '../../../redux/recordAdd/actions.js';


import { markerCluster } from './config';
import LeafletMapWrapper from './map.style';

export class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.mountMap = this.mountMap.bind(this);
    console.log(props)
    //const provider = new OpenStreetMapProvider();
    //const results = provider.search({ query: "Aiea" })
    //.then(res => console.log(res));

  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
      console.log('UNSAFE_componentWillUpdate');
      nextState.open = nextProps.open;
      console.log(nextState.open);
  }
  componentWillUpdate(nextProps, nextState) {
      console.log('componentWillUpdate');
      nextState.open = nextProps.open;
      console.log(nextState.open)
  }
  mountMap(element) {
    if (!element) return;
    const { L } = window;
    var map = L.map(element).setView([40.7128,-74.0060], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.7128,-74.0060]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    let markers = L.markerClusterGroup();

    markerCluster.map(singleMarker => {
      var customIcon = L.icon({
        iconUrl: singleMarker.iconUrl,
        iconSize: [40, 40], // size of the icon
        popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
      });
      return markers.addLayer(
        L.marker(singleMarker.position, { icon: customIcon })
          .bindPopup(singleMarker.popupText)
          .openPopup()
      );
    });
    map.addLayer(markers);
  }
  render() {
    return (
      <LeafletMapWrapper className="isoLeafletMap">
      {this.props.open}
        <div
          id="basic-map-marker"
          style={{ height: '400px', width: '100%' }}
          ref={this.mountMap}
        />
      </LeafletMapWrapper>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  return {
  };
}

export default connect(mapStateToProps,{actions})(LeafletMap);
