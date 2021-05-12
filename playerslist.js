const Discord = require("discord.js");

const Gamedig = require('gamedig');

module.exports = {

name: 'playerlist',

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

                 var content = "";

var players = state.players.map(player => player.name);

   let num = 0;

                 for(let i = 0; i < players.length; i++) {

                    content += `${i+1} - ${players[i]} \n`

                 }

   

                    let Embed = new Discord.MessageEmbed()
                   .setColor("#f7c91e")                
                   .setTitle('> **PlayersLists**')
.setFooter(`Requested By: ${message.author.tag}`) 
.setTimestamp()

                   .setDescription(`${content.slice(0, 2048)}\n`)
                   message.channel.send(Embed);

                
    });
  }
            )
    
    });
      }
      
  
  }
;

