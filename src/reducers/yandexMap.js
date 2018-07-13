import * as YandexMapActions from "../actions/yandexMap";

const initialState = {
    mapInstance: null,
    center: [55.751574, 37.573856], 
    zoom: 15
};

export default (state = initialState, action) => {
    switch(action.type) {
        case YandexMapActions.SET_MAP_INSTANCE: {
            return {...state, mapInstance: action.mapInstance};
        }
        default:
    }
    return state;
};