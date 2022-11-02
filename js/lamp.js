
let universal = () => {

    let address = document.getElementById("light").src;
    console.log(address);
    
    if(address == "file:///C:/Users/levan/Desktop/Homework%2010/pics/off.png") {
        document.getElementById("light") .src = "pics/on.png";
        document.getElementById("universal").innerHTML = "Turn Off" ;
        document.getElementById("universal").style. backgroundColor = "#f50606";

    } 




    else{
        document.getElementById("light") .src = "pics/off.png";
        document.getElementById("universal").innerHTML = "Turn On" ;
        document.getElementById("universal").style. backgroundColor = "#088008";
    }
}
