import React, { Component } from 'react';
import 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { mapboxConfig } from '../../../settings';
import { markerCluster } from './config';
import LeafletMapWrapper from './map.style';

export default class extends Component {
  constructor(props) {
    super(props);
    this.mountMap = this.mountMap.bind(this);
  }
  mountMap(element) {
    if (!element) return;
    const { L } = window;
    var map = L.map(element).setView([21.3069,-157.8583], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([21.3069,-157.8583]).addTo(map)
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
        <div
          id="basic-map-marker"
          style={{ height: '400px', width: '100%' }}
          ref={this.mountMap}
        />
      </LeafletMapWrapper>
    );
  }
}
