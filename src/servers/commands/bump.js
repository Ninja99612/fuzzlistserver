const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");
const serverData = require("../../database/models/servers/server.js");
exports.run = async (client, message, args) => {
	let findServer = await serverData.findOne({ id: message.guild.id });
	if(!findServer) return message.channel.send(
		"This server was not found in our list.\nAdd your server: https://www.dscbots.tk/server/add"
	);
	let cooldown = 1800000;
  	let lastDaily = findServer.bump;
  	if (cooldown - (Date.now() - lastDaily) > 0) {
    	return await msgError('This command is used only once every 30 minutes.', { channel: message.channel });
    let timeObj = ms(cooldown - (Date.now() - lastDaily)); 
	} else {
    let kod1 = client.makeid(6);
    let kod2 = client.makeid(6);
    let kod3 = client.makeid(6);


    let sorgu = new MessageButton()
    .setLabel(kod1)
    .setStyle("blurple")
    .setID(kod1)
    let sorgu2 = new MessageButton()
    .setLabel(kod2)
    .setStyle("blurple")
    .setID(kod2)
    let sorgu3 = new MessageButton()
    .setLabel(kod3)
    .setStyle("blurple")
    .setID(kod3)
    let web = new MessageButton()
    .setLabel("Visit server page")
    .setStyle("url")
    .setURL("https://www.dscbots.tk/server/"+message.guild.id)

    const incorrectButton = new Discord.MessageEmbed()
	.setTitle("No way, the operation was canceled because you clicked the wrong code.")
	.setColor("RED")
	.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
	const correctButton = new Discord.MessageEmbed()
	.setTitle(`You have successfully bumped for server **${message.guild.name}**.`)
	.setColor("GREEN")
	.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
  .setImage('https://cdn.discordapp.com/attachments/927195816777613322/933744864087146507/imageSUS.png')



}
};
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: []
};
exports.help = {
	name: 'bump',
	description: '',
	usage: ''
};
function msgError(msg, { channel }) {
    channel.send(new Discord.MessageEmbed()
    .setAuthor(global.clientSL.user.username,global.clientSL.user.avatarURL())
    .setFooter('www.dscbots.tk/servers')
    .setDescription(msg)
    .setColor("RED")
    )
}