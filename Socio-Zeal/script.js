img=document.getElementById("img");
img1=document.getElementById("img1")
body=document.getElementById("main-container")
dark=document.getElementById("d-mode");
dark1=document.getElementById("d-mode1");
dark2=document.getElementById("d-mode2");
dark3=document.getElementById("d-mode3");
dark4=document.getElementById("d-mode4");
dark5=document.getElementById("d-mode5");
dark6=document.getElementById("d-mode6");
white=document.getElementById("greenish");
white1=document.getElementById("oran");
white2=document.getElementById("gree");
white3=document.getElementById("crea");
side1=document.getElementById("side1");
side2=document.getElementById("side2");

header=document.getElementById("header-section");

if(img){img.addEventListener('click',()=>{
    
img.classList.toggle('toggle');
    body.classList.toggle('abc');
    dark.classList.toggle('bcd');
    dark1.classList.toggle('bcd');
    dark2.classList.toggle('bcd');
    dark3.classList.toggle('bcd');
    dark4.classList.toggle('bcd');
   
 
    header.classList.toggle('gh')
    
})}

if(img1){
    img1.addEventListener('click',()=>{
        img1.classList.toggle('toggle');
        body.classList.toggle('abc');
        dark5.classList.toggle('bcd');
    dark6.classList.toggle('bcd');  
    white.classList.toggle('back');
    white1.classList.toggle('back');
    white2.classList.toggle('back');
    white3.classList.toggle('back');
    side1.classList.toggle('back');
    side2.classList.toggle('back');
    header.classList.toggle('gh');
    
    })
  
}

