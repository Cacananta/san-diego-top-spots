$(function() {

    // function initMap(latitude, longitude) {
    //     var uluru = {lat: latitude, lng: longitude};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 15,
    //       center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map
    //     });
    //   }

    $.getJSON('data.json', function(data) {
        var keyValues = Object.keys(data[0]);
        for (var i = 0; i < keyValues.length; i++) {
            $('#topSpotsHeader').append('<th>' + keyValues[i] + '</th>')
        }
        // $('#topSpotsHeader').append('<th>map</th>');
        for (var i = 0; i < data.length; i++)
            $('.topSpotsInput').append(
            '<tr><td>' + data[i].name + 
            '</td><td>' + data[i].description + 
            '</td><td><a href="https://www.google.com/maps/@'
             + data[i].location + 
             ',15z" class="btn btn-primary">Open in Google Maps</a></td></tr>');
    })
})



    //Google API Key: AIzaSyBVcdFtpZYsIucLYx0nZxozXhHp7WeKp64

    // ***copy the following between the last <td> tags:
    // <td id="map">'
    //          + initMap(data[i].location[0], data[i].location[1]) + '</td>
    // removed: &callback=initMap //from URL
    //removed: async defer //from the beginning of the script tag