import Media from "./Media"

export default class Song extends Media{

	constructor(title, artist, duration, isPlaying = true){
		super(title,duration,isPlaying);
		this.artist = artist;
	}

	toMediaPlayerInfo() {
	  	return `<div>
	        	${this.title}
	        </div><div>
	        	${this.artist}
        	</div>
        	<div>
        		${this.duration}
    		</div>`;
	}

}