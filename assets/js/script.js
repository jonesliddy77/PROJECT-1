
//Calls location API to get location and print to nav bar
var queryURL="https://api.geoapify.com/v1/ipinfo?apiKey=805c055b98f34c71807194113fb46926"
$.ajax({url:queryURL,method:"GET"}).then(function(response){
    //Stores user's general location info into session
    sessionStorage.setItem("city",response.city.name);  //Grab with "sessionStorage.getItem("city")"
    sessionStorage.setItem("state",response.state.name);    //Grab with "sessionStorage.getItem("state")"
    sessionStorage.setItem("country",response.country.name);  //Grab with "sessionStorage.getItem("country")"

    //Grabs location information from session storage sets in html
    $(".navLocation").text(sessionStorage.getItem("city")+", "+sessionStorage.getItem("state") + " ");
})

// End of Geoapify API Code //

