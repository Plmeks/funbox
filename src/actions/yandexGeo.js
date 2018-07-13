// yandex address-getter-by-coords-omg.
// promise for using that nice
export const fetchGeoAddress = (coordinates) => {
    return new Promise((resolve, reject) => {
        const format = "json";
        const geocode = coordinates.join();
        const sco = "latlong";

        const geocodeTarget = `https://geocode-maps.yandex.ru/1.x/?format=${format}&geocode=${geocode}&sco=${sco}`;
        // proxy for localhost check/ just: fetch(proxy+geocodeTarget)
        // const proxy = "https://cors-anywhere.herokuapp.com/";

        fetch(geocodeTarget)
        .then(res => res.json())
        .then(res => {
            if(res.response)
                // wow, yandex...
                resolve(res.response.GeoObjectCollection.featureMember["0"].GeoObject);
            else
                reject();
        });
    });
};