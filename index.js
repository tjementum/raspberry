
var wpi = null;
try {
	wpi = require('wiring-pi');

	// GPIO pin of the led
	var configPin = 7;
	// Blinking interval in usec
	var configTimeout = 1000;

	wpi.setup('wpi');
	wpi.pinMode(configPin, wpi.OUTPUT);
} catch (er) {
	console.log("Failed to run WPI");
	wpi = null
}

var changeAlarmState = function(state){
	var newAlarmState = state === "start" ? 1 : 0;
	if(wpi === null) {
		console.log("Alarm " + newAlarmState);
	} else {
		wpi.digitalWrite(configPin, newAlarmState);
	} 
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
	changeAlarmState(line);
});
