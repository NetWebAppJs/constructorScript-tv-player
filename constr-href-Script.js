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
/*document.getElementById("Три Ангела").href = "https://hls.tv.3angels.ru/stream/HQ.m3u8";
document.getElementById("RU TV МУЗЫКА").href = "https://rutv.gcdn.co/streams/1410_95/playlist.m3u8";*/