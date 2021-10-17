var video_player=document.getElementById("video_player"),
    links=video_player.getElementsByTagName('a');
for(var i=0; i<links.length; i++){
  links[i].onclick=handler;
}

function handler(e){
  e.preventDefault();
  videotarget=this.getAttribute("href");
  
  video=document.querySelector("#video_player video");
  video.removeAttribute('poster');
  video.load();
  video.play();
  
    
  filename=videotarget/*.substr(0,videotarget.lastIndexOf('.'))||videotarget*/;
  source=document.querySelectorAll("#video_player video source");
  source[0].src=filename/* + ".mp4"*/;
  /*source[1].src=filename + ".m3u8";
  source[2].src=filename + ".webm";*/
  
  
  
}
