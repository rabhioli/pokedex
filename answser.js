// Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
    console.log(i);
  }
   console.log();

// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i += 2) {
    console.log(i);
  }
  console.log();

// Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  //Wild Wild Life
  const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
  const sharky = ["Sharky", "shark", 20, "Left Coast"];
  const plantee = ["Plantee", "plant", 5000, "Mordor"];
  const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
  const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
  plantee[2]++; 

  wolfy[3] = "Gotham City";

  dart.push("Hawkins");

  wolfy[0] = "Gameboy";

  console.log(wolfy);

  console.log(sharky);

  console.log(plantee);

  console.log(porgee);
  
  console.log(dart);

  
