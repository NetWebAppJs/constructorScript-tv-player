let html = document.getElementById("html");
html.innerHTML = ` <h2>The Player for video to live stream</h2>
<h3>TV CHANNELS
    <h3>
        <h3>Enjoy:)</h3>

        <!--Video Player-->
        <figure id="videoContainer" data-fullscreen="false">
            <div id="video_player" class="video_player">
                <div class="video_box">
                    <video id="video" controls preload="metadata">
                            <source src="https://rfe-lh.akamaihd.net/i/rfe_tvmc5@383630/master.m3u8" type="video/mp4">
                            <!--source src=".webm" type="video/mp4">  
                            <source src=".m3u8" type="video/mp4"-->  
                        </video>For Chrome browser in android system.
                    <div id="video-controls" class="controls" data-state="hidden">
                        <button id="playpause" type="button" data-state="play">Play/Pause</button>
                        <button id="stop" type="button" data-state="stop">Stop</button>
                        <div class="progress">
                            <progress id="progress" value="0" min="0">
            <span id="progress-bar"></span>
        </progress>
                        </div>
                        <button id="mute" type="button" data-state="mute">Mute/Unmute</button>
                        <button id="volinc" type="button" data-state="volup">Vol+</button>
                        <button id="voldec" type="button" data-state="voldown">Vol-</button>
                        <button id="fs" type="button" data-state="go-fullscreen">Fullscreen</button>📺live stream
                    </div>
                    <h3>Playlist for Channels</h3>
                </div>
                <div class="video_playlist">

                    <ol>Playlist for Channels

                        <!--li><a href="https://karapuztv.fenixplustv.xyz/content/33418/index.m3u8">
                                <img src="https://i.imgur.com/2VJAK8L.jpg">
                                <div class="title">КАРАПУЗ ТВ</div>
                                <div class="time"></div>        
                            </a></li-->


                        <li>
                            <a id="НАСТОЯЩЕЕ ВРЕМЯ" href="">
                                <img src="https://64.media.tumblr.com/2d269bcdcdc92434d54c64dd9eb8f4fa/b3b5963f19310f89-0d/s1280x1920/3bec147fde1be3d50cede7ff70fcfa13acace896.png">
                                <div class="title">НАСТОЯЩЕЕ ВРЕМЯ</div>
                                <div class="time"> &#9654; Live Stream</div>
                            </a>
                        </li>
                        <li>
                            <a id="МИН.ИДЕЙ" href="">
                                <img src="https://64.media.tumblr.com/154af68c2d9be061e786b03c5c66264e/3221780155bf693c-19/s500x750/e22c215d4c5f220f5dbb8cd2fefe56e8809fabd4.png">
                                <div class="title">МИН.ИДЕЙ</div>
                                <div class="time">▶️ Live Stream</div>
                            </a>
                            </li-->
                            <li>
                                <a id="УНИВЕР СМОТРИ" href="">
                                    <img src="https://64.media.tumblr.com/84695772ce8a2fd88c8e15191344be00/a113fb0c6471db80-89/s500x750/5a5e69b158900eebcefb11086ce73b0df6430c12.png">
                                    <div class="title">УНИВЕР СМОТРИ</div>
                                    <div class="time">▶️ Live Stream</div>
                                </a>
                            </li>
                            <li>
                                <a id="Три Ангела" href="">
                                    <img src="https://64.media.tumblr.com/71eff53973c1c867bb6bd4af341ce395/b0e1c733ab860739-94/s500x750/e64175cf6d125e20d79df68465c714ce1b69ee53.png">
                                    <div class="title">Три Ангела</div>
                                    <div class="time">&#9654; Live Stream</div>
                                </a>
                            </li>

                            <li>
                                <a id="RU TV МУЗЫКА" href="">
                                    <img src="https://64.media.tumblr.com/f4ae1cad080d757bac92b25dd93f9c15/60e8cb174db3e1bf-be/s540x810/22ffc61748f9911b19fb70e1d26c825817da18cd.jpg">
                                    <div class="title">RU TV МУЗЫКА</div>
                                    <div class="time">&#9654; Live Stream</div>
                                </a>
                            </li>

                            <!--li><a href="https://rt-doc-gd.secure2.footprint.net/1101.m3u8">
                                <img src="https://upload.wikimedia.org/wikipedia/ru/6/6e/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB%D0%B0_RT_Doc.png">
                                <div class="title">RT DOC (eng.)</div>
                                <div class="time">▶️ live stream</div>        
                            </a></li-->

                            <li>
                                <a id="RT DOC" href="">
                                    <img src="https://64.media.tumblr.com/447e3263397bf666b955e9f4adefb993/09c37baba5d9efb6-fb/s1280x1920/a3994d1e9bdd793d971df7dc885a8eedda7bd616.png">
                                    <div class="title">RT DOC (ru.)</div>
                                    <div class="time">▶️ Live Stream</div>
                                </a>
                            </li>

                            <li>
                                <a id="НТМ" href="">
                                    <img src="https://64.media.tumblr.com/01490653a925fb7a0995c5d3ad07de67/cdc99b619b62393e-00/s1280x1920/b04dd67ac9e829873834414126ca92d142984a3d.jpg">
                                    <div class="title">НТМ</div>
                                    <div class="time">▶️ Live Stream</div>
                                </a>
                            </li>

                            <li>
                                <a id="Euronews" href="">
                                    <img src="https://64.media.tumblr.com/5f8f0a0962ab06bf9518573875dc2669/5daf1b924808b8da-28/s1280x1920/666944c2116205ef40c84ecc2a64dbbb4a492602.png">
                                    <div class="title">Euronews</div>
                                    <div class="time">▶️ Live Stream</div>
                                </a>
                            </li>
                            <!--li>
                                <a href="https://brics.bonus-tv.ru/cdn/brics/english/tracks-v1a1/mono.m3u8">
                                    <img src="https://i.imgur.com/2VJAK8L.jpg">
                                    <div class="title">БРИКС ТВ (eng.)</div>
                                    <div class="time">▶️ Live Stream</div>
                                </a>
                            </li-->
                            <li>
                                <a href="https://kanlivep2event-i.akamaihd.net/hls/live/747610/747610/source1_2.5k/chunklist.m3u8">
                                    <img src="https://64.media.tumblr.com/faff431cd4c45b402221bf178ebeb9ce/a71d7002bbc1beff-0d/s400x600/5ec9e0a948f4eb615aaba80071a89175ab802da3.gifv">
                                    <div class="title">Kan 11 (Израиль)</div>
                                    <div class="time">▶️ Live Stream</div>
                                </a>
                                </li-->
                                <li>
                                    <a href="https://keshethlslive-lh.akamaihd.net/i/c2n_1@195269/master.m3u8">
                                        <img src="https://64.media.tumblr.com/f06646ec51db4558f0f91e27d21cbe3c/2ee29eae85b1ec46-24/s540x810/6b0b79fe4dce7a868a821d81b573ae88bbd6d55f.png">
                                        <div class="title">N 12 (Израиль)</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://kanlivep2event-i.akamaihd.net/hls/live/747600/747600/source1_2.5k/chunklist.m3u8">
                                        <img src="https://64.media.tumblr.com/14490ff9033024e4d801892b8f9a9e0a/47757599bafc0ec8-bd/s1280x1920/cef93277025e29c2b8e30f923c43af1b69f06a15.jpg">
                                        <div class="title">Kan hinuhit (Израиль)</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://streaming.astrakhan.ru/astrakhan24/index.m3u8">
                                        <img src="https://64.media.tumblr.com/9804cc7ebe0e099fc3ebd0547517f02c/d9805d123a97b389-bc/s250x400/b0cd5c548ee87a62d4178c2e5a1dc79fd33bd81f.png">
                                        <div class="title">АСТРАХАНЬ24 ТВ</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://stream.kuban24.tv:1500/hls/stream.m3u8">
                                        <img src="https://64.media.tumblr.com/d84e8dd1f0e9b3315b179d20978b6662/13e2a071b6e9722b-9b/s400x600/b19d7c84b6d8e35a2cd3d17c82f27d5414fa6a02.jpg">
                                        <div class="title">КУБАНЬ24 ТВ</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://a3569456481-s26881.cdn.ngenix.net/live/smil:mplan.smil/index.m3u8">
                                        <img src="https://64.media.tumblr.com/dcf84db80d6c03e9dbdb0ffd86588242/1f6c9c75d98a90a8-c7/s540x810/5c91f5f1465ceb3cb068ce471474795c520f09e5.png">
                                        <div class="title">МОЯ ПЛАНЕТА ТВ</div>
                                        <div class="time">▶️ Live Stream</div>

                                        <li>
                                            <a href="https://fash1043.cloudycdn.services/slive/_definst_/ftv_ftv_midnite_k1y_27049_midnite_secr_108_hls.smil/chunklist_b4700000_t64MTA4MHA=.m3u8?checkedby:iptvcat.com">
                                                <img src="https://64.media.tumblr.com/53873d6853970b9ae4e29b989017bc34/ac7292f922ebac8c-12/s640x960/4ca899b8e0d8af3881fe5af4bdc6b5d2246606bb.jpg">
                                                <div class="title">FTV HD</div>
                                                <div class="time">▶️ Live Stream</div>
                                            </a>
                                        </li>


                                    </a>
                                </li>
                                <li>
                                    <a href="https://video1.in-news.ru/360/index.m3u8">
                                        <img src="https://64.media.tumblr.com/57bb6606cae7e448f58e38ee77a9c5b5/71f0fd652bcb76f9-c3/s1280x1920/f2878b6b6d1238d0364752fd6a17c4d512ffec96.pnj">
                                        <div class="title">360 TV</div>
                                        <div class="time"></div>
                                    </a>
                                </li>

                                <!--li>
                                    <a href="https://v3.catcast.tv/content/38105/index.m3u8">
                                        <img src="https://i.imgur.com/2VJAK8L.jpg">
                                        <div class="title">МУЛЬТИКИ</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li-->

                                <li>
                                    <a href="https://cache-1.catcast.tv/content/38821/index.m3u8">
                                        <img src="https://64.media.tumblr.com/d758eb97ea466799f52ca9a7ebf0a12d/e30de91014920ebc-92/s250x400/05551f3d954cc477babbc4d8c9e431ed98cb6940.png">
                                        <div class="title">СССР ТВ</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://autopilot.catcast.tv/content/39161/index.m3u8">
                                        <img src="https://64.media.tumblr.com/358bf1a0c80ec5e0e76a548114552fcf/9f1c1727445d1351-d3/s250x400/854f66b4288e693cd889530da222b76434ea776d.jpg">
                                        <div class="title">Кино ТВ</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master_3360.m3u8?denmstv.m3u8">
                                        <img src="https://64.media.tumblr.com/3969d584baee8dce2db615314e91c822/a4973bd4d55e7853-ca/s540x810/096d9521f1e24bee2255d46840e2d1eb9c7e4379.jpg">
                                        <div class="title">Рэд Бул ТВ</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://59d39900ebfb8.streamlock.net/streetmusic/streetmusic/playlist.m3u8">
                                        <img src="https://64.media.tumblr.com/9dae1ea9277354eff56a6cf9c9eb2c82/b1a12c07c50e04d8-a5/s1280x1920/5fb7797eb583b7418343a05a9ff3feced5726b01.jpg">
                                        <div class="title">StreetMusic ТВ</div>
                                        <div class="time">▶️ Live Stream</div>
                                    </a>
                                </li>




                    </ol>
                </div>
            </div>
            <!--Video Player JS-->
            <!--<script src="js/video_player.js"></script>-->
            <!--End Video Player-->

            <!-- partial -->

           


        </figure>

        <ul>
            <li>
                <b>Домашняя страница:</b>
                <a class="button" href="https://berlinandrew.github.io/index.html">
                    <strong>▶️ "Веб - страница Берлина Андрея".
</strong>
                </a> Добро пожаловать!
            </li>
            <br>
            <!--li> 
<b>Веб - студия:</b>
<a class= "button" href="https://berlinandrew.github.io/studio-hhcjs.html">
<strong>"hhcjs".
</strong>
</a>
Добро пожаловать!


</li-->
        </ul>`;
