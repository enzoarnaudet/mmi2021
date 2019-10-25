

var bigtitle = document.queryselector('#bigtitle');
var secondtitles= document.queryselectorall('h2');





function onClickBigTitle(){
	console.log('hello')
}

bigtitle.addEventlistener('click', onClickBigTitle);






function onClickBigTitle() {
	bigtitle.style.color = "blue";
}


