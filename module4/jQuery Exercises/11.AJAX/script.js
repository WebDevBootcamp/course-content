$(document).ready(function() {

    var temp = '';
    var cityName = '';
    var description = '';
    var icon = '';

    var processData = function(data) {
        var k = data.list[0].main.temp * 1;
        temp =  Math.floor(((k - 273.15)*9/5)+32);
        console.log(temp);
        cityName = data.list[0].name;
        description = data.list[0].weather[0].description;
        icon = data.list[0].weather[0].icon;

        $('.cityName').text(cityName);
        $('.temp').html(temp + '&deg;');
        getWeatherIcon(icon);


    };

    var getWeatherIcon = function(icon) {

        // Connection details:
        // http://openweathermap.org/wiki/API/Weather_Condition_Codes
        // Sample URL:
        // http://openweathermap.org/img/w/10d.png

        displayWeather();
    };

    var displayWeather = function() {
        if(!$('.weather').hasClass('loaded')){
            $('.weather').addClass('loaded');
            var h = $('.sandbox').height() + 200; // expand sandbox to display weather.
            $('.sandbox').animate({
                "height": h
            }, 1000, function() {
                $('.weather').animate({
                    "opacity":1
                },1000);
            });
        }
    }

    $('#loadBtn').on('click', function() {
        if($('#cityList').val() !== '') {
            var city = $('#cityList').val();
            var theUrl = 'http://api.openweathermap.org/data/2.1/find/name';
            $.ajax({
                url: theUrl,
                type: 'GET',
                dataType: 'JSONP',
                data: {q: city, type: 'like'},
            })
            .done(function(data) {
                console.log('success');
                processData(data);
            })
            .fail(function() {
                console.log('error');
            })
            .always(function() {
                console.log('complete');
            });
        }
    });
});