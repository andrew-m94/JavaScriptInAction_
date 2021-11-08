let dayOfWeek = 'Monday';
console.log(dayOfWeek);

dayOfWeek = 'Friday';
console.log("I can't wait for " + dayOfWeek);

let animalInput = prompt('What is your favorite animal?');
let colorInput = prompt('What is your favorite color?');
console.log("I've never seen a " + colorInput + ' ' + animalInput);

let timeOfDay = 1300;
let meal = 'meal';

if (timeOfDay < 1200){
    meal = 'eggs';
}
    
else if (timeOfDay >= 1200 && timeOfDay <= 1700){
    meal = 'sandwich';
}

else if(timeOfDay > 1700) {
    meal = 'ribs';
}
 
console.log(meal);

let randomNumber = ((Math.random() * 10))

if (randomNumber >= 0 && randomNumber <= 2){
    console.log('Beatles');
}

else if (randomNumber >= 3 && randomNumber <= 5){
    console.log('Stones');
}

else if (randomNumber >= 6 && randomNumber <= 8){
    console.log('Floyd');
}

else if (randomNumber >= 9 && randomNumber <= 10){
    console.log('Hendrix');
}