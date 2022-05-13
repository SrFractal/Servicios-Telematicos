//-Función Shuffle - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array -
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
//-Cartas----------------------------------------------------------------------------------------------------
Cartas=[
    1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12
];
shuffle(Cartas);
//-----------------------------------------------------------------------------------------------------------
module.exports = {Cartas};