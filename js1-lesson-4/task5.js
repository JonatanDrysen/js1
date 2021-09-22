let totalVolume = 0;

function getVolume(height, width, length){
    totalVolume = height * width * length;
    if(totalVolume === height * width * length){
        return  totalVolume;
    }
    else{
        return 0;
    }        
}

console.log( getVolume(2, 3, 4) )
// Ska returnera 24

console.log( getVolume(2))
// Ska returnera 0
