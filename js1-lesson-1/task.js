const car = {
     brand: "Audi",
     modelyear: 2000,
     model: "A3",
     currentMileage: 8000,
     bigServiceMileage: 6000
}

console.log(`you own a ${car.brand} ${car.model} that has been driven for ${car.currentMileage}km`);

if(car.currentMileage > car.bigServiceMileage){
    console.log("Time for big service!");
} 

