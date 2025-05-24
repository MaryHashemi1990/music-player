const musics = [
    {
        name: '... دلم برات تنگ شده حسین',
        cover: 'img/hossein_sotode_delam_barat.jpg',
        audio: new Audio('./musics/delam-barat-tang-shode.mp3')
    },
    {
        name: '...یه گوشه حرم به من جا بده',
        cover: 'img/Amir-Kermanshahi-Ye-Goshe-Kenar.jpg',
        audio: new Audio('./musics/ye-goshe-be-man-ja-bedeh.mp3')
    },
    {
        name: '...دلتنگ حرمتم',
        cover: 'img/tyu.jpg',
        audio: new Audio('./musics/zarrar-kardam.mp3')
    }
]

const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");
const preBtn = document.querySelector("#pre-btn");
const range = document.querySelector("#music-time");
const musicCover = document.querySelector("#music-cover");
const musicName = document.querySelector("#music-name");

let currentMusic = 0 ;

let audio = musics[currentMusic].audio;
musicCover.src = musics[currentMusic].cover;
musicName.innerText = musics[currentMusic].name;

audio.addEventListener('canplay' , ()=>{
    range.max = audio.duration;
})

audio.addEventListener('timeupdate' , ()=>{
    range.value = audio.currentTime;
})

range.addEventListener('input' , ()=>{
    audio.currentTime = range.value;

})

playBtn.addEventListener('click' , ()=>{
    if(audio.paused){
        audio.play();
        musicCover.style.animationPlayState = 'running';
        playBtn.classList.replace("fa-play" , "fa-pause");
    }else{
        audio.pause();
        musicCover.style.animationPlayState = 'paused';
        playBtn.classList.replace("fa-pause" , "fa-play");
    }
})

nextBtn.addEventListener('click' , ()=>{
     changeMusic("next");
})
preBtn.addEventListener('click' , ()=>{
      changeMusic("pre");
})

function changeMusic(state){
    audio.pause();
    range.value = 0;
    playBtn.classList.replace("fa-pause" , "fa-play");
    musicCover.style.animationPlayState = 'paused';
    audio.currentTime = 0 ;
    if(state == 'next'){
        if(currentMusic == musics.length - 1){
            currentMusic = 0 ;
        }else{
            currentMusic += 1;
        }
    }else{
        if(currentMusic == 0){
            currentMusic = musics.length - 1 ;
        }else{
            currentMusic -= 1;
        }
    }
    audio = musics[currentMusic].audio;
    musicCover.src = musics[currentMusic].cover;
    musicName.innerText = musics[currentMusic].name;
}