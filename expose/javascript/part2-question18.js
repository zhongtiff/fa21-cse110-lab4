function printtime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var intervalID = setInterval(printtime, 1000);