//variable for the red color
var redSlider;
var greenSlider;
var blueSlider;

function setup(){
    createCanvas(600,500).parent("sketch-domain");
    background(0);
    // Positioning the red slider
    redSlider = createSlider(0, 255, 100);
    redSlider.position(20, 20);
    // Positioning the green slider
    greenSlider = createSlider(0, 255, 0);
    greenSlider.position(20, 50);
    // Positioning the blue slider
    blueSlider = createSlider(0, 255, 255);
    blueSlider.position(20, 80);
}


function draw(){
    redValue = redSlider.value();
    greenValue = greenSlider.value();
    blueValue = blueSlider.value();
    background(redValue, greenValue, blueValue);
    
    textSize(12);
    textAlign(LEFT,BASELINE);
    text("red", 150, 25);
    text("green", 150, 55);
    text("blue", 150, 85);
    
    text(redValue, 200, 25);
    text(greenValue, 200, 55);
    text(blueValue, 200, 85);
    
    textSize(20);
    textAlign(CENTER,CENTER);
    text("rgb("+redValue+", "+greenValue+", "+blueValue+")", width/2, height/2);
}