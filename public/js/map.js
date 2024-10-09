// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

// let mapToken = mapToken;
mapboxgl.accessToken = mapToken;
// console.log(mapToken);
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90 //Latitude: 25.2008 Longitude: 85.5239
    zoom: 8 // starting zoom
});

const marker = new mapboxgl.Marker({color: 'black'})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.location}</h4><p>Exact Location provided after booking</p>`))
    .addTo(map);