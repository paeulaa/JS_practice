

let num = parseInt(Math.random()*100);
console.log(num);

let min = 1;
let max = 100;
while(1){
    let guess = prompt("Guess an integer between " + min + " to " + max);  
    if(guess < min || guess > max){
        alert("Please enter a viable number."); 
        continue;
    }else{
        if(guess == num){
            alert("Sucessful!");
            break; 
        }else if(guess > num){
            max = guess;
            //prompt("Guess an integer between"+ min + "to" + max); 
        }else if(guess < num){
            min = guess;
            //prompt("Guess an integer between"+ min + "to" + max); 
        }
    }
}