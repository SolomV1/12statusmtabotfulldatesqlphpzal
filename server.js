const prefix = ".";

const devs = ["746647499460051025"]; // ID Owner

const { Client, Collection } = require("discord.js");

const client = new Client();

const Discord = require("discord.js");

const fs = require("fs");

const Gamedig = require("gamedig");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "رابط") {
    msg.channel.send("> <:774623547964260353:834487216008462366> **https://discord.gg/8e3KfekT**");
  }
});

client.commands = new Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

const cmd = require("node-cmd");
client.on("ready", () => {
  console.log("bot iniciado");
client.user.setActivity(`.help | v1.0.0`,{ type: "WATCHING" });
 }); 
/*
client.on("ready", () => {
  console.log("bot iniciado");

  Gamedig.query({
    type: "mtasa", //

    host: "51.83.173.177", //

    port: "22003" //
  }).then(state => {
    client.user.setActivity(
      `Players: ${state.raw.numplayers}/${state.maxplayers}`,
      { type: "PLAYING" }
    );
  });

  setInterval(() => {
    cmd.run("refresh");

    console.log("Done Refresh");
  }, 30000);
});
*/
client.on("message", message => {
  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  const [commandName, ...args] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  if (!client.commands.has(commandName)) return;

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      cmd => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  command.run(message, client, args);
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return; // by : zef

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/); // by : zef

  const command = args.shift().toLowerCase(); // by : zef

  if (!client.commands.has(command)) return; // by : zef

  try {
    client.commands.get(command).run(client, message, args); // by : zef
  } catch (error) {
    console.error(error); // by : zef

    message.reply("حدث خطأ أثناء محاولة تشغيل هذا الأمر!"); // by : zef
  }
});
client.on('message', message => {   
	if (message.content === prefix + "help") {

    let embed = new Discord.MessageEmbed()
        
.setColor("#f7c91e")    
.setFooter(`Requested By: ${message.author.tag}`) 
.setTimestamp()
.addField(`> Bot Commands :`,`\`.\`**botdev**
\`.\`**botstatus**
`, true)  
.addField(`> Player Commands`,`\`.\`**playerlist**
\`.\`**playerping**
\`.\`**playerhour**`, true) 
.addField(`Server Commands`,`\`.\`**serverinfo**
\`.\`**serverstatus**`, true)
    message.channel.send(embed);

  }

});


client.login(process.env.token);
