function initMap() {
    var home = {
        lat: 47.40584,
        lng: 9.45968
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: home
    });

    // Set ein Marker in die position setzen    
    var marker = new google.maps.Marker({
        position: home,
        map: map,
        title: "That's where Lucas lives!"
    });

    // Callback Funktion auslösen verwendet Parameter
    marker.addListener('click', function() {
        alert(marker.title);
    });
};