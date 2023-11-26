document.addEventListener("DOMContentLoaded", function () {
    var MBtitle = document.getElementById("MBtitle");
    var MBtextarea = document.getElementById("MBtextarea");
    var btnClear = document.getElementById("btnClear");
    var btnGet = document.getElementById("btnGet");
    var massageboard = document.getElementById("massageboard");
    var MBname = document.getElementById("MBname");
    var deleteMessage = document.getElementById("deleteMessage");

    btnGet.addEventListener("click", function () {
        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleString();
        massageboard.innerHTML =
            `
    <div class="row text-break text-center" id="del1">
            <h1 class="display-3 col-sm-2">${MBtitle.value}</h1>
            <div class="display-3 col-sm-6">${formattedTime}</div>
            <div class="display-3 col-sm-1">By</div>
            <div class="display-3 col-sm-3">${MBname.value}</div>
        </div>
            <div class="fs-1 ps-5 col-sm-10">${MBtextarea.value}</div>
    ` + massageboard.innerHTML;

    });
    btnClear.addEventListener("click", function () {
        MBtitle.value = "";
        MBtextarea.value = "";
        MBname.value = "";
    });
    deleteMessage.addEventListener("click", function () {
        massageboard.innerHTML = "";

    });
});