const Discord = require("discord.js"); 
const Gamedig = require("gamedig"); 

module.exports = {
  name: "serverstatus", 
 run: async(message,client,args) => {
    message.channel.send(`**Please Write Your Host** `);
    let filter = m => m.author.id === message.author.id;
    var host = "";
    let sugsa2 = message.channel
      .awaitMessages(filter, { max: 1, time: 60000 })
      .then(co => {
        host = co.first().content;
    
    message.channel.bulkDelete(2);     

    message.channel.send(`**Please Write Your Port** `);
    let filter = m => m.author.id === message.author.id;
    var port = "";
    let sugsa2 = message.channel
      .awaitMessages(filter, { max: 1, time: 60000 })
      .then(co => {
        port = co.first().content;
    message.channel.bulkDelete(3);   
        Gamedig.query({

        type: 'mtasa', //

        host: `${host}`, //  

        port: `${port}`  // 

                }).then((state) => {
        if (state["raw"]["numplayers"] === 0) {
          let embed = new Discord.MessageEmbed()
            .setColor("GREEN")
.setFooter(`Requested By: ${message.author.tag}`) 
            .setTitle("> **Server Status**  ")
            .setDescription("**Status : Online** ")
.setTimestamp()

          message.channel.send({ embed });
        } else {
          let embed = new Discord.MessageEmbed()
            .setColor("GREEN")
            .setTitle("> **Server Status**  ")
.setTimestamp()

.setFooter(`Requested By: ${message.author.tag}`) 
            .setDescription("**Status : Online** ")
          message.channel.send({ embed });
        }
      })
      .catch((error) => {
        let embed = new Discord.MessageEmbed()
          .setColor("RED")
.setTimestamp()

          .setTitle("> **Server Status**  ")
          .setDescription("**Status : Offline** ")
.setFooter(`Requested By: ${message.author.tag}`) 
        message.channel.send({ embed });
    });
  }
            )
    
    });
      }
      
  
  }
;
