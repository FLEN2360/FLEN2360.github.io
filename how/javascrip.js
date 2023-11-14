var x = 0;
$(document).ready(function () {
    $(".changeToOne").click(function () {
        $("#exam").text(1);
    });
    $(".changeToTwo").click(function () {
        $("#exam").text(2);
    });
    $(".hide").click(function () {
        $(".main").slideUp(300);
    });
    $(".show").click(function () {
        $(".main").slideDown(300);
    });
    $("#addBtn").click(function () {
        x += 1;
        $("ol").append(`<li>list
        <button class="removeBtn delBtn${x}">移除</button>`);

    });

    $("#prependBtn").click(function () {
        $("#prependtext").prepend("newText");
    });
    $(".removeBtn").click(function () {
        $("li:last-child").remove();

    });
    $(".delBtn").click(function () {
        $("delBtn${x}").remove();

    });

});