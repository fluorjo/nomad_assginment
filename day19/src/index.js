const text=document.querySelector('h1');
text.style.color='white';

const background=document.querySelector('body');



function handlewindowResize(){
    const windowWidth=window.innerWidth;

if(windowWidth<400){
    background.classList.add('blue');
    background.classList.remove('green');
    background.classList.remove('red');
    
} else if (windowWidth>=400 && windowWidth<700){
    background.classList.remove('blue');
    background.classList.add('green');
    background.classList.remove('red');

} else {
    background.classList.remove('blue');
    background.classList.remove('green');
    background.classList.add('red');
} 

}

window.addEventListener("resize",handlewindowResize);

const img=document.querySelector('img');
img.width=200;
img.height=200;

//----------------------

let c =0;



function first(){
        a= window.innerWidth
    }

function second(){
    setTimeout(function(){
    b= window.innerWidth
    if (b-a>0) {
        img.src = "push.png"
        
    } else if(b-a<0) {
        img.src = "pull.png"
    }

},500);}

function third(){
        img.src = "good.png"
}

window.addEventListener("resize",first);
window.addEventListener("resize",second);
window.addEventListener("mouseover",third);

