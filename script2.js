let tbox = document.getElementById("t1");
let time1 = document.getElementById("t2");
let time2 = document.getElementById("t3");


function timeupdate(){

    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let second = time.getSeconds();
  
    let nowtime =  `${hours}:${minutes}:${second}`;
    time1.textContent = nowtime;

    if(hours<10){
     time1.textContent =  ` 0${hours}:${minutes}:${second}`;
    }
    
    if(minutes<10){
     time1.textContent =  `${hours}:0${minutes}:${second}`;
    }

    if(second<10){
      time1.textContent =  `${hours}:${minutes}:0${second}`;
    }

    if(hours>0 && hours<12){
     time2.textContent = "AM";
    
    }else{
        time2.textContent = "PM"
    }


    if(hours>=6 && hours<12){
      tbox.style.backgroundImage = "url('day_image.jpg')";
    }
    
    if(hours>=16 && hours<19){
       tbox.style.backgroundImage = "url('evening-Img.jpeg')";
    }

    if(hours>=20 || hours<4){
       tbox.style.backgroundImage = "url('night-Image.jpeg')";
    }

    
    
    
    
}

setInterval(timeupdate, 1000);

timeupdate();