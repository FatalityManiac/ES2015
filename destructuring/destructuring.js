// Object Destructuring 1
// numPlanets = 8
// yearNeptuneDiscovered = 1846
//
// Object Destructuring 2
// discorveredYears = {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
//
// Object Destructuring 3
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green
//
//Array Destucturing 1
//first = Maya
//second = Marisa
//third = Chi
//
//Array Destucturing 2
//raindrops = "Raindrops on roses"
//whiskers = "whiskers on kittens"
//aFewOfMyFavoriteThings = ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]
//
//Array Destucturing 3
//numbers = [10,30,20]

//ES2015 Object Destructuring
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const {a,b} = obj.numbers


//Array Swap
[arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
