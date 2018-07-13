// yandex-geocoder action import
// for getting address text by coords
import {fetchGeoAddress} from "./yandexGeo";

export const ADD_MARKER = "ADD_MARKER";

// thunk method for adding marker
export const addMarker = (name) => (dispatch, getState) => {
    let {markers, yandexMap} = getState();

    // for generating unique id
    // increasing max id is our new one
    const sortedMarkers = markers
    .slice()
    .sort((a, b) => b.id - a.id);

    const id = sortedMarkers[0].id + 1;
    // getting current map center from instance of ymap
    const coordinates = yandexMap.mapInstance.getCenter();
    const routeStart = markers.length === 1 ? true: false;

    dispatch({
        type: ADD_MARKER,
        newMarker: {
            id,
            name,
            coordinates,
            address: "fetching...",
            routeStart
        }
    });

    // setting address on new marker with Yandex-geo-api
    dispatch(setMarkerAddress(
        id, coordinates
    ));
};

export const setMarkerAddress = (id, coordinates) => dispatch => {
    // fetching from geo yandex api action
    fetchGeoAddress(coordinates)
    .then(addressResp => {
        dispatch(editMarker(
            id, {
                // it would like "${улица Чапаева}, ${Москва, Россия}"
                address: `${addressResp.name}, ${addressResp.description}`
            }
        ));
    });
};

export const EDIT_MARKER = "EDIT_MARKER";

// action for changing marker properties by id
export const editMarker = (id, editedMarker) => (dispatch, getState) => {
    const {markers} = getState();

    const editedMarkers = markers
    .map(marker => marker.id === id? {...marker, ...editedMarker}: marker);

    dispatch({
        type: EDIT_MARKER,
        editedMarkers
    });
};

export const SORT_MARKERS = "SORT_MARKERS";

// action for drag-and-drop list sort data
export const sortMarkers = (startIndex, endIndex) => (dispatch, getState) => {
    const {markers} = getState();

    // just changing our markers array
    // with startIndex and endIndex
    let sortedMarkers = [...markers];
    const [removed] = sortedMarkers.splice(startIndex + 1, 1);
    sortedMarkers.splice(endIndex + 1, 0, removed);

    // when sorting its good way
    // to check what about starter-route marker
    sortedMarkers = checkRouteStart(sortedMarkers, true);

    dispatch({
        type: SORT_MARKERS,
        sortedMarkers
    });
};

export const DELETE_MARKER = "DELETE_MARKER";

// action from removing markers
export const deleteMarker = id => (dispatch, getState) => {
    const {markers} = getState();
    let updatedMarkers = markers.filter(marker => marker.id !== id);
    
    // when deleting its good way
    // to check if it was starter-route marker
    updatedMarkers = checkRouteStart(updatedMarkers);

    dispatch({
        type: DELETE_MARKER,
        updatedMarkers
    });
};

const checkRouteStart = (markers, reset = false) => {
    if(reset)
        markers = markers.map(marker => {
            if(marker.routeStart)
                marker.routeStart = false;
            
            return marker;
        });
    
    if(markers[1] && !markers[1].routeStart)
        markers[1].routeStart = true;

    return markers;
}