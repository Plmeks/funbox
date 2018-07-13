import React, {Component} from 'react';
import {connect} from "react-redux";
import {setMapInstance} from "../../actions/yandexMap";
import {editMarker, setMarkerAddress} from "../../actions/markers";
import { YMaps, Map, Placemark, Polyline } from 'react-yandex-maps';

import "./styles.scss";

class YandexMap extends Component {
  // while dragging, it goes coordinate update
  handleDrag = (event, id) => {
    const newCoordinates = event.get('target').geometry.getCoordinates();
    this.props.editMarker(id, {coordinates: newCoordinates});
  }

  // at the end of drag we have to check new address by coords
  handleDragEnd = (event, id) => {
    const newCoordinates = event.get('target').geometry.getCoordinates();
    this.props.setMarkerAddress(id, newCoordinates);
  }

  render() {
    const {markers, yandexMap} = this.props;
    const {center, zoom} = yandexMap;

    const activeMarkers = markers.filter(marker => marker.id !== 0);
    const coordinatesList = activeMarkers.map(marker => marker.coordinates);
    
    const placemarkOptions = {
      draggable: true
    };

    const polylineOptions = {
      strokeWidth: 3, 
      strokeOpacity: 0.7, 
      strokeColor: "#9c27b0"
    };

    const placemarks = activeMarkers.map(marker => {
      const {id, name, coordinates, address} = marker;

      // red color for the way start placemark
      // blue for others
      const placemarkColor = marker.routeStart? "#f44336": "#2196f3";

      // yandex placemark properties
      // if the mark text is too long, we just cut and put 3 dots
      const placemarkProperties = {
        iconCaption: name,
        balloonContent: `
          Наименование метки: ${name.length <= 30? name: name.substr(0, 30) + "..."}. <br />
          Адрес: ${address}.
        `
      };

      return (
        <Placemark 
          key={id}
          geometry={{coordinates}}
          properties={placemarkProperties}
          options={{...placemarkOptions, iconColor: placemarkColor}}
          onDragEnd = {(event) => this.handleDragEnd(event, id)}
          onDrag = {(event) => this.handleDrag(event, id)}
        />
      );
    });

    return (
      <React.Fragment>
        <YMaps>
          <Map state={{center, zoom}}  width={'100%'} height={370} instanceRef={map => this.props.setMapInstance(map)}>
            {placemarks}
            <Polyline geometry={{coordinates: coordinatesList}} options={polylineOptions}/>
          </Map>
        </YMaps>
      </React.Fragment>
    );
  }
}

export default connect(
  state => state, 
  {setMapInstance, editMarker, setMarkerAddress}
)(YandexMap);