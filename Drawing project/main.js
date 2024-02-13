var lastx, lasty;
var width_of_line=2;
color="aqua";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;

if (width<992){
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", my_touchstart)
function my_touchstart(e)
{
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    lastx=e.touches[0].clientX-canvas.offsetLeft;
    lasty=e.touches[0].clientY-canvas.offsetTop;
    console.log("touchstart");
}
canvas.addEventListener("touchmove", my_touchmove)
function my_touchmove(e)
{
    current_position_of_touch_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y coordinate is");
    console.log("x="+lastx+"y="+lasty);
    ctx.moveTo(lastx, lasty);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();
    lastx = current_position_of_touch_x;
    lasty = current_position_of_touch_y;
}
function Clear_drawing(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}