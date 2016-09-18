import Song from './Song'
import MediaPlayer from './MediaPlayer'
import 'styles/style.scss' 


var mp = new MediaPlayer;

var song = new Song("Wonderwall", "Oasis", "3:45", true);

mp.MediaPlayerInfoUpdate( song );