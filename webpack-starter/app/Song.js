import Media from "./Media"

export default class Song extends Media{

	constructor(title, artist, duration, isPlaying = true){
		super(title,duration,isPlaying);
		this.artist = artist;
	}

}