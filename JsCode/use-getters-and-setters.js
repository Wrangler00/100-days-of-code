//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object

// Only change code below this line
class Thermostat{
  constructor(F){
    this._cel = 5/9 * (F - 32);
  }

  get temperature(){
    return this._cel
  }

  set temperature(c){
    this._cel = c;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
