const Discord = require("discord.js");

const Gamedig = require('gamedig');


module.exports = {
  
name: "botstatus",
  
async run (message,client,args) {


                    let Embed = new Discord.MessageEmbed()
                    
                   .setTitle('> **Information on the Programmer <:7223_unverified:808794692727865364>**')
                    
                   .setDescription('> **Programming By : EarthScript** \n > **Bot language : __Javascript__** \n > **Bot Prefix : `f!`**  \n > **Bot Version : v2.3** \n > **Last Updated : 23 Apr**')

.setFooter(`Requested By: ${message.author.tag}`) 
.setTimestamp()

                   //.setImage('https://cdn.discordapp.com/attachments/834455087652798497/834467857378312232/U.png') 
                    
                   .setColor('RED')
                    
                   message.channel.send(Embed);

                

 }

 }
 
