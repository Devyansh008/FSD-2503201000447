console.log("start")
process.nextTick(()=>{
    console.log("nexttick");
});

setTimeout(() => {
    console.log("settimeout");
}, 5000);

setImmideate(()=>{
    console.log("setImmediate");
});
console.log("end");