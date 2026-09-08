// import{EventEmitter} from "node:events"
// function createDomElement(){
//     const emitter = new EventEmitter();
//     return{
//     addEventListener(evenName, callback){
//         emitter.on(eventName, callback);
//     },
//     removeEventListener(eventName,callback){
//         emitter.off(eventName,callback);
//     },
//     dispatchEvent(event){
//         emitter.emit(event.type,event);
//     },
// };
// }

// const button = createDomElement();
// button.addEventListener('click',()=>{
//     console.log
// })

// import {EventEmitter} from "node:events";

// function createDOMElement() {
//     const emitter = new EventEmitter();
//     return {
        
//         addEventListner(eventName, callback){
//             emitter.on(eventName, callback)
//         },

//         removeEventListner(eventName, callback){
//             emitter.off(eventName, callback)
//         },

//         dispatchEvent(event){
//             emitter.emit(event.type,event)
//         },
//     };
// }

// const button = createDOMElement();
// button.addEventListner('click',()=>{
//     console.log("button clicked")
// })



// function handleClick(event){

// }

import { EventEmitter } from "node:events";

function createDOMElement()  {
    const emitter = new EventEmitter();

return {


addEventListener: function(type, callback) {
    emitter.on(type, callback); 
},

 
    addEventListener(eventNames, callback) {
       emitter.on(eventName , callback);
    },

    removeEventListener(eventName, callback){
        emiiter.off(eventName, callback);
    },

    dispatchEvent(event) {
    emitter.emit(event.type, event);
    },
  };
}

const button = createDOMElement();
button.addEventListener('click',()=>{
    console.log("button clicked");
})

function handleClick(event) {
    console.log("Second handler:", event.detail);
}

button.addEventListener("click,handleClick");

button.dispatchEvent({
    typr:"click",
    detail:"Hello from node.js",
});

button.removeEventListener("click", handleClick);

