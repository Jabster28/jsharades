const art = require("ascii-art")
var {
	Timer
} = require("easytimer.js")
const ran = require("randray")
var r = require("readline")
pc = 0
o = {}
end = false
s = ['tissue box',
	'button',
	'conditioner',
	'bowl',
	'fork',
	'picture frame',
	'paint brush',
	'car',
	'mouse pad',
	'soap',
	'thermometer',
	'lamp',
	'keys',
	'vase',
	'nail',
	'keyboard',
	'fridge',
	'banana',
	'mop',
	'zipper',
	'needle',
	'eraser',
	'towel',
	'water bottle',
	'watch',
	'slipper',
	'teddies',
	'pen',
	'socks',
	'photo album',
	'toothbrush',
	'charger',
	'bookmark',
	'clothes',
	'tape',
	'street lights',
	'spoon',
	'cat',
	'brocolli',
	'chocolate',
	'eye liner',
	'nail file',
	'candle',
	'monitor',
	'candy wrapper',
	'camera',
	'lace',
	'drawer',
]
var p;
rl = r.createInterface({
	input: process.stdin,
	output: process.stdout
})
rl.question("Welcome to Charades! Please tell me your player's names, seperated by commas:\n", function (a) {
	p = a.split(",")
	for (i = 0; i < p.length; i++) {
		o[p[i]] = {
			points: 0
		}
	}

	console.log("So you have " + p.length + " people, good. The order will be:\n" + p + "\nLets Play!\n")
	console.log("I will tell you who is currently in front of the display, and then a word will appear above that person. You will try to act out the object and make the person guess what it is without talking to them. You can, however, make noises. Everytime they get a word right, press enter on the keyboard to move to a different word.")
	x = funxtion() {
		rl.question("It is " + p[pc] + "'s turn. Once they can't see the display (ideally in front or to the right of it), you can press enter and start acting:", function (a) {
			end = false
			var timer = new Timer();
			timer.start({
				precision: 'seconds',
				startValues: {
					seconds: 0
				},
				target: {
					seconds: 30
				}
			});
			timer.addEventListener('targetAchieved', function (e) {
				end = true
			});
			q = function () {
				art.font(ran(s), "Doom", function (rendered) {
					rl.question(rendered, function (a) {
						o[p[pc]].points++
						if (end) w()
					})
				});
			}
			q()

			w = function () {
				if (pc > p.length - 1) pc = 0
				console.log("Nice! " + p[pc] + " got " + o[p[pc]].points)
				console.log("\nNext person!\n\n")
				x()
			}
		})
	}
	console.log("\n\n")
	x()

})
