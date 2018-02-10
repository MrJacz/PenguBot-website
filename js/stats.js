$().ready(() => {
    toggleBurger();
    stats();
    setInterval(stats, 60000);
});


function stats() {
    $.get("https://api.pengubot.com/stats").done(data => {
        $("#guildCount").text(data.guilds.toLocaleString());
        $("#channelCount").text(data.channels.toLocaleString());
        $("#userCount").text(data.users.toLocaleString());
        $("#memoryCount").text(`${data.memory.toFixed(2)} MB`);
        $("#voiceCount").text(data.vcs.toLocaleString());
        $("#cmdCount").text(data.cmdRun);

        for (let i = 0; i < data.shards.length; i++) {
            const shard = data.shards[i];
            $("#shardColumns").append(`
        <div class="card">
        <header class="card-header">
          <p class="card-header-title"> Shard ${shard.shard} </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p> Guilds: <strong> ${shard.guilds.toLocaleString()} </strong> </p>
            <p> Channels: <strong> ${shard.channels.toLocaleString()} </strong> </p>
            <p> Users: <strong> ${shard.users.toLocaleString()} </strong> </p>
            <p> Memory: <strong> ${shard.memory.toFixed(2)} MB </strong> </p>
            <p> Voice Connections: <strong> ${shard.vcs.toLocaleString()} </strong> </p>
            <p> Uptime: <strong> ${duration(shard.uptime)} </strong> </p>
            <p> Ping: <strong> ${Math.round(shard.ping)} ms </strong> </p>
            <p> Commands Ran: <strong> ${shard.cmdRun} </strong> </p>
          </div>
        </div>
      </div>
      `);
        }
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
