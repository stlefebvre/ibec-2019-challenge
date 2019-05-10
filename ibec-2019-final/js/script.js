$(document).ready(function() {
    checkSize();
    $(window).resize(checkSize);
    document.getElementById("arrow").addEventListener("click", function() {
        this.classList.toggle("rotated");
    });
    $("button").click(function() {
        $("p, footer").toggle(1000);
    });
});

//checks display property, which changes upon media query
function checkSize() {
    if ($(".card__content").css("display") == "inline") {
        $("p, footer").hide();
    } else if ($(".card__content").css("display") == "initial") {
        $("p, footer").show();
        $(".card__header").hide();
        
    }
}