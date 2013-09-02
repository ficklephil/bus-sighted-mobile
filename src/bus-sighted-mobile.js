
function initializeGoogleMap() {
    console.log('initialize');

//    var lat = 51.508596;
//    var lng = -0.117416;
//
//    var mapOptions = {
//        center: new google.maps.LatLng(lat, lng),
//        zoom: 12,
//        sensors:false,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    };
//    map = new google.maps.Map(document.getElementById("map-canvas"),
//        mapOptions);

    $(function() {
        // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
        var yourStartLatLng = new google.maps.LatLng(59.3426606750, 18.0736160278);
        $('#map-canvas').gmap({'center': yourStartLatLng});
    });
}


function initilise(){
    setLocation();
}

function setLocation(){

    console.log('setLocation method');

    if (navigator.geolocation) {
        var timeoutVal = 10 * 1000 * 1000;
        navigator.geolocation.getCurrentPosition(displayPosition, displayError,
            { enableHighAccuracy: true, timeout: timeoutVal, maximumAge: 0 }
        );
    }
    else {
        alert("Geolocation is not supported by this browser");
    }
}

function displayPosition(position) {
    //alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    $('.location-text-display').text("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);

    //postToApi('philip', position.coords.latitude, position.coords.longitude);
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;

    //sendLocationViaWebSocket(lat, lng);
}

function displayError(error) {
    var errors = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Request timeout'
    };
    alert("Error: " + errors[error.code]);
}

initializeGoogleMap();
