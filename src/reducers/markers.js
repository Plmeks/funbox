import * as MarkerActions from "../actions/markers";

const initState = [{
    id: 0,
    name: "",
    coordinates: [],
    address: "",
    routeStart: false
}];

export default (state = initState, action) => {
    switch(action.type) {
        case MarkerActions.ADD_MARKER: {
            return [
                ...state, action.newMarker
            ];
        }
        case MarkerActions.DELETE_MARKER: {
            return action.updatedMarkers
        } 
        case MarkerActions.EDIT_MARKER: {
            return action.editedMarkers
        } 
        case MarkerActions.SORT_MARKERS: {
            return action.sortedMarkers
        } 
        default:
    }
    return state;
}