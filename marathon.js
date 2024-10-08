//random race number
let raceNumber = Math.floor(Math.random() * 1000);

//registered?
let registeredEarly = true;

//age
let runnerAge = 12;

//Early Adult number
if (runnerAge >= 18 && registeredEarly) {
  console.log(`${(raceNumber += 1000)}, is your number!`);
  //late adult number
} else if (runnerAge >= 18 && registeredEarly === false) {
  console.log(raceNumber);
  // early youth number
} else if (runnerAge < 18 && registeredEarly) {
  console.log(`${(raceNumber += 2000)}, is your number!`);
  // late youth number
} else if (runnerAge < 18 && registeredEarly === false) {
  console.log(`${(raceNumber += 3000)}, is your number!`);
}
//early Adult time
if (runnerAge >= 18 && registeredEarly) {
  console.log(`${raceNumber}, You will race at 9:30 A.M.!`);

  //late adult time
} else if (runnerAge >= 18 && registeredEarly === false) {
  console.log(`${raceNumber}, late adults will race at 11:00 A.M.`);

  //early youth time
} else if ((runnerAge < 18, registeredEarly)) {
  console.log(`${raceNumber}, You will race at 12:30 pm`);
}

//late youth time
else if ((runnerAge < 18, registeredEarly === false)) {
  console.log(`${raceNumber}, You will race at 5:30 pm`);
}
