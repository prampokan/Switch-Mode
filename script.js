let body = document.body;
let mode = document.getElementById("mode");
let refresh = document.getElementById("refresh");

const darkLimit = 5;
let darkCounter = 0;
let darkSisa;

function darkMode(){
    if(darkSisa == 1){
        info.textContent = "Dark Mode Anda Sudah Habis!"
        refresh.textContent = "RESTART";
        document.getElementById("mode").style.display = 'none';
        document.getElementById("angry").style.display = 'none';
        document.getElementById("happy").style.display = 'none';
        document.getElementById("janda").style.display = 'none';
        return;}
    if (darkCounter%2==0){
        mode.textContent = "LIGHT MODE"
        angry.textContent = "ANGRY MODE"
        happy.textContent = "HAPPY MODE"
        janda.textContent = "JANDA MODE"
    }
    else{
        mode.textContent = "DARK MODE"
        angry.textContent = "LIGHT MODE"
        happy.textContent = "LIGHT MODE"
        janda.textContent = "LIGHT MODE"
    }
        darkCounter += 1;
        darkSisa = darkLimit - darkCounter;
        info.textContent = `Dark Mode sudah dipakai sebanyak ${darkCounter}x, tersisa ${darkSisa}`;
        body.classList.toggle("dark");
        body.classList.remove("angry");
        body.classList.remove("happy");
        body.classList.remove("janda");
}

let angry = document.getElementById("angry");
const angryLimit = 5;
let angryCounter = 0;
let angrySisa;

function angryMode(){
    if(angrySisa == 1){
        info.textContent = "Angry Mode Anda Sudah Habis!"
        refresh.textContent = "RESTART";
        document.getElementById("mode").style.display = 'none';
        document.getElementById("angry").style.display = 'none';
        document.getElementById("happy").style.display = 'none';
        document.getElementById("janda").style.display = 'none';
        return;}
    if (angryCounter%2==0){
        angry.textContent = "LIGHT MODE"
        mode.textContent = "DARK MODE"
        happy.textContent = "HAPPY MODE"
        janda.textContent = "JANDA MODE"
    }
    else{
        angry.textContent = "ANGRY MODE"
        mode.textContent = "LIGHT MODE"
        happy.textContent = "LIGHT MODE"
        janda.textContent = "LIGHT MODE"
    }
        angryCounter += 1;
        angrySisa = angryLimit - angryCounter;
        info.textContent = `Angry Mode sudah dipakai sebanyak ${angryCounter}x, tersisa ${angrySisa}`;
        body.classList.toggle("angry");
        body.classList.remove("dark");
        body.classList.remove("happy");
        body.classList.remove("janda");
}

let happy = document.getElementById("happy");
const happyLimit = 5;
let happyCounter = 0;
let happySisa;

function happyMode(){
    if(happySisa == 1){
        info.textContent = "Happy Mode Anda Sudah Habis!"
        refresh.textContent = "RESTART";
        document.getElementById("mode").style.display = 'none';
        document.getElementById("angry").style.display = 'none';
        document.getElementById("happy").style.display = 'none';
        document.getElementById("janda").style.display = 'none';
        return;}
    if (happyCounter%2==0){
        happy.textContent = "LIGHT MODE"
        mode.textContent = "DARK MODE"
        angry.textContent = "ANGRY MODE"
        janda.textContent = "JANDA MODE"
    }
    else{
        happy.textContent = "HAPPY MODE"
        mode.textContent = "LIGHT MODE"
        angry.textContent = "LIGHT MODE"
        janda.textContent = "LIGHT MODE"
    }
        happyCounter += 1;
        happySisa = happyLimit - happyCounter;
        info.textContent = `Happy Mode sudah dipakai sebanyak ${happyCounter}x, tersisa ${happySisa}`;
        body.classList.toggle("happy");
        body.classList.remove("dark");
        body.classList.remove("angry");
        body.classList.remove("janda");
}

let janda = document.getElementById("janda");
const jandaLimit = 5;
let jandaCounter = 0;
let jandaSisa;

function jandaMode(){
    if(jandaSisa == 1){
        info.textContent = "Janda Mode Anda Sudah Habis!"
        refresh.textContent = "RESTART";
        document.getElementById("mode").style.display = 'none';
        document.getElementById("angry").style.display = 'none';
        document.getElementById("happy").style.display = 'none';
        document.getElementById("janda").style.display = 'none';
        return;}
    if (jandaCounter%2==0){
        janda.textContent = "LIGHT MODE"
        mode.textContent = "DARK MODE"
        angry.textContent = "ANGRY MODE"
        happy.textContent = "HAPPY MODE"
    }
    else{
        janda.textContent = "JANDA MODE"
        mode.textContent = "LIGHT MODE"
        angry.textContent = "LIGHT MODE"
        happy.textContent = "LIGHT MODE"
    }
        jandaCounter += 1;
        jandaSisa = jandaLimit - jandaCounter;
        info.textContent = `Janda Mode sudah dipakai sebanyak ${jandaCounter}x, tersisa ${jandaSisa}`;
        body.classList.toggle("janda");
        body.classList.remove("dark");
        body.classList.remove("angry");
        body.classList.remove("happy");
}


function reFresh(){
    location.reload();
}