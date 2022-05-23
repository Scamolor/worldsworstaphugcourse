function quiz1Start() {
	var canvasE2 = document.getElementById("twhgCanvas");
	var Question = new String;
	var Option1 = new String;
	var Option2 = new String;
	var Option3 = new String;
	var mx = 0;
	var my = 0;
	var CorrectAnswer = 0;
	var qnumber = 0;
	var rightanswers = 0;
	var wronganswers = 0;
	var QuizFinished = false;
	var lock = false;
	var textpos1 = 45;
	var textpos2 = 145;
	var textpos3 = 230;
	var textpos4 = 325;
	var Questions = ["What is the minimum population of a megacity?", "Which of the following is a key feature of a global city?", "Where is Rome?"];
	var Options = [["10,000,000", "100,000,000", "1,000,000"], ["An economical and political link to the global market.", "Political dominace over the region it is located in.", "Historical significance, often on a global scale."], ["Italy", "Brazil", "Canada"]];
	quizBG()

 function quizBG() {
		canvas.drawImage(quizbg, 0, 0);
		SetQuestions();
	}

function setQuestions() {
		Question = Questions[qnumber];
		CorrectAnswer = 1 + Math.floor(Math.random() * 3);

		if (CorrectAnswer == 1) { Option1 = Options[qnumber][0]; Option2 = Options[qnumber][1]; Option3 = Options[qnumber][2]; }
		if (CorrectAnswer == 2) { Option1 = Options[qnumber][2]; Option2 = Options[qnumber][0]; Option3 = Options[qnumber][1]; }
		if (CorrectAnswer == 3) { Option1 = Options[qnumber][1]; Option2 = Options[qnumber][2]; Option3 = Options[qnumber][0]; }

		canvas.textBaseline = "middle";
		canvas.font = "10pt Calibri,Arial";
		canvas.fillText(Question, 20, textpos1);
		canvas.font = "18pt Calibri,Arial";
		canvas.fillText(Option1, 20, textpos2);
		canvas.fillText(Option2, 20, textpos3);
		canvas.fillText(Option3, 20, textpos4);


	}//SetQuestions

	canvasE2.addEventListener('click', ProcessClick, false);

	function ProcessClick(ev) {

		my = ev.y - canvas.offsetTop;

		if (ev.y == undefined) {
			my = ev.pageY - canvas.offsetTop;
		}

		if (lock) {
			ResetQ();
		}//if lock

		else {

			if (my > 110 && my < 180) { GetFeedback(1); }
			if (my > 200 && my < 270) { GetFeedback(2); }
			if (my > 290 && my < 360) { GetFeedback(3); }

		}//!lock

	}//ProcessClick



	function GetFeedback(a) {

		if (a == CorrectAnswer) {
			canvas.drawImage(quizbg, 0, 400, 75, 70, 480, 110 + (90 * (a - 1)), 75, 70);
			rightanswers++;
			//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		}
		else {
			canvas.drawImage(quizbg, 75, 400, 75, 70, 480, 110 + (90 * (a - 1)), 75, 70);
			wronganswers++;
		}
		lock = true;
		canvas.font = "14pt Calibri,Arial";
		canvas.fillText("Click again to continue", 20, 380);
	}//get feedback


	 function ResetQ() {
		lock = false;
		canvas.clearRect(0, 0, 550, 400);
		qnumber++;
		if (qnumber == Questions.length) { EndQuiz(); }
		else {
			canvas.drawImage(quizbg, 0, 0);
			SetQuestions();
		}
	}


	function EndQuiz() {
		QuizFinished = true;
		canvasE2.removeEventListener('click', ProcessClick, false);
		canvas.drawImage(quizbg, 0, 0, 550, 90, 0, 0, 550, 400);
		canvas.font = "20pt Calibri,Arial";
		canvas.fillText("You have finished the quiz!", 20, 100);
		canvas.font = "16pt Calibri,Arial";
		canvas.fillText("Correct answers: " + String(rightanswers), 20, 200);
		canvas.fillText("Wrong answers: " + String(wronganswers), 20, 240);
		if ((rightanswers == 3) && (QuizFinished = true)) {
			playerRespawn()
		}
	}
};