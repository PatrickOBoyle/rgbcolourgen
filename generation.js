// Contains the three values for an R(ed) G(reen) B(lue) colour
var R = 0;
var G = 0;
var B = 0;

var generatedColour;
var previousColour;

function main(){
    // Provides check to see if a generation is the same as the previous generation
    previousColour = generatedColour;
    
    createColour();
    checkColour();
    injectColour();
}

function createColour(){
    R = Math.floor(Math.random() * 256);
    G = Math.floor(Math.random() * 256);
    B = Math.floor(Math.random() * 256);

    generatedColour = "RGB(" + R + ", " + G + ", " + B + ") "; 

}

function checkColour(){
    var check = true;
    
    while(check == true){
        if(generatedColour == previousColour){
            createColour();
            checkColour();
        
        }else{
            check = false;
           
        }
    }
}

function injectColour(){
    var colourText = document.getElementById("generatedColour");
    colourText.innerHTML = generatedColour;

}