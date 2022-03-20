const disbots = require("disbots-xyz");
const Discord = require('discord.js');
const client = new Discord.Client();
const profiles = require("../database/models/profile.js");
module.exports.run = async (client,message,args) => {
   if(!args[0]) return message.channel.send("Error: Please provide a userID");
   let b = await profiles.findOne({ userID: args[0] });
   
    var  website;
    var  github;
    var  instagram;
    var  twitter;

   let userinfo = client.users.cache.get(args[0])

    if(!userinfo){
  return  message.channel.send('UserId is invalid!')
    }
 
   if(!b){
       website = "\n No website linked"
       github = "\n No  github linked"
       instagram = "\n No instagram linked"
       twitter = "\n No twitter linked"
   }else{
    website = b.website ?  "\n [Website]("+b.website+")" : "";
    github = b.github ? `\n [Github](https://github.com/${b.github})` : "";
    instagram = b.instagram ? `\n [Instagram](https://www.instagram.com/${b.instagram})` : "";
    twitter = b.twitter ? `\n [Twitter](https://www.twitter.com/${b.twitter})` : "";
   }

    

   const embed = new Discord.MessageEmbed()
   if(b){
    if(!b.coins){
           embed.addField("Coins", "0", false)
    }else{
           embed.addField("Coins", b.coins, false)
    }
}else{
       embed.addField("Coins", "0", false)
}
    
   if(!b){
    embed.setDescription("User doesn't have a biography.")
       
   }else{
    if(!b.biography){
            embed.setDescription("User doesn't have a biography.")
   }else{
    embed.setDescription(`${b.biography}`)
   }
}embed.setThumbnail(userinfo.displayAvatarURL())
embed.setAuthor(userinfo.tag, userinfo.displayAvatarURL())
embed.addField("ID", userinfo.id || b.userID, true)
embed.addField("Username", userinfo.username, true)
embed.addField("Links", ` ${website}${github}${instagram}${twitter}`, false)
embed.setColor("#7289da")
   message.channel.send(embed)


};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
  };
  
  exports.help = {
    name: "whois",
    description: "",
    usage: ""
  };