window.addEventListener('resize',function(){
    if(window.innerWidth<=1000){
        document.getElementsByTagName('body')[0].style.left='0%';
    }
    else if(window.innerWidth>900){
        document.getElementsByTagName('body')[0].style.left='20%';
    }
});