let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 14.6583066, lng: -17.437809116 },
    zoom: 16,
  });
}