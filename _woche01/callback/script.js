function initMap() {
    var myLatLng = {
        lat: 47.41476,
        lng: 9.314195
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: myLatLng
    });

    // Set ein Marker in die position setzen    
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });

    // Callback Funktion auslösen verwendet Parameter
    marker.addListener('click', function() {
        alert(marker.title);
    });
};