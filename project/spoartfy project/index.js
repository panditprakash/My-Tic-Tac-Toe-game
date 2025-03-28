console.log("hellow");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');

let songs = [
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Salam-e-Ishq",filepath: "song/1.mp3", coverPath: "covers/1.jpg"},
]


// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play')
        masterPlay.classList.add('fa-solid fa-remove')

    }
})
// Listen to events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update Seekbar

})