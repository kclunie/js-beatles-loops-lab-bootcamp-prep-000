// add solution here
function theBeatlesPlay(musicians, instruments){
  var newarray = [];
for (let i = 0; i < 4; i++) {
  newarray.push(musicians[i] + "plays" + instruments[i])
}
return newarray
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts){
  while (facts > 0){
  facts.push("!!!")
}
  return facts
}

/*function iLoveTheBeatles('7'){
  var newarray = new Array();
    do {
    newarray.push("I love the Beatles!")
    } while ('7' < 15, '7'++)
  return array
}
*/