function greeting(name){
    console.log(`hej ${name}`)
}

function areaOfCircle(radius){
   return radius*radius*Math.PI;
}

function areaOfRectangle(width, height){
    return width * height
}

greeting(`jonatan`)
greeting(`gustav`)
greeting(`martin`)

console.log(areaOfCircle(1))
console.log(areaOfRectangle(2, 9));