/**
 * @param {import("discord.js").GuildMember} member 
 */
 module.exports = async (member) => {
    let channel = await member.guild.channels.fetch('1006080822215966741');
    channel.setName(`User Count: ${member.guild.memberCount - member.guild.members.cache.filter(m => m.user.bot).size}`).catch(e => console.error(`[ERROR]: ${e}`.red));
}