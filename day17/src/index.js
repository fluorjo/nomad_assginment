// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The Senteces of the title should come from a Sentece from the Senteces array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
    sentence:document.querySelector('h2'),
    

    sentenceChangeMouseEnter:function sentenceChangeMouseEnter(){
            superEventHandler.sentence.innerText='The mouse is here!';

            superEventHandler.sentence.style.color=colors[0]
        },

    sentenceChangeMouseLeave:function sentenceChangeMouseLeave(){
            superEventHandler.sentence.innerText='The mouse is gone!';

            superEventHandler.sentence.style.color=colors[1]
        },

    windowResize:function windowResize(){
        superEventHandler.sentence.innerText='You just resized!';

        superEventHandler.sentence.style.color=colors[2]        
    },

    rightClick:function rightClick(){
        superEventHandler.sentence.innerText='That was a right click!';
        superEventHandler.sentence.style.color=colors[4]        

    },

    add_img:function add_img() { 

        if(document.querySelectorAll('img').length==0){
        let img = document.createElement('img'); 
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4jIeo-iRT2EvVkTGU-SVccSHv-Xn_kzyHA&usqp=CAU'; 
        document.querySelector('body').appendChild(img);
        }
        else{}
    }
}

// let newSentece= 'The Mouse is here!';
// console.log(currentSentence);
// console.log(newSentece);
// if(currentSentence === "Hello!"){
//     newSentece = 'The Mouse is here!';
// } else{
//     newSentece='blue';
// }


superEventHandler.sentence.addEventListener('mouseenter',superEventHandler.sentenceChangeMouseEnter);

superEventHandler.sentence.addEventListener('mouseleave',superEventHandler.sentenceChangeMouseLeave);

window.addEventListener("resize",superEventHandler.windowResize);
window.addEventListener("resize",superEventHandler.add_img);

window.addEventListener("contextmenu",superEventHandler.rightClick);


