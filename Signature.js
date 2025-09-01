// const coloPicker = document.querySelector("#colorPicker");
// const canvasColor = document.querySelector("#canvasColor");
// const canvas = document.querySelector("#myCanvas");
// const clearButton = document.querySelector("#clearButton");
// const saveButton = document.querySelector("#saveButton");
// const retriveButton = document.querySelector("#retriveButton");
// const fontPicker = document.querySelector("#fontPicker");
// const ctx = canvas.getContext("2d");

// var isDrawing;
// var lastX, lastY;

// canvas.style.backgroundColor = "#ffffff";

// coloPicker.addEventListener('change', (e) => {
//     ctx.strokeStyle = e.target.value;
//     ctx.fillStyle = e.target.value;
// });

// canvas.addEventListener('mousedown', (e) => {
//     isDrawing = true;
//     lastX = event.offsetX;
//     lastY = event.offsetY;
// });

// canvas.addEventListener('mousemove', (e) => {
//     if (isDrawing) {
//         ctx.beginPath();
//         ctx.moveTo(lastX, lastY);
//         ctx.lineTo(event.offsetX, event.offsetY);
//         ctx.stroke();

//         lastX = event.offsetX;
//         lastY = event.offsetY;

//     }

// });

// canvas.addEventListener('mouseup',(e)=>{
//     isDrawing = false;
// });

// canvas.addEventListener('change',(e)=>{
//     ctx.fillStyle = e.target.value;
//     ctx.fillRect(0,0,800,500);
// });

// fontPicker.addEventListener('change',(e)=>{
//     ctx.lineWidth = e.target.value;
// });

// clearButton.addEventListener('click',()=>{
//     ctx.clearRect(0,0,canvas.width,canvas.height);
// });

// saveButton.addEventListener('click',()=>{
//     localStorage.setItem('canvasContent',canvas.toDataURL());
//     let link = document.createElement('a');
//     link.download = 'my-Canvas.jpg'
//     link.href = canvas.toDataURL();
//     link.click();

// });

// retriveButton.addEventListener('click',()=>{
//     let saveCanvas = localStorage.getItem('canvasContent')
//     if(saveCanvas){
//         let img = new Image();
//         img.src = saveCanvas;
//         ctx.drawImage(img,0,0);
        
//     }
// });
// //I send the code for Signature website but in this site the component background and clear nut cannot work. so help to solve the error and make both component of site working.


const colorPicker = document.querySelector("#colorPicker");
const canvasColor = document.querySelector("#canvasColor");
const canvas = document.querySelector("#myCanvas");
const clearButton = document.querySelector("#clearButton");
const saveButton = document.querySelector("#saveButton");
const retriveButton = document.querySelector("#retriveButton");
const fontPicker = document.querySelector("#fontPicker");
const ctx = canvas.getContext("2d");

var isDrawing = false;
var lastX, lastY;

canvas.style.backgroundColor = "#ffffff"; // Ensure default white background

// Update drawing color
colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
});

// Update canvas background color
canvasColor.addEventListener('change', (e) => {
    canvas.style.backgroundColor = e.target.value;
    ctx.fillStyle = e.target.value;
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill the canvas with new background color
});

// Start drawing
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    lastX = e.offsetX;
    lastY = e.offsetY;
});

// Drawing on mouse move
canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        lastX = e.offsetX;
        lastY = e.offsetY;
    }
});

// Stop drawing
canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

// Adjust brush size
fontPicker.addEventListener('change', (e) => {
    ctx.lineWidth = e.target.value;
});

// Clear canvas and reset background color
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = canvas.style.backgroundColor || "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Maintain background color after clearing
});

// Save canvas content
saveButton.addEventListener('click', () => {
    localStorage.setItem('canvasContent', canvas.toDataURL());
    let link = document.createElement('a');
    link.download = 'my-Canvas.jpg';
    link.href = canvas.toDataURL();
    link.click();
});

// Retrieve saved canvas content
retriveButton.addEventListener('click', () => {
    let savedCanvas = localStorage.getItem('canvasContent');
    if (savedCanvas) {
        let img = new Image();
        img.src = savedCanvas;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0);
        };
    }
});
