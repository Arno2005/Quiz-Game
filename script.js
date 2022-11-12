var data = [["When Did World War 2 Start?", [1685,1946,1939,1804], 2],
			["Which of These Languages Has The Most Native Speakers?", ['English', 'Portuguese', 'Spanish', 'Chinese'], 2],
			["What artist has the most streams on Spotify?", ['Eminem' , 'Ed Sheeran', '50 Cent','Drake'], 1],
			["What is the highest-rated movie on IMDb as of January 1st, 2022?", ['Top Gun Maverick' , 'Green Mile', 'Titanic','The Shawshank Redemption'], 3],
			["What Netflix show had the most streaming views in 2021?", ['Squid Game', 'Stranger Things', 'Money Heist', 'Breaking Bad'], 0],
			];

var user_dt = [];
var count = 0;
var score = 0;
var tm;

document.querySelector(".one").onclick = function(){
		get(document.querySelector(".one").innerText)};

document.querySelector(".two").onclick = function(){
		get(document.querySelector(".two").innerText)};

document.querySelector(".three").onclick = function(){
		get(document.querySelector(".three").innerText)};

document.querySelector(".four").onclick = function(){
		get(document.querySelector(".four").innerText)};



function start(){
	document.querySelector('.start').style.display = 'none';
	document.querySelector('.que').style.display = 'block';

	var threeMinutes = 60 * 3;
    display = document.querySelector('.timer');
    startTimer(threeMinutes, display);

	act();

}


function act(){
	
	document.querySelector(".qst").innerHTML = data[count][0];

	document.querySelector(".one").innerHTML = data[count][1][0];
	document.querySelector(".two").innerHTML = data[count][1][1];
	document.querySelector(".three").innerHTML = data[count][1][2];
	document.querySelector(".four").innerHTML = data[count][1][3];

}

function get(dt){

	if(dt == data[count][1][data[count][2]]){
		score += 1;
		user_dt[count] = true;
	}else{
		user_dt[count] = false;
	}

	count+=1;

	if(count == data.length){
		end(score, user_dt);
		clearInterval(tm);
		return 0;
	}

	act();

}


function end(score, data){
	
	document.querySelector('.end').style.display = 'block';
	document.querySelector('.start').style.display = 'none';
	document.querySelector('.que').style.display = 'none';



	let scr = document.createTextNode(`Your Score Is ${score} Out Of ${data.length}. Here Are Your Results:`);

	document.querySelector('.fin').appendChild(scr);

	let ans = '';

	for(let i = 0; i < data.length; i++){

		if(data[i] == 0){
			ans = "Wrong";
		}else if(data[i] == 1){
			ans = "Correct";
		}

		let list = document.createElement("p");
		let results = document.createTextNode(`Question ${i+1}:  ${ans}`);

		list.appendChild(results);
		document.querySelector('.details').appendChild(list);
	}
	
}


function startTimer(duration, display) {

    var timer = duration, minutes, seconds;
    tm = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
        	location.reload();
      		clearInterval(tm);
        	alert("Your Time Is Up!");
            
        }
    }, 1000);
}