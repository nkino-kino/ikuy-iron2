function sound()
{
	// 対象となるID名
	//var id = 'sound-file' ;
	var id = new Howl({ src: ['.Countdown05-1.mp3'] })
	sound.play()

	// 初回以外だったら音声ファイルを巻き戻す
	if( typeof( document.getElementById( id ).currentTime ) != 'undefined' )
	{
		document.getElementById( id ).currentTime = 0;
	}
    audio.load()
	// [ID:sound-file]の音声ファイルを再生[play()]する
    document.getElementById(id).muted = false;
    document.getElementById( id ).play() ;
}