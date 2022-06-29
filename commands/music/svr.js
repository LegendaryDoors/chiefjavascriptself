const { VoiceChannel } = require("discord.js");
const voiceDiscord = require('@discordjs/voice')

module.exports = {
  name: "svr",
  catagory: "music",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const num = (Math.floor(Math.random() * 10) + 1).toString();
    const selection = Math.floor(Math.random() * 2) + 1

    const svrVideos = Array(
"!play https://www.youtube.com/watch?v=R9EYBzH969Q",
"!play https://www.youtube.com/watch?v=ps1Xmk7P4wk",
"!play https://www.youtube.com/watch?v=7PtE5_mxbXw",
"!play https://www.youtube.com/watch?v=eo0k3g1VL_w",
"!play https://www.youtube.com/watch?v=__00Hip4N9k",
"!play https://www.youtube.com/watch?v=LtcElcgbI7A",
"!play https://www.youtube.com/watch?v=LcckCE3WU4w",
"!play https://www.youtube.com/watch?v=5OEghhORQUs",
"!play https://www.youtube.com/watch?v=3GQWNaW9zPk",
"!play https://www.youtube.com/watch?v=nzVk3LsFPr8",
"!play https://www.youtube.com/watch?v=sTgybb08xmI",
"!play https://www.youtube.com/watch?v=HrlIOaTCu3Q",
"!play https://www.youtube.com/watch?v=U6QWPj4nO5s",
"!play https://www.youtube.com/watch?v=JqrpelvTyXU",
"!play https://www.youtube.com/watch?v=Fi1_7mONAds",
"!play https://www.youtube.com/watch?v=YJiLoGYrCQo",
"!play https://www.youtube.com/watch?v=Su4B_L8tL4Q",
"!play https://www.youtube.com/watch?v=_fQXBt7wBhc",
"!play https://www.youtube.com/watch?v=T4Yvkj0lZ3k",
"!play https://www.youtube.com/watch?v=d7eodccKyz4",
"!play https://www.youtube.com/watch?v=PBXd8SNHZW0",
"!play https://www.youtube.com/watch?v=oSCGS5nwOtk",
"!play https://www.youtube.com/watch?v=8S6camFTqQU",
"!play https://www.youtube.com/watch?v=S6vR8Zc-5h4",
"!play https://www.youtube.com/watch?v=h3I2mjRlv_Q",
"!play https://www.youtube.com/watch?v=np-qw5USLxs",
"!play https://www.youtube.com/watch?v=YHvj_Rta3vU",
"!play https://www.youtube.com/watch?v=s0HI6DjJXVY",
"!play https://www.youtube.com/watch?v=EuShrEZaB44",
"!play https://www.youtube.com/watch?v=GwQbPpXYqNA",
"!play https://www.youtube.com/watch?v=IBDXiqqHXio",
"!play https://www.youtube.com/watch?v=xc_StY-9No8",
"!play https://www.youtube.com/watch?v=T05rVszsaLo",
"!play https://www.youtube.com/watch?v=gjGsTIluoms",
"!play https://www.youtube.com/watch?v=Wdfu3SMPCxY",
"!play https://www.youtube.com/watch?v=QNrsALkzdkU",
"!play https://www.youtube.com/watch?v=zH9fBQ6xkZQ",
"!play https://www.youtube.com/watch?v=8Q9oNLty6hs",
"!play https://www.youtube.com/watch?v=7A9Fc4xjI8k",
"!play https://www.youtube.com/watch?v=LXIoMUcXgps",
"!play https://www.youtube.com/watch?v=2yTLZh_qF-U",
"!play https://www.youtube.com/watch?v=oFb75Sfhlv8",
"!play https://www.youtube.com/watch?v=pGzUl8HvhJc",
"!play https://www.youtube.com/watch?v=I70QYvOC888",
"!play https://www.youtube.com/watch?v=rFIgWdn9FVA",
"!play https://www.youtube.com/watch?v=oKqb2sCzqPI",
"!play https://www.youtube.com/watch?v=ueQZvDCHYVc",
"!play https://www.youtube.com/watch?v=6Ads-val0fM",
"!play https://www.youtube.com/watch?v=xx-xkXsMnuQ",
"!play https://www.youtube.com/watch?v=GqUke6gK13U",
"!play https://www.youtube.com/watch?v=wUyItfjxCaY",
"!play https://www.youtube.com/watch?v=FTGqFAeFGq4",
"!play https://www.youtube.com/watch?v=ta-gZYNrj20",
"!play https://www.youtube.com/watch?v=vNV1VOlndrA",
"!play https://www.youtube.com/watch?v=GLHDvAh36eM",
"!play https://www.youtube.com/watch?v=8oZsaQolCnc",
"!play https://www.youtube.com/watch?v=ghtsziBO_ic",
"!play https://www.youtube.com/watch?v=vHQkNDMfCBM",
"!play https://www.youtube.com/watch?v=WUaKU7zC0A0",
"!play https://www.youtube.com/watch?v=z3O_wDIn3_Y",
"!play https://www.youtube.com/watch?v=WzsfJ4_O34Y",
"!play https://www.youtube.com/watch?v=SYEIT-_qvX4",
"!play https://www.youtube.com/watch?v=Wf9W-WyGaI4",
"!play https://www.youtube.com/watch?v=65X1flKPmcI",
"!play https://www.youtube.com/watch?v=EDNZ2zubuKg",
"!play https://www.youtube.com/watch?v=h6863vjJ9Ds"
    );

    function random_video(svrVideos) {
      return svrVideos[
        Math.floor(Math.random() * svrVideos.length)
      ];
    }
    
    const channel = message.member.voice.channel;
    if(!channel) return message.channel.send('Join a voice channel first!')

    const connection = voiceDiscord.joinVoiceChannel({
        channelId: channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
    })
    message.channel.send(random_video(svrVideos));
}
};
