$().ready(() => {
    const $burger = $(".navbar-burger");
    const $menu = $(".navbar-menu");
    $burger.click(() => {
        $burger.toggleClass("is-active");
        $menu.toggleClass("is-active");
    });

    const guildText = $("#guildCount");
    const channelText = $("#channelCount");
    const userText = $("#userCount");
    const memoryText = $("#memoryCount");
    const voiceText = $("#voiceCount");

    stats();
    setInterval(stats, 60000);

    function stats() {
        $.get("https://api.pengubot.com/stats").done(data => {
            guildText.text(data.guilds.toLocaleString());
            channelText.text(data.channels.toLocaleString());
            userText.text(data.users.toLocaleString());
            memoryText.text(`${data.memory.toFixed(2)} MB`);
            voiceText.text(data.vcs.toLocaleString());
        });
    }
});
