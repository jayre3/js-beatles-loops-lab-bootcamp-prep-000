// add solution
function theBeatlesPlay(musicians, instruments) {
  var allMusicians = [];
  for (let i = 0; i < musicians.length; i++) {
  allMusicians.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return allMusicians;
}
