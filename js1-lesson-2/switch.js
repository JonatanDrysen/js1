const currentWeather = "rainy";

/*
switch(currentWeather) {
    case "rainy":
        console.log("det kommer att regna")
        break; // break gör så att om rainy e sant slutar den jämföra med de andra, hoppar ut ur switchen
    case "sunny":
        console.log("det verkar vara soligt")
        break;
    case "cloudy":
        console.log("molnigt idag")
        break;
    default:
        console.log("idk hur vädret är idag")
}
*/

if(currentWeather === "rainy") {
    console.log("Det kommer att regna")
} else if(currentWeather === "sunny") {
    console.log("Det kommer att vara soligt")
} else if(currentWeather === "cloudy") {
    console.log("Det är molnigt")
} else {
    console.log("Ingen aning vad för väder idag")
}