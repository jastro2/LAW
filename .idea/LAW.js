$(function () {
    var w = $(window);
    w.scroll(function () {
        if (w.scrollTop() !== 0) {
            $(".d").removeClass("visible");
            return;
        }

        $(".d").addClass("visible");
    });

    $(".d").addClass("visible");

});