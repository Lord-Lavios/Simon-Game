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

$(document).ready(function() {

	if(localStorage.getItem("High Score") !== null) {
		console.log('fff');
		$("#steps").text('Highest Level - ' + localStorage.getItem("High Score"));
		console.log('here');
		var highestLevel = localStorage.getItem("High Score");
	} else {
		$("#steps").text('Highest Level - 1')
		highestLevel = 1;
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
		} else {
			userSeq= [];
			currentLvlSeq = [];
			currentLvl += 1;
			if(currentLvl > highestLevel) {
				localStorage.setItem('High Score', currentLvl);
				$('#steps').text('Highest Level - ' + currentLvl).hide().fadeIn(900);
			}
			$('#lvl').text('Level ' + currentLvl).hide().fadeIn(900);
		}
	}



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
	})

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY3VycmVudEx2bFNlcSA9IFtdO1xyXG52YXIgdXNlclNlcSA9IFtdO1xyXG52YXIgY3VycmVudEx2bCA9IDE7XHJcbnZhciBsb29wVmFyaWFibGUgPSAwO1xyXG52YXIgYXVkT25lID0gbmV3IEF1ZGlvKCdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL3NpbW9uU291bmQxLm1wMycpO1xyXG52YXIgYXVkVHdvID0gIG5ldyBBdWRpbygnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9zaW1vblNvdW5kMi5tcDMnKTtcclxudmFyIGF1ZFRocmVlID0gbmV3IEF1ZGlvKCdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL3NpbW9uU291bmQzLm1wMycpO1xyXG52YXIgYXVkRm91ciA9IG5ldyBBdWRpbygnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9zaW1vblNvdW5kNC5tcDMnKTtcclxuXHJcbmZ1bmN0aW9uIGxldmVsU2VxKCkge1xyXG5cdGZvcih2YXIgaSA9IDA7IGk8Y3VycmVudEx2bDsgaSsrKSB7XHJcblx0XHR2YXIgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDEpO1xyXG5cdFx0Y3VycmVudEx2bFNlcS5wdXNoKG51bSk7XHRcclxuXHR9XHJcblx0Y29uc29sZS5sb2coY3VycmVudEx2bFNlcSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkhpZ2hlc3QgTGV2ZWxcIikgIT09IG51bGwpIHtcclxuXHRcdCQoXCIjc3RlcHNcIikudGV4dCgnSGlnaGVzdCBMZXZlbCAtICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkhpZ2hlc3QgTGV2ZWxcIikpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2hlcmUnKTtcclxuXHRcdHZhciBoaWdoZXN0TGV2ZWwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkhpZ2hlc3QgTGV2ZWxcIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdCQoXCIjc3RlcHNcIikudGV4dCgnSGlnaGVzdCBMZXZlbCAtIDEnKVxyXG5cdFx0aGlnaGVzdExldmVsID0gMTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNvbXBhcmUoKSB7XHJcblx0XHR2YXIgYW5zd2VyID0gMTtcclxuXHRcdGZvcih2YXIgaSA9IDA7aTx1c2VyU2VxLmxlbmd0aDtpKyspIHtcclxuXHRcdFx0aWYodXNlclNlcVtpXSAhPSBjdXJyZW50THZsU2VxW2ldKSB7XHJcblx0XHRcdFx0YW5zd2VyID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYoYW5zd2VyID09PSAwKSB7XHJcblx0XHRcdHVzZXJTZXEgPSBbXTtcclxuXHRcdFx0Y3VycmVudEx2bFNlcSA9IFtdO1xyXG5cdFx0XHRjdXJyZW50THZsID0gMTtcclxuXHRcdFx0JCgnI2x2bCcpLnRleHQoJ0xldmVsICcgKyBjdXJyZW50THZsKS5oaWRlKCkuZmFkZUluKDkwMCk7XHJcblx0XHRcdCQoJyNzdGVwcycpLnRleHQoJ0hpZ2hlc3QgTGV2ZWwgLSAnICsgY3VycmVudEx2bCkuaGlkZSgpLmZhZGVJbig5MDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dXNlclNlcT0gW107XHJcblx0XHRcdGN1cnJlbnRMdmxTZXEgPSBbXTtcclxuXHRcdFx0Y3VycmVudEx2bCArPSAxO1xyXG5cdFx0XHRpZihjdXJyZW50THZsID4gaGlnaGVzdExldmVsKSB7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hpZ2ggU2NvcmUnLCBjdXJyZW50THZsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcjbHZsJykudGV4dCgnTGV2ZWwgJyArIGN1cnJlbnRMdmwpLmhpZGUoKS5mYWRlSW4oOTAwKTtcclxuXHRcdFx0JCgnI3N0ZXBzJykudGV4dCgnSGlnaGVzdCBMZXZlbCAtICcgKyBjdXJyZW50THZsKS5oaWRlKCkuZmFkZUluKDkwMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHN0YXJ0KCkge1xyXG5cdFx0dmFyICBpbmRleCA9IGN1cnJlbnRMdmxTZXFbbG9vcFZhcmlhYmxlXTtcclxuXHRcdCQoXCIuYm94XCIpLmVxKGluZGV4IC0gMSkuY3NzKCdvcGFjaXR5JywgJzAuNScpO1xyXG5cdFx0aWYoaW5kZXggPT09IDEpIHtcclxuXHRcdFx0YXVkT25lLnBsYXkoKTtcclxuXHRcdH0gZWxzZSBpZiggaW5kZXggPT09IDIpIHtcclxuXHRcdFx0YXVkVHdvLnBsYXkoKTtcclxuXHRcdH0gZWxzZSBpZiggaW5kZXggPT09IDMpIHtcclxuXHRcdFx0YXVkVGhyZWUucGxheSgpO1xyXG5cdFx0fSBlbHNlIGlmKGluZGV4ID09PSA0KSB7XHJcblx0XHRcdGF1ZEZvdXIucGxheSgpO1xyXG5cdFx0fVxyXG5cdFx0aWYobG9vcFZhcmlhYmxlIDwgY3VycmVudEx2bFNlcS5sZW5ndGgpIHtcclxuXHRcdFx0bG9vcFZhcmlhYmxlICs9IDE7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JChcIi5ib3hcIikuZXEoaW5kZXggLSAxKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG5cdFx0XHR9LCA0MDApO1xyXG5cdFx0XHRzZXRUaW1lb3V0KHN0YXJ0LCAxMDAwKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxvb3BWYXJpYWJsZSA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQkKCdidXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGlmKHVzZXJTZXEubGVuZ3RoID09PSAwICYmIGN1cnJlbnRMdmxTZXEubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdCQoJyNvbmx5LWRpdi1pbnNpZGUnKS5jaGlsZHJlbigpLmNzcygnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuXHRcdFx0bGV2ZWxTZXEoKTtcclxuXHRcdFx0c3RhcnQoKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHQkKCcjb25seS1kaXYtaW5zaWRlJykuY2hpbGRyZW4oKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdGlmKGN1cnJlbnRMdmxTZXEubGVuZ3RoICE9PSAwICYmIHVzZXJTZXEubGVuZ3RoIDwgY3VycmVudEx2bFNlcS5sZW5ndGggJiYgbG9vcFZhcmlhYmxlID09PSAwKSB7XHJcblx0XHRcdHZhciBraWRDbGljayA9ICQodGhpcyk7XHJcblx0XHRcdHVzZXJTZXEucHVzaCgkKHRoaXMpLmluZGV4KCkgKyAxKTtcclxuXHRcdFx0JChraWRDbGljaykuY3NzKCdvcGFjaXR5JywgJzAuNicpO1xyXG5cdFx0XHRpZihraWRDbGljay5pbmRleCgpICsgMSA9PT0gMSkge1xyXG5cdFx0XHRcdGF1ZE9uZS5wbGF5KCk7XHRcclxuXHRcdFx0fSBlbHNlIGlmKCBraWRDbGljay5pbmRleCgpICsgMSA9PT0gMikge1xyXG5cdFx0XHRcdGF1ZFR3by5wbGF5KCk7XHJcblx0XHRcdH0gZWxzZSBpZigga2lkQ2xpY2suaW5kZXgoKSArIDEgPT09IDMpIHtcclxuXHRcdFx0XHRhdWRUaHJlZS5wbGF5KCk7XHJcblx0XHRcdH0gZWxzZSBpZihraWRDbGljay5pbmRleCgpICsgMSA9PT0gNCkge1xyXG5cdFx0XHRcdGF1ZEZvdXIucGxheSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JChraWRDbGljaykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuXHRcdFx0fSwgMjUwKTtcclxuXHRcdFx0Y29uc29sZS5sb2codXNlclNlcSArICcgdXNlclNlcScpO1xyXG5cdFx0fVxyXG5cdFx0aWYodXNlclNlcS5sZW5ndGggPT09IGN1cnJlbnRMdmxTZXEubGVuZ3RoICYmIGN1cnJlbnRMdmxTZXEubGVuZ3RoID4gMCkge1xyXG5cdFx0XHQkKCcjb25seS1kaXYtaW5zaWRlJykuY2hpbGRyZW4oKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcblx0XHRcdGNvbXBhcmUoKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7Il0sImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
