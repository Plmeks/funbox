export const SET_MAP_INSTANCE = "SET_MAP_INSTANCE";

// action for getting map instance
// we re using that one only for
// getting current map positino center
// used in creating new marker
export const setMapInstance = mapInstance => ({
    type: SET_MAP_INSTANCE,
    mapInstance
});