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

// Yell at the Ninja turtles
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of ninjaTurtles) {
  const upperCaseName = turtle.toUpperCase();
  console.log(upperCaseName);
}

//Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log("Index of Titanic:", favMovies.indexOf('Titanic'));

favMovies.sort();

console.log("Sorted array:", favMovies);

favMovies.pop();

console.log("Array after pop:", favMovies);


favMovies.push("Guardians of the Galaxy");

console.log("Array after push:", favMovies);

favMovies.reverse();

console.log("Reversed array:", favMovies);

favMovies.shift();

console.log("Array after shift:", favMovies);

const unshiftResult = favMovies.unshift("Avatar");

console.log("Array after unshift:", favMovies);

console.log("Return value of unshift:", unshiftResult);

const djangoIndex = favMovies.indexOf("Django Unchained");

favMovies.splice(djangoIndex, 1, "Avatar");

console.log("Array after splice:", favMovies);

const middleIndex = Math.ceil(favMovies.length / 2);

const slicedArray = favMovies.slice(middleIndex);

console.log("Sliced array:", slicedArray);

console.log("Stored sliced array:", slicedArray);

console.log("Final array:", favMovies);

console.log("Index of Fast and Furious:", favMovies.indexOf("Fast and Furious"));

//wheres waldo
const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
  ];
  
  const waldo = whereIsWaldo[3][1][1];
  
  console.log("Waldo:", waldo);
  
  console.log("Modified whereIsWaldo array:", whereIsWaldo);
  
  //kitty cat meow meow meow 
  const kittyTalk = [
    "...human...why you taking pictures of me?...",
    "...the catnip made me do it...",
    "...why does the red dot always get away..."
  ];
  
  for (let i = 1; i <= 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
  
  
    if (i % 2 === 0) {
   
      let meow = Math.floor(Math.random() * kittyTalk.length);
      
 
      console.log(kittyTalk[meow]);
    }
  }
  
  //Find the Median 

 const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];


nums.sort((a, b) => a - b);


const middlendex = Math.floor(nums.length / 2);


if (nums.length % 2 === 1) {

  console.log(`=> ${nums[middleIndex]}`);
} else {

  const median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
  console.log(`=> ${median}`);
}
//im not too sure but im only getting 14 for the output instead of the 15

