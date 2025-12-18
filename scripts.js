let gCalEntryToApp = (str) => {

  let split = str.split("[]");

  // line cleanup
  split = split.slice(1, split.length);

  let cleaned = split.map(str => {
    if (str.slice(str.length - 2, str.length -1) !== ", ") {
      return "[]" + str.slice(0, str.length - 2);
    }
  })
  return cleaned;
}

let str = "[]Fin, Weigh and log, []Coffee, []Ex supersets/walk, []mark exercises, pick next, []Stretch, []Hyg & clean glasses";


let appFormatted = gCalEntryToApp(str)

console.log(1, appFormatted);



let appToGCalEntry = () => {
  
}
