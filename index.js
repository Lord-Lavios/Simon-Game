var currentLvlSeq = [];
var userSeq = [];
var currentLvl = 1;
var loopVariable = 0;
var audOne = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audTwo =  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audThree = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audFour = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

function levelSeq() {
	for(var i = 0; i<currentLvl; i++) {
		var num = Math.floor(Math.random() * 4 + 1);
		currentLvlSeq.push(num);	
	}
	console.log(currentLvlSeq);
}

function compare() {
	var answer = 1;
	for(var i = 0;i<userSeq.length;i++) {
		if(userSeq[i] != currentLvlSeq[i]) {
			answer = 0;
		}
	}
	if(answer === 0) {
		userSeq = [];
		currentLvlSeq = [];
		currentLvl = 1;
		$('#lvl').text('Level ' + currentLvl).hide().fadeIn(900);
		$('#steps').text('Steps - ' + currentLvl).hide().fadeIn(900);
	} else {
		userSeq= [];
		currentLvlSeq = [];
		currentLvl += 1;
		$('#lvl').text('Level ' + currentLvl).hide().fadeIn(900);
		$('#steps').text('Steps - ' + currentLvl).hide().fadeIn(900);
	}
}

$(document).ready(function() {

	function start() {
		var  index = currentLvlSeq[loopVariable];
		$(".box").eq(index - 1).css('opacity', '0.5');
		if(index === 1) {
			audOne.play();
		} else if( index === 2) {
			audTwo.play();
		} else if( index === 3) {
			audThree.play();
		} else if(index === 4) {
			audFour.play();
		}
		if(loopVariable < currentLvlSeq.length) {
			loopVariable += 1;
			setTimeout(function() {
				$(".box").eq(index - 1).css('opacity', '1');
			}, 400);
			setTimeout(start, 1000);
		} else {
			loopVariable = 0;
		}
	}

	$('button').click(function() {
		if(userSeq.length === 0 && currentLvlSeq.length === 0) {
			$('#only-div-inside').children().css('cursor', 'pointer');
			levelSeq();
			start();
		}
	});

	$('#only-div-inside').children().click(function() {
		if(currentLvlSeq.length !== 0 && userSeq.length < currentLvlSeq.length && loopVariable === 0) {
			var kidClick = $(this);
			userSeq.push($(this).index() + 1);
			$(kidClick).css('opacity', '0.6');
			if(kidClick.index() + 1 === 1) {
				audOne.play();	
			} else if( kidClick.index() + 1 === 2) {
				audTwo.play();
			} else if( kidClick.index() + 1 === 3) {
				audThree.play();
			} else if(kidClick.index() + 1 === 4) {
				audFour.play();
			}
			setTimeout(function() {
				$(kidClick).css('opacity', '1');
			}, 250);
			console.log(userSeq + ' userSeq');
		}
		if(userSeq.length === currentLvlSeq.length && currentLvlSeq.length > 0) {
			$('#only-div-inside').children().css('cursor', 'default');
			compare();
		}
	});
});