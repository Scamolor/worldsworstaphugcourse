var intermissions = [
    [],
    /*  L1 */["YOU DON'T KNOW WHAT", "YOU'RE GETTING INTO."],
    /*  L2 */["According to the rank size rule, cities should have a population of 1/n,",  "with n being the rank of the city in terms of population."],
    /*  L3 */["EVEN SATAN FEARS THIS ABOMINATION"],
    /*  L4 */["THAT ONE WAS EASY."],
    /*  L5 */["BURGRESS CONCENTRIC RING MODEL"],
    /*  L6 */["DON'T GET DIZZY!"],
    /*  L7 */["HOW FAST CAN", "YOU GO?"],
    /*  L8 */["DON'T GET CONFUSED,", "NOW."],
    /*  L9 */["HOW GOOD ARE YOUR", "REFLEXES?"],
    /* L10 */["HARDER THAN IT", "LOOKS."],
    /* L11 */["JUST GIVE UP...", "IT KEEPS GETTING", "HARDER."],
    /* L12 */["I HOPE YOU'RE", "NOT IN A HURRY."],
    /* L13 */["THIS IS WAY TOO", "EASY. SERIOUSLY.", "NOT HARD."],
    /* L14 */["IT STARTS TO GET", "REAL TRICKY HERE."],
    /* L15 */["THERE'S AN EASY", "WAY AND A", "HARD WAY."],
    /* L16 */["GIVE UP, THIS ONE", "ISN'T EVEN HARD."],
    /* L17 */["YOU WON'T BEAT", "THE GAME."],
    /* L18 */["THIS ONE IS SO", "HARD YOU'LL NEVER", "DO IT."],
    /* L19 */["NOT SO EASY,", "IS IT?"],
    /* L20 */["IT GETS HARDER NOW."],
    /* L21 */["YOU'VE ALREADY LOST."],
    /* L22 */["DON'T CHOKE!"],
    /* L23 */["AROUND AND AROUND..."],
    /* L24 */["THIS ONE ISN'T", "HARD IF YOU KNOW", "THE TRICK."],
    /* L25 */["YOU'RE PROBABLY", "GETTING FRUSTRATED."],
    /* L26 */["THIS SHOULDN'T EVEN", "TAKE MORE THAN", "2 DEATHS."],
    /* L27 */["NOT HARD AT ALL."],
    /* L28 */["BABY WANT HIS", "BOTTLE?"],
    /* L29 */["MIGHT BE TRICKY."],
    /* L30 */["THE FOLLOWING", "LEVEL IS IMPOSSIBLE."]
];

function initIntermission() {
    state = "intermission";
    intermissionTimer = INTERMISSION_TIMER_TOT;
    finishInstructions();
}

function updateIntermission() {
    if (state == "intermission") {
        if (intermissionTimer > 0) {
            intermissionTimer--;
        } else {
            state = "game";
            resetPlayer();
            resetEnemies(level);
            playerAtCheck(true);
            initInstructions();
            justLoaded = false;
        }
    }
}

function drawIntermission() {
    drawPlainBg();
    }
}

function drawPlainBg() {
	var color0, color1;
	if (level >= WALLS_RED) {
		color0 = INTERMISSION_COLOR_2_0;
		color1 = INTERMISSION_COLOR_2_1;
	} else if (level >= WALLS_PURPLE) {
		color0 = INTERMISSION_COLOR_1_0;
		color1 = INTERMISSION_COLOR_1_1;
	} else {
		color0 = INTERMISSION_COLOR_0_0;
		color1 = INTERMISSION_COLOR_0_1;
	}
	
    var grad = canvas.createLinearGradient(os.x, os.y, os.x, cwh(CANVAS_HEIGHT - BAR_HEIGHT * 2) + os.y);
    canvas.beginPath();
    canvas.rect(os.x, cwh(BAR_HEIGHT) + os.y, cwh(CANVAS_WIDTH), cwh(CANVAS_HEIGHT - BAR_HEIGHT * 2));
    grad.addColorStop(0, color0);
    grad.addColorStop(1, color1);
    canvas.fillStyle = grad;
    canvas.fill();
}