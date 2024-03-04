//  Getting Rendom hex color code 
function colorChange (){
    const hex = "0123456789ABCDEF"
    let color = '#';
    for (i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    console.log(color);
    
    return color ;
}
// start changing color on every second 
let hexCode = document.getElementById("hexcode");
let myInterval;
function rendomColour (){
    if(!myInterval){
  myInterval=   setInterval(()=>{
        document.body.style.backgroundColor= colorChange();
        // print hexcode 
        hexCode.innerText=colorChange(); 
    },1000)
    }
}
// stop changing color
function stopRendomColor(){
    clearInterval(myInterval);
    myInterval=null;
}
document.querySelector("#start").addEventListener('click',rendomColour)
document.querySelector("#stop").addEventListener('click',stopRendomColor)


// Color code copy 
let copy = document.querySelector("#copy");
function copyToClickBoard(){
    var content = hexCode.innerHTML;

    navigator.clipboard.writeText(content)
        .then(() => {
           
        alert(`HexCode ${content} Copied Succesfull`)
    })
    
        .catch(err => {
        console.log('Something went wrong', err);
    })
 
}
document.getElementById("copy").addEventListener('click',copyToClickBoard)

