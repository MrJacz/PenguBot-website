/*
    (C) 2017 Aditya N. Tripathi | All Rights Reserved | Jacz was Here (Sad Meme)
*/
$(document).ready(() => {
    $(".button-collapse").sideNav({ menuWidth: 220 });
    $(".modal").modal();
    $(".parallax").parallax();
});

$("a[href*=\"#\"]")
    .not("[href=\"#\"]")
    .not("[href=\"#0\"]")
    .click(smoothscroll);

function smoothscroll(event) {
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
        if (target.length) {
            event.preventDefault();
            $("html, body").animate({ scrollTop: target.offset().top }, 1000, () => {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) {
                    return false;
                } else {
                    $target.attr("tabindex", "-1");
                    $target.focus();
                }
            });
        }
    }
}
