//style
let bodyPoster = document.getElementById("bodyPoster");
bodyPoster.style.backgroundImage = 'url(https://64.media.tumblr.com/6baae01ac6fe25f9e99c9b60ba98533e/f1dfd324bd72a2d8-2d/s1280x1920/aa04e6786d7d85176d32783adf067e77c1fb8136.jpg)';



//playlist
let channels = {
  nasVrem:"https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8",
  minIdey: "https://live-minidey.cdnvideo.ru/minidey/minidey.sdp/playlist.m3u8",
  univSmotr: "https://cdn.universmotri.ru/live/hq.sdp/playlist.m3u8",
  triAngel:"https://hls.tv.3angels.ru/stream/HQ.m3u8",
  muzTv:"https://rutv.gcdn.co/streams/1410_95/playlist.m3u8",
  rtDoc:"https://rtmp.api.rt.com/hls/rtdru.m3u8",
  ntmTv:"https://live-ntm13.cdnvideo.ru/ntm13/smil:ntm13.smil/playlist.m3u8",
  euroNews:"https://evronovosti.mediacdn.ru/sr1/evronovosti/playlist.m3u8",
  kan11:"https://kanlivep2event-i.akamaihd.net/hls/live/747610/747610/source1_2.5k/chunklist.m3u8",
  n12:"https://keshethlslive-lh.akamaihd.net/i/c2n_1@195269/master.m3u8",
  kanHin:"https://kanlivep2event-i.akamaihd.net/hls/live/747600/747600/source1_2.5k/chunklist.m3u8",
  astrAhan:"https://streaming.astrakhan.ru/astrakhan24/index.m3u8",
  kub24:"https://stream.kuban24.tv:1500/hls/stream.m3u8",
  moyaPlan:"https://a3569456481-s26881.cdn.ngenix.net/live/smil:mplan.smil/index.m3u8",
  fTv:"https://fash1043.cloudycdn.services/slive/_definst_/ftv_ftv_midnite_k1y_27049_midnite_secr_108_hls.smil/chunklist_b4700000_t64MTA4MHA=.m3u8?checkedby:iptvcat.com",
  tv360:"https://video1.in-news.ru/360/index.m3u8",
  sssR:"https://cache-1.catcast.tv/content/38821/index.m3u8",
  kinoTv:"https://autopilot.catcast.tv/content/39161/index.m3u8",
  redBull:"https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8?denmstv.m3u8",
  streetMusic:"https://59d39900ebfb8.streamlock.net/streetmusic/streetmusic/playlist.m3u8",
  
}

/*let a1= "https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8";*/

let a1 = document.getElementById("НАСТОЯЩЕЕ ВРЕМЯ");
a1.href = channels.nasVrem;

let a2 = document.getElementById("МИН.ИДЕЙ");
a2.href = channels.minIdey;

let a3 = document.getElementById("УНИВЕР СМОТРИ");
a3.href = channels.univSmotr;

let a4 = document.getElementById("Три Ангела");
a4.href = channels.triAngel;

let a5 = document.getElementById("RU TV МУЗЫКА");
a5.href = channels.muzTv;

let a6 = document.getElementById("RT DOC");
a6.href = channels.rtDoc;

let a7 = document.getElementById("НТМ");
a7.href = channels.ntmTv;

let a8 = document.getElementById("Euronews");
a8.href = channels.euroNews;

let a9 = document.getElementById("kan11");
a9.href = channels.kan11;

let a10 = document.getElementById("n12");
a10.href = channels.n12;

let a11 = document.getElementById("kanHin");
a11.href = channels.kanHin;

let a12 = document.getElementById("astrAhan");
a12.href = channels.astrAhan;

let a13 = document.getElementById("kub24");
a13.href = channels.kub24;

let a14 = document.getElementById("moyaPlan");
a14.href = channels.moyaPlan;

let a15 = document.getElementById("fTv");
a15.href = channels.fTv;

let a16 = document.getElementById("tv360");
a16.href = channels.tv360;

let a17 = document.getElementById("sssR");
a17.href = channels.sssR;

let a18 = document.getElementById("kinoTv");
a18.href = channels.kinoTv;

let a19 = document.getElementById("redBull");
a19.href = channels.redBull;

let a20 = document.getElementById("streetMusic");
a20.href = channels.streetMusic;

/*document.getElementById("Три Ангела").href = "https://hls.tv.3angels.ru/stream/HQ.m3u8";
document.getElementById("RU TV МУЗЫКА").href = "https://rutv.gcdn.co/streams/1410_95/playlist.m3u8";*/