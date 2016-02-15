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

	if(localStorage.getItem("Highest Level") !== null) {
		$("#steps").text('Highest Level - ' + localStorage.getItem("Highest Level"));
		var highestLevel = localStorage.getItem("Highest Level");
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
			$('#steps').text('Highest Level - ' + currentLvl).hide().fadeIn(900);
		} else {
			userSeq= [];
			currentLvlSeq = [];
			currentLvl += 1;
			if(currentLvl > highestLevel) {
				localStorage.setItem('High Score', currentLvl);
			}
			$('#lvl').text('Level ' + currentLvl).hide().fadeIn(900);
			$('#steps').text('Highest Level - ' + currentLvl).hide().fadeIn(900);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY3VycmVudEx2bFNlcSA9IFtdO1xyXG52YXIgdXNlclNlcSA9IFtdO1xyXG52YXIgY3VycmVudEx2bCA9IDE7XHJcbnZhciBsb29wVmFyaWFibGUgPSAwO1xyXG52YXIgYXVkT25lID0gbmV3IEF1ZGlvKCdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL3NpbW9uU291bmQxLm1wMycpO1xyXG52YXIgYXVkVHdvID0gIG5ldyBBdWRpbygnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9zaW1vblNvdW5kMi5tcDMnKTtcclxudmFyIGF1ZFRocmVlID0gbmV3IEF1ZGlvKCdodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZnJlZWNvZGVjYW1wL3NpbW9uU291bmQzLm1wMycpO1xyXG52YXIgYXVkRm91ciA9IG5ldyBBdWRpbygnaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL2ZyZWVjb2RlY2FtcC9zaW1vblNvdW5kNC5tcDMnKTtcclxuXHJcbmZ1bmN0aW9uIGxldmVsU2VxKCkge1xyXG5cdGZvcih2YXIgaSA9IDA7IGk8Y3VycmVudEx2bDsgaSsrKSB7XHJcblx0XHR2YXIgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDEpO1xyXG5cdFx0Y3VycmVudEx2bFNlcS5wdXNoKG51bSk7XHRcclxuXHR9XHJcblx0Y29uc29sZS5sb2coY3VycmVudEx2bFNlcSk7XHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHRpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkhpZ2hlc3QgTGV2ZWxcIikgIT09IG51bGwpIHtcclxuXHRcdCQoXCIjc3RlcHNcIikudGV4dCgnSGlnaGVzdCBMZXZlbCAtICcgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIkhpZ2hlc3QgTGV2ZWxcIikpO1xyXG5cdFx0dmFyIGhpZ2hlc3RMZXZlbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiSGlnaGVzdCBMZXZlbFwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0JChcIiNzdGVwc1wiKS50ZXh0KCdIaWdoZXN0IExldmVsIC0gMScpXHJcblx0XHRoaWdoZXN0TGV2ZWwgPSAxO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY29tcGFyZSgpIHtcclxuXHRcdHZhciBhbnN3ZXIgPSAxO1xyXG5cdFx0Zm9yKHZhciBpID0gMDtpPHVzZXJTZXEubGVuZ3RoO2krKykge1xyXG5cdFx0XHRpZih1c2VyU2VxW2ldICE9IGN1cnJlbnRMdmxTZXFbaV0pIHtcclxuXHRcdFx0XHRhbnN3ZXIgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZihhbnN3ZXIgPT09IDApIHtcclxuXHRcdFx0dXNlclNlcSA9IFtdO1xyXG5cdFx0XHRjdXJyZW50THZsU2VxID0gW107XHJcblx0XHRcdGN1cnJlbnRMdmwgPSAxO1xyXG5cdFx0XHQkKCcjbHZsJykudGV4dCgnTGV2ZWwgJyArIGN1cnJlbnRMdmwpLmhpZGUoKS5mYWRlSW4oOTAwKTtcclxuXHRcdFx0JCgnI3N0ZXBzJykudGV4dCgnSGlnaGVzdCBMZXZlbCAtICcgKyBjdXJyZW50THZsKS5oaWRlKCkuZmFkZUluKDkwMCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR1c2VyU2VxPSBbXTtcclxuXHRcdFx0Y3VycmVudEx2bFNlcSA9IFtdO1xyXG5cdFx0XHRjdXJyZW50THZsICs9IDE7XHJcblx0XHRcdGlmKGN1cnJlbnRMdmwgPiBoaWdoZXN0TGV2ZWwpIHtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSGlnaCBTY29yZScsIGN1cnJlbnRMdmwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJyNsdmwnKS50ZXh0KCdMZXZlbCAnICsgY3VycmVudEx2bCkuaGlkZSgpLmZhZGVJbig5MDApO1xyXG5cdFx0XHQkKCcjc3RlcHMnKS50ZXh0KCdIaWdoZXN0IExldmVsIC0gJyArIGN1cnJlbnRMdmwpLmhpZGUoKS5mYWRlSW4oOTAwKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHJcblx0ZnVuY3Rpb24gc3RhcnQoKSB7XHJcblx0XHR2YXIgIGluZGV4ID0gY3VycmVudEx2bFNlcVtsb29wVmFyaWFibGVdO1xyXG5cdFx0JChcIi5ib3hcIikuZXEoaW5kZXggLSAxKS5jc3MoJ29wYWNpdHknLCAnMC41Jyk7XHJcblx0XHRpZihpbmRleCA9PT0gMSkge1xyXG5cdFx0XHRhdWRPbmUucGxheSgpO1xyXG5cdFx0fSBlbHNlIGlmKCBpbmRleCA9PT0gMikge1xyXG5cdFx0XHRhdWRUd28ucGxheSgpO1xyXG5cdFx0fSBlbHNlIGlmKCBpbmRleCA9PT0gMykge1xyXG5cdFx0XHRhdWRUaHJlZS5wbGF5KCk7XHJcblx0XHR9IGVsc2UgaWYoaW5kZXggPT09IDQpIHtcclxuXHRcdFx0YXVkRm91ci5wbGF5KCk7XHJcblx0XHR9XHJcblx0XHRpZihsb29wVmFyaWFibGUgPCBjdXJyZW50THZsU2VxLmxlbmd0aCkge1xyXG5cdFx0XHRsb29wVmFyaWFibGUgKz0gMTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKFwiLmJveFwiKS5lcShpbmRleCAtIDEpLmNzcygnb3BhY2l0eScsICcxJyk7XHJcblx0XHRcdH0sIDQwMCk7XHJcblx0XHRcdHNldFRpbWVvdXQoc3RhcnQsIDEwMDApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bG9vcFZhcmlhYmxlID0gMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdCQoJ2J1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYodXNlclNlcS5sZW5ndGggPT09IDAgJiYgY3VycmVudEx2bFNlcS5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0JCgnI29ubHktZGl2LWluc2lkZScpLmNoaWxkcmVuKCkuY3NzKCdjdXJzb3InLCAncG9pbnRlcicpO1xyXG5cdFx0XHRsZXZlbFNlcSgpO1xyXG5cdFx0XHRzdGFydCgpO1xyXG5cdFx0fVxyXG5cdH0pXHJcblxyXG5cdCQoJyNvbmx5LWRpdi1pbnNpZGUnKS5jaGlsZHJlbigpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoY3VycmVudEx2bFNlcS5sZW5ndGggIT09IDAgJiYgdXNlclNlcS5sZW5ndGggPCBjdXJyZW50THZsU2VxLmxlbmd0aCAmJiBsb29wVmFyaWFibGUgPT09IDApIHtcclxuXHRcdFx0dmFyIGtpZENsaWNrID0gJCh0aGlzKTtcclxuXHRcdFx0dXNlclNlcS5wdXNoKCQodGhpcykuaW5kZXgoKSArIDEpO1xyXG5cdFx0XHQkKGtpZENsaWNrKS5jc3MoJ29wYWNpdHknLCAnMC42Jyk7XHJcblx0XHRcdGlmKGtpZENsaWNrLmluZGV4KCkgKyAxID09PSAxKSB7XHJcblx0XHRcdFx0YXVkT25lLnBsYXkoKTtcdFxyXG5cdFx0XHR9IGVsc2UgaWYoIGtpZENsaWNrLmluZGV4KCkgKyAxID09PSAyKSB7XHJcblx0XHRcdFx0YXVkVHdvLnBsYXkoKTtcclxuXHRcdFx0fSBlbHNlIGlmKCBraWRDbGljay5pbmRleCgpICsgMSA9PT0gMykge1xyXG5cdFx0XHRcdGF1ZFRocmVlLnBsYXkoKTtcclxuXHRcdFx0fSBlbHNlIGlmKGtpZENsaWNrLmluZGV4KCkgKyAxID09PSA0KSB7XHJcblx0XHRcdFx0YXVkRm91ci5wbGF5KCk7XHJcblx0XHRcdH1cclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKGtpZENsaWNrKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG5cdFx0XHR9LCAyNTApO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh1c2VyU2VxICsgJyB1c2VyU2VxJyk7XHJcblx0XHR9XHJcblx0XHRpZih1c2VyU2VxLmxlbmd0aCA9PT0gY3VycmVudEx2bFNlcS5sZW5ndGggJiYgY3VycmVudEx2bFNlcS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdCQoJyNvbmx5LWRpdi1pbnNpZGUnKS5jaGlsZHJlbigpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuXHRcdFx0Y29tcGFyZSgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG59KTsiXSwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
