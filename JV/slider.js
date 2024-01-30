var $links = $(".itemLinks");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedlink = e.target;
    clickedlink = $(clickedlink);
    var position = clickedlink.attr("data-pos");
    var translatevalue = "translateX(" + position * 25 + "%)";
    $("#wrapper").css({
        Transform: translatevalue
    });

clickedlink.addClass("active");
});

$($links[0]).addClass("active")

