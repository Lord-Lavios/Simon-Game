function levelSeq(){for(var e=0;currentLvl>e;e++){var n=Math.floor(4*Math.random()+1);currentLvlSeq.push(n)}console.log(currentLvlSeq)}function compare(){for(var e=1,n=0;n<userSeq.length;n++)userSeq[n]!=currentLvlSeq[n]&&(e=0);0===e?(userSeq=[],currentLvlSeq=[],currentLvl=1,$("#lvl").text("Level "+currentLvl).hide().fadeIn(900),$("#steps").text("Steps - "+currentLvl).hide().fadeIn(900)):(userSeq=[],currentLvlSeq=[],currentLvl+=1,$("#lvl").text("Level "+currentLvl).hide().fadeIn(900),$("#steps").text("Steps - "+currentLvl).hide().fadeIn(900))}var currentLvlSeq=[],userSeq=[],currentLvl=1,loopVariable=0,audOne=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),audTwo=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),audThree=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),audFour=new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");$(document).ready(function(){function e(){var n=currentLvlSeq[loopVariable];$(".box").eq(n-1).css("opacity","0.5"),1===n?audOne.play():2===n?audTwo.play():3===n?audThree.play():4===n&&audFour.play(),loopVariable<currentLvlSeq.length?(loopVariable+=1,setTimeout(function(){$(".box").eq(n-1).css("opacity","1")},400),setTimeout(e,1e3)):loopVariable=0}$("button").click(function(){0===userSeq.length&&0===currentLvlSeq.length&&($("#only-div-inside").children().css("cursor","pointer"),levelSeq(),e())}),$("#only-div-inside").children().click(function(){if(0!==currentLvlSeq.length&&userSeq.length<currentLvlSeq.length&&0===loopVariable){var e=$(this);userSeq.push($(this).index()+1),$(e).css("opacity","0.6"),e.index()+1===1?audOne.play():e.index()+1===2?audTwo.play():e.index()+1===3?audThree.play():e.index()+1===4&&audFour.play(),setTimeout(function(){$(e).css("opacity","1")},250),console.log(userSeq+" userSeq")}userSeq.length===currentLvlSeq.length&&currentLvlSeq.length>0&&($("#only-div-inside").children().css("cursor","default"),compare())})});
