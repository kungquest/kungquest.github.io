// export default function test(){
//     const a = [1,2,3,4,5,6]
//     a.forEach(m => console.log(m)) 
// }

export default class MediaPlayer{
	MediaPlayerInfoUpdate(target){
		// console.log("playing song",x);
		// console.log(target);
		document.getElementById("MediaPlayer-View").innerHTML = target.toMediaPlayerInfo();

		// var viewTitle = document.getElementById("MediaPlayer-view-info-title");
		// var viewArtist = document.getElementById("MediaPlayer-view-info-artist");
		// var viewDuration = document.getElementById("MediaPlayer-view-info-duration");

		// viewTitle.innerHTML = obj.title;
		// viewArtist.innerHTML = obj.artist;
		// viewDuration.innerHTML = obj.duration;

	}

}