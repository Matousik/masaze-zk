let map1;
let map2;


function initMap() {

    const LatLng1 = { lat: 50.40578799835035, lng: 14.03988639465556 };
    const LatLng2 = { lat: 50.662074161492015, lng: 14.044625078796344 };
  
    map2 = new google.maps.Map(document.getElementById("map2"), {
        center: LatLng2,
        zoom: 15,
        });

    var marker1 = new google.maps.Marker({
        position: LatLng2,
        map2,
        title: "Provozovna Ústí nad Labem",
        });
    
        marker1.setMap(map2);

    map1 = new google.maps.Map(document.getElementById("map1"), {
        center: LatLng1,
        zoom: 15,
        });

    var marker2 = new google.maps.Marker({
        position: LatLng1,
        map1,
        title: "Provozovna Libochovice",
        });    

        marker2.setMap(map1);
}
