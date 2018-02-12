$(document).ready(() => {
    const $burger = $(".navbar-burger");
    const $menu = $(".navbar-menu");
    $burger.click(() => {
        $burger.toggleClass("is-active");
        $menu.toggleClass("is-active");
    });
});
