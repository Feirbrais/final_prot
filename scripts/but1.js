let n=0;
function alerted1(){
    //document.querySelector('#elem1').style.src = 'style/sale/4.jpg';
    if(n>0){
        document.getElementById('elem1').classList.toggle('active');
        document.getElementById('elem2').classList.toggle('active');
        document.getElementById('elem3').classList.toggle('active');
        n=n-1;
        document.getElementById('d2').classList.toggle('active');
        document.getElementById('d1').classList.toggle('active');
    }
}

function alerted2(){
    //document.getElementById('box').classList.toggle('active');
    if(n<1){
        document.getElementById('elem1').classList.toggle('active');
        document.getElementById('elem2').classList.toggle('active');
        document.getElementById('elem3').classList.toggle('active');
        n=n+1;
        document.getElementById('d2').classList.toggle('active');
        document.getElementById('d1').classList.toggle('active');
    }
}

window.addEventListener('resize',function(){
    if(window.innerWidth<=1000){
        document.getElementsByTagName('body')[0].style.left='0%';
    }
    else if(window.innerWidth>900){
        document.getElementsByTagName('body')[0].style.left='20%';
    }
});

let prof=1;
let f1=document.getElementById('i1').classList.toggle('active');
let f2=document.getElementById('i7').classList.toggle('active1');

function cl1(){
    if(prof!=1){
        if(prof==2){
            document.getElementById('i2').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active2');
        }
        else if(prof==3){
            document.getElementById('i3').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active3');
        }
        else if(prof==4){
            document.getElementById('i4').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active4');
        }
        else if(prof==5){
            document.getElementById('i5').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active5');
        }
        else if(prof==6){
            document.getElementById('i6').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active6');
        }
        document.getElementById('i1').classList.toggle('active');
        document.getElementById('i7').classList.toggle('active1');
        prof=1;
    }
}

function cl2(){
    if(prof!=2){
        if(prof==1){
            document.getElementById('i1').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active1');
        }
        else if(prof==3){
            document.getElementById('i3').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active3');
        }
        else if(prof==4){
            document.getElementById('i4').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active4');
        }
        else if(prof==5){
            document.getElementById('i5').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active5');
        }
        else if(prof==6){
            document.getElementById('i6').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active6');
        }
        document.getElementById('i2').classList.toggle('active');
        document.getElementById('i7').classList.toggle('active2');
        prof=2;
    }
}

function cl3(){
    if(prof!=3){
        if(prof==2){
            document.getElementById('i2').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active2');
        }
        else if(prof==1){
            document.getElementById('i1').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active1');
        }
        else if(prof==4){
            document.getElementById('i4').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active4');
        }
        else if(prof==5){
            document.getElementById('i5').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active5');
        }
        else if(prof==6){
            document.getElementById('i6').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active6');
        }
        document.getElementById('i3').classList.toggle('active');
        document.getElementById('i7').classList.toggle('active3');
        prof=3;
    }
}

function cl4(){
    if(prof!=4){
        if(prof==2){
            document.getElementById('i2').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active2');
        }
        else if(prof==3){
            document.getElementById('i3').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active3');
        }
        else if(prof==4){
            document.getElementById('i1').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active1');
        }
        else if(prof==5){
            document.getElementById('i5').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active5');
        }
        else if(prof==6){
            document.getElementById('i6').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active6');
        }
        document.getElementById('i4').classList.toggle('active');
        document.getElementById('i7').classList.toggle('active4');
        prof=4;
    }
}

function cl5(){
    if(prof!=5){
        if(prof==2){
            document.getElementById('i2').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active2');
        }
        else if(prof==3){
            document.getElementById('i3').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active3');
        }
        else if(prof==4){
            document.getElementById('i4').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active4');
        }
        else if(prof==1){
            document.getElementById('i1').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active1');
        }
        else if(prof==6){
            document.getElementById('i6').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active6');
        }
        document.getElementById('i5').classList.toggle('active');
        document.getElementById('i7').classList.toggle('active5');
        prof=5;
    }
}

function cl6(){
    if(prof!=6){
        if(prof==2){
            document.getElementById('i2').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active2');
        }
        else if(prof==3){
            document.getElementById('i3').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active3');
        }
        else if(prof==4){
            document.getElementById('i4').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active4');
        }
        else if(prof==5){
            document.getElementById('i5').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active5');
        }
        else if(prof==1){
            document.getElementById('i1').classList.toggle('active');
            document.getElementById('i7').classList.toggle('active1');
        }
        document.getElementById('i6').classList.toggle('active');
        document.getElementById('i7').classList.toggle('active6');
        prof=6;
    }
}