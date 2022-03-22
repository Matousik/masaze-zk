let map1;
let map2;


function initMap() {

    const LatLng1 = { lat: 50.661, lng: 14.044 };
    const LatLng2 = { lat: -34.397, lng: 150.644 };

    map1 = new google.maps.Map(document.getElementById("map1"), {
        center: { lat: 50.661, lng: 14.044 },
        zoom: 8,
        })

    new google.maps.Marker({
        position: LatLng1,
        map1,
        title: "Provozovna Libochovice",
        });
  
    map2 = new google.maps.Map(document.getElementById("map2"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        });

    new google.maps.Marker({
        position: LatLng2,
        map2,
        title: "Provozovna Ústí nad Labem",
        });
}