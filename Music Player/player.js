const music = [
    "2020.mp3",
    "ABigAdventure.mp3",
    "CuriousGeorge.mp3",
    "Egos.mp3",
    "Fight.mp3",
    "HopeIFeelBetter.mp3",
    "Jaded.mp3",
    "KingdomCome.mp3",
    "SeeMeeFly.mp3",
    "TheQueen.mp3",
    "Threat.mp3",
    "Titanic.mp3"
]

// Get Music
const player = document.getElementById("player");

function createMusicList(){
    const list = document.createElement("ol");
    for (let i = 0; i < music.length; i++){
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(music[i]));
        list.appendChild(item);
        
    }
    return list;
}

const musicList = document.getElementById("musicList");
musicList.appendChild(createMusicList());

const links = document.querySelectorAll("li");
for(const link of links){
    link.addEventListener("click", setSong);
}

function setSong(e){
    document.querySelector("#headphones").classList.remove("pulse");
   
    const source = document.getElementById("source");
    source.src= "music/" + e.target.innerText;

    document.querySelector("#currentSong").innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();

    document.querySelector("#headphones").classList.add("pulse");
};

// // Skip Forward
// const forward = document.getElementById("forward");
// forward.onclick = () => {
//   skipForward();
// };

// // Skip Backward
// const backward = document.getElementById("backward");
// backward.onclick = () => {
//   skipBackwards();
// };

// // Skip Forward
// const skipForward = () => {
//     // if index reaches end of the list, start at the begining
//     if (index >= 7) {
//       index = -1;
//     }
//     index++;
//     playAudio();
//   };
  
//   //Skip Backwards
//   const skipBackwards = () => {
//     // if index smaller 0 start at end of the list
//     if (index <= 0) {
//       index = 8;
//     }
//     index--;
//     playAudio();
//   };

// function forward(){
   
//     player.skipForward();

// }

// function backward(){
   
//     player.skipBackward();

// }
// Play
function playAudio(){
    if(player.readyState){
        player.play();
    }
}
//Pause
function pauseAudio(){
   
        player.pause();
    
}


const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
    const volume = e.target.value;
    player.volume = volume;
};

function updateProgress(){
    if(player.currentTime > 0){
        const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;

    }

}