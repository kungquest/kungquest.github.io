import Media from "./Media"

export default class Movie extends Media{

	constructor(title, year, duration, isPlaying = true){
		super( title, year, duration, isPlaying);
		this.year = year;
	}
}