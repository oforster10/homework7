function gettingJSON(){
    //Display the forecast
    document.querySelector("#forecast").style.display = "block"

    //Set default location if one isn't provided
    let location;
    if (!document.querySelector("#location").value){
        location = "Ann Arbor";
    } else{
        location = document.querySelector("#location").value;
    }
    
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let fomat;
    if (!document.querySelector("name[name=temp]:checked")){
        format = "imperial";
    } else{
        format = document.querySelector("input[name=temp]:checked").value;
    }

    console.log("Format is " + format);

    //set the query  
    let query;
    query = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units${format}&appid=b9974336386d0073a7e97ccdaacdd6a8`
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");

    console.log("Location is " + loc + "Temperature is " + temp + "tempImg is " + tempImg)


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        
        console.log(JSON.stringify(json))
        loc.innerHTML = (json["name"]);
        temp.innerHTML = (json["main"].temp) + " with " + (json["weather"][0].description)
        tempImg.src = "https://openweathermap.org/img/wn/" + (json["weather"][0].icon + ".png")
    });
}
