import Song from './Song'
import MediaPlayer from './MediaPlayer'
import 'styles/style.scss' 

var song = new Song("Wonderwall", "Oasis", "3:45", true);
var mp = new MediaPlayer;

mp.playSong(song);