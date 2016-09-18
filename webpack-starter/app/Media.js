// export default function test(){
//     const a = [1,2,3,4,5,6]
//     a.forEach(m => console.log(m)) 
// }

export default class Media{
	constructor(title, duration, isPlaying = false){
		this.title = title;
		this.duration = duration;
		this.isPlaying = isPlaying;
		console.log("Media is playing","title",title,"duration",duration,"isPlaying",isPlaying);
	}

	start(){
		this.isPlaying = 'true';
		console.log("starting");
	}

	stop(){
		this.isPlaying = 'false';
		console.log("stopping");
	}

}