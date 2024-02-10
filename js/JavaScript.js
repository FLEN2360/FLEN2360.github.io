var paper = document.getElementById("paper");
var ourPH = document.getElementById("ourPH");
var stone = document.getElementById("stone");
var enemyPH = document.getElementById("enemyPH");
var scissors = document.getElementById("scissors");
var wlt = document.getElementById("wlt");
var our, win = 0, lose = 0, tie = 0, enemy;
function onpaper() {
    ourPH.src = "./../photo/Paper.png";
    our = 0;
    judge()
}
function onscissors() {
    ourPH.src = "./../photo/Scissors.png";
    our = 1;
    judge()
}
function onstone() {
    ourPH.src = "./../photo/Stone.png";
    our = 2;
    judge()
}
function judge() {
    enemy = Math.round(Math.random() * 2);
    if (enemy == 2) {
        enemyPH.src = "./../photo/Stone.png";
    }
    if (enemy == 1) {
        enemyPH.src = "./../photo/Scissors.png";
    }
    if (enemy == 0) {
        enemyPH.src = "./../photo/Paper.png";
    }
    if (our == enemy) {
        tie += 1;
        wlt.innerHTML = `
        <div id="wlt">
                    <p>歡迎來到猜拳機...</p>
                    <p>讓我們來猜拳吧...!</p>
                    <p>勝利次數:${win}</p>
                    <p>失敗次數:${lose}</p>
                    <p>平手次數:${tie}</p>
                </div>`
    }
    if (our == 1 && enemy == 2) {
        lose += 1;
        wlt.innerHTML = `
        <div id="wlt">
                    <p>歡迎來到猜拳機...</p>
                    <p>讓我們來猜拳吧...!</p>
                    <p>勝利次數:${win}</p>
                    <p>失敗次數:${lose}</p>
                    <p>平手次數:${tie}</p>
                </div>`

    }
    if (our == 0 && enemy == 1) {
        lose += 1;
        wlt.innerHTML = `
        <div id="wlt">
                    <p>歡迎來到猜拳機...</p>
                    <p>讓我們來猜拳吧...!</p>
                    <p>勝利次數:${win}</p>
                    <p>失敗次數:${lose}</p>
                    <p>平手次數:${tie}</p>
                </div>`
    }
    if (our == 2 && enemy == 0) {
        lose += 1;
        wlt.innerHTML = `
        <div id="wlt">
                    <p>歡迎來到猜拳機...</p>
                    <p>讓我們來猜拳吧...!</p>
                    <p>勝利次數:${win}</p>
                    <p>失敗次數:${lose}</p>
                    <p>平手次數:${tie}</p>
                </div>`
    }
    if (enemy == 1 && our == 2) {
        win += 1;
        wlt.innerHTML = `
        <div id="wlt">
                    <p>歡迎來到猜拳機...</p>
                    <p>讓我們來猜拳吧...!</p>
                    <p>勝利次數:${win}</p>
                    <p>失敗次數:${lose}</p>
                    <p>平手次數:${tie}</p>
                </div>`
    }
    if (enemy == 0 && our == 1) {
        win += 1;
        wlt.innerHTML = `
        <div id="wlt">
                    <p>歡迎來到猜拳機...</p>
                    <p>讓我們來猜拳吧...!</p>
                    <p>勝利次數:${win}</p>
                    <p>失敗次數:${lose}</p>
                    <p>平手次數:${tie}</p>
                </div>`
    }
    if (enemy == 2 && our == 0) {
        win += 1;
        wlt.innerHTML = `
        <div id="wlt">
                    <p>歡迎來到猜拳機...</p>
                    <p>讓我們來猜拳吧...!</p>
                    <p>勝利次數:${win}</p>
                    <p>失敗次數:${lose}</p>
                    <p>平手次數:${tie}</p>
                </div>`
    }
}
var nameMB, titleMB, textAreaMB;
$(document).ready(function () {
    $("#buttonMB").click(function () {
        nameMB = $("#nameMB").val();
        titleMB = $("#titleMB").val();
        textAreaMB = $("#textAreaMB").val();


    });
});