/**----------------------------------------------

              Exercism Exercises

------------------------------------------------ */

/* <------------------- lusina Lasagna  ---------------------------> */

const expectedMinutesInOven = 40;

function remainingMinutesInOven(minutes) {
  return expectedMinutesInOven - minutes;
}

function preparationTimeMinutes(layers) {
  return layers * 2;
}

function totalWorkingTime(layers, actual) {
  return layers * 2 + actual;
}

/**<------------------- Scrabble Score  ---------------------------> */

const letter = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"],
};

function score(word) {
  let result = [];
  let value = [];
  let newWord = word.toUpperCase();
  item = newWord.split("");
  item.forEach((element) => {
    for (let i = 0; i < Object.entries(letter).length; i++) {
      if (Object.entries(letter)[i][1].includes(element)) {
        value.push(Object.entries(letter)[i][0]);
      }
    }
  });

  value.forEach((element) => {
    num = Number(element);
    result.push(num);
  });

  let final = result.reduce((previous, last) => {
    return previous + last;
  });

  return final;
}
score("cabbage"); // 14

/** <----------------------------  Allergies Scores   ------------- ---------->*/

const arr = [1, 2, 4, 8, 16, 32, 64, 128];
const allergies = [
  "Eggs",
  "Peanuts",
  "Shellfish",
  "Strawberries",
  "Tomatoes",
  "Chocolate",
  "Pollen",
  "Cats",
];
// Zips each allergy and its score and stores them in an array
var allergiesAndScores = arr.map((e, i) => {
  return [e, allergies[i]];
});

function allergiesChecker(num) {
  let store = [];
  let allergy = [];
  let use = num;
  var value, result;
  // Finds the modulo of a number
  function modulo(arg) {
    return arg % value;
  }
  /**  A function that loops through each element in the array of allegy scores and stores the elements that 
are less than the argument given and returns the last element in the array.*/

  function checker(newarg) {
    let ah = [];
    arr.map((element) => {
      if (element < newarg) {
        ah.push(element);
      }
    });
    return ah[ah.length - 1];
  }
  /** This function finds all the scores that add up to the input score */
  do {
    if (use > 256) {
      use = use % 256; //Handles allergy scores greater than 256
    }
    value = checker(use);
    result = modulo(use);
    if ((use === 2 && value === 1) || use === 1 || arr.includes(use)) {
      // Special condition for some numbers
      store.push(use);
    } else {
      store.push(value);
    }
    console.log(store);
    use = result;
  } while (result > 0);

  /**The block of code above returns only the allergy scores. This block of code finds the 
   corresponding allergy */

  store.forEach((element) => {
    for (let i = 0; i < allergiesAndScores.length; i++) {
      if (allergiesAndScores[i][0] === element) {
        allergy.push(allergiesAndScores[i][1]);
      }
    }
  });
  return allergy;
}
allergiesChecker(32);

/** <---------------------- Word counter -------------------> */

function wordCounter(word) {
  const use = word.split("");
  const symbol = /,\.!/;
  use.remove(symbol);
  let arr = use.reduce((prev, curr) => {
    return prev[curr] ? ++prev[curr] : (prev[curr] = 1), prev;
  }, {});
  return arr;
}
wordCounter(
  "Hear me and rejoice,you are about to die at the hands of the children of thanos"
);

function randomGenerator() {
  const randomNumbers = [];
  do {
      limit = randomNumbers.length;
      let number = Math.floor(Math.random() * 20) + 1;
      !randomNumbers.includes(number) ? randomNumbers.push(number) : null;
      limit++;
  } while (limit <= 20);

  return randomNumbers;
}


