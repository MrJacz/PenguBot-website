$().ready(() => {
    toggleBurger();
    stats();
    listShards();
    setInterval(stats, 60000);
});

function listShards() {
    $.get("https://api.pengubot.com/stats/shards").done(shards => {
        for (const id in shards) {
            const shard = shards[id];
            $("#shardColumns").append(`
        <div class="card">
        <header class="card-header">
          <p class="card-header-title"> ${id.replace("shard_", "Shard ")} </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p> Guilds: <strong> ${shard.guilds.toLocaleString()} </strong> </p>
            <p> Channels: <strong> ${shard.channels.toLocaleString()} </strong> </p>
            <p> Users: <strong> ${shard.users.toLocaleString()} </strong> </p>
            <p> Memory: <strong> ${shard.memory.toFixed(2)} MB </strong> </p>
            <p> Voice Connections: <strong> ${shard.vcs.toLocaleString()} </strong> </p>
            <p> Uptime: <strong> ${duration(shard.uptime)} </strong> </p>
            <p> Commands Ran: <strong> ${shard.cmdRun} </strong> </p>
          </div>
        </div>
      </div>
`);
        }
    });
}

function stats() {
    const guildText = $("#guildCount");
    const channelText = $("#channelCount");
    const userText = $("#userCount");
    const memoryText = $("#memoryCount");
    const voiceText = $("#voiceCount");

    $.get("https://api.pengubot.com/stats").done(data => {
        guildText.text(data.guilds.toLocaleString());
        channelText.text(data.channels.toLocaleString());
        userText.text(data.users.toLocaleString());
        memoryText.text(`${data.memory.toFixed(2)} MB`);
        voiceText.text(data.vcs.toLocaleString());
    });
}

function toggleBurger() {
    const $burger = $(".navbar-burger");
    const $menu = $(".navbar-menu");
    $burger.click(() => {
        $burger.toggleClass("is-active");
        $menu.toggleClass("is-active");
    });
}

function duration(ms) {
    const sec = Math.floor((ms / 1000) % 60).toString();
    const min = Math.floor((ms / (1000 * 60)) % 60).toString();
    const hrs = Math.floor(ms / (1000 * 60 * 60)).toString();
    return `${hrs}:${min.padStart(2, "0")}:${sec.padStart(2, "0")}`;
}
