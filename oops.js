class musicPlayer {
    constructor(songs){
        this.songs = songs;
        this.index = 0;
        this.audio = document.getElementById("audio");
        this.title = document.getElementById("title")
        this.artist = document.getElementById("artist");
        this.playpause = document.getElementById("playpause");
        this.progress = document.getElementById("progress")
        this.progresscontainer = document.getElementById("progresscontainer")
        this.currentTime = document.getElementById("currentTime")
        this.duration = document.getElementById("duration")

        this.audio.addEventListener("timeupdate", ()=> this.updateProgress())

this.progresscontainer.addEventListener("click", (e) => this.setProgress(e))

    }

    loadsong(){
        const currentSong = this.songs[this.index];
        this.audio.src = currentSong.src;
        this.title.textContent = currentSong.name;
        this.artist.textContent = currentSong.artist;
    }

    playPause(){
        if(this.audio.paused){
            this.audio.play();
            this.playpause.classList ="fa-solid fa-play" ;
            this.playpause.classList = "fa-solid fa-pause" ;
        }else {
                this.audio.pause()
                this.playpause.classList = " fa-solid fa-pause"
                this.playpause.classList = " fa-solid fa-play" ;
        }
    }

    next(){
        this.index = (this.index + 1) % this.songs.length;
        this.loadsong();
        this.audio.play();
        this.playpause.className = "fa-solid fa-pause";
    }

    prev(){
        this.index = (this.index - 1 + this.songs.length) % this.songs.length;
        this.loadsong();
        this.audio.play();
        this.playpause.className = "fa-solid fa-pause";
    }

    updateProgress(){
        if(this.audio.duration){
            const percent = (this.audio.currentTime / this.audio.duration) * 100;
            this.progress.style.width = percent + "%";

            this.currentTime.textContent = this.formatTime(this.audio.currentTime);
            this.duration.textContent = this.formatTime(this.audio.duration);
        }
    }

    setProgress(e){
        const width = this.progresscontainer.clientWidth;
        const clickX = e.offsetX;
        const duration = this.audio.duration;

        this.audio.currentTime = (clickX / width) * duration;
    }
    formatTime(time){
        const minutes = Math.floor(time/60) || 0;
        const seconds = Math.floor(time%60) || 0;
        return `${minutes}:${seconds .toString().padStart(2,"0")}`;
    }
}


const songlist = [
    {name: "attraction", artist:"sukha , prodgk" , src: "Attraction - PagalWorld.mp3"},
    {name: "fell for you", artist:"subh" , src:"Fell For You - PagalWorld.mp3"},
    {name: "hua main X finding her" , artist: "kushagra, raghav chaitanya" , src: "Hua Main x Finding Her - PagalWorld.mp3"},
    {name: "bhaven-toon-jaan-na-jaan-ve", artist:"nusrat-fateh" , src: "Bhaven-Toon-Jaan-Na-Jaan-Ve-_-Nusrat-Fateh-Ali-Khan---Full-30-Min-Version.mp3"},
    {name: "jinhoo-karna-ae-yaad", artist:"nusrat-fateh" , src: "Jinhoon-Karna-Ae-Yaad-Dila.mp3"},
    {name: "piya-re-piya-re", artist:"nusrat-fateh" , src: "Piya-Re-Piya-Re-Nusrat-Fateh-Ali-Khan.mp3"},
    {name: "wo-hata-rahe-hain-parde", artist:"nusrat-fateh" , src: "woh-hata-rahe-hain-pardeh.mp3"},
    {name: "ye-jo-halka", artist:"nusrat-fateh" , src: "Yeh-Jo-Halka.mp3"},
];

const player = new musicPlayer(songlist);
player.loadsong();



document.getElementById("playpause").addEventListener("click",() => player.playPause());
document.getElementById("next").addEventListener("click",() => player.next());
document.getElementById("prev").addEventListener("click",() => player.prev());






