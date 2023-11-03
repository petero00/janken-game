let kati = 0;
let make = 0;
let aiko = 0;

//gu = 1
//choki = 2
//pa = 3
document.getElementById("gu").onclick = function(){
    let com = Math.floor(Math.random() * 3) + 1;
    if(com === 1){
        //aiko
        document.getElementById("gazo").src = "janken_gu.png"
        te.textContent = 'あいこでした。';
        aiko = aiko + 1;
        tensu();
    }else if(com === 2){
        //kati
        document.getElementById("gazo").src = "janken_choki.png"
        te.textContent = 'あなたの勝ちです。';
        kati = kati + 1;
        tensu();
    }else{
        //make
        document.getElementById("gazo").src = "janken_pa.png"
        te.textContent = 'あなたの負けです。';
        make = make + 1;
        tensu();
    }
}

document.getElementById("choki").onclick = function(){
    let com = Math.floor(Math.random() * 3) + 1;
    if(com === 1){
        //make
        document.getElementById("gazo").src = "janken_gu.png"
            te.textContent = 'あなたの負けです。';
            make = make + 1;
            tensu();
    }else if(com === 2){
        //aiko
        document.getElementById("gazo").src = "janken_choki.png"
        te.textContent = 'あいこでした。';
        aiko = aiko + 1;
        tensu();
    }else{
        //kati
        document.getElementById("gazo").src = "janken_pa.png"
        te.textContent = 'あなたの勝ちです。';
        kati = kati + 1;
        tensu();
    }
}

document.getElementById("pa").onclick = function(){
    let com = Math.floor(Math.random() * 3) + 1;
    if(com === 1){
        //akti
        document.getElementById("gazo").src = "janken_gu.png"
            te.textContent = 'あなたの勝ちです。';
            kati = kati + 1;
            tensu();
    }else if(com === 2){
        //make
        document.getElementById("gazo").src = "janken_choki.png"
        te.textContent = 'あなたの負けです。';
        make = make + 1;
        tensu();
    }else{
        //aiko
        document.getElementById("gazo").src = "janken_pa.png"
        te.textContent = 'あいこでした。';
        aiko = aiko + 1;
        tensu();
    }
}

function tensu() {
    var joukyou = document.getElementById("jou")
    joukyou.innerHTML = kati + "勝" + make + "敗" + aiko + "分けでした。";
    return;
}
