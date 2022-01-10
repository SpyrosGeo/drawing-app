let canvas = document.getElementById("canvas")
let rad = document.getElementById("rad")
let col = document.getElementById("color")


let dragging


let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight


let radius = rad.value
let color = col.value

rad.oninput = function () {
    radius = this.value;

}

col.oninput = function() {
    color = this.value
}


let drawPoint = (e) => {
    if (dragging) {
        ctx.fillStyle = ctx.strokeStyle = color;
        ctx.lineTo(e.clientX, e.clientY)
        ctx.lineWidth = radius * 2;
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(e.clientX,e.clientY,radius,0,Math.PI*2);
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
    }

}

let engage = function (){
    dragging = true;

}

let  disengage = function(){
    dragging = false;
    ctx.beginPath()
}


canvas.addEventListener("mousedown",engage)
canvas.addEventListener("mousedown",drawPoint)
canvas.addEventListener("mouseup",drawPoint)
canvas.addEventListener("mouseup",disengage)