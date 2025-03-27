function timer(time){
    setTimeout(()=>{
        onComplete();
    },time)

    function onComplete(){
        console.log(`Timer of <${time}> ms finished.`)
    }
}

timer(3000);