var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(arr, elem){
  return [elem, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, elem){
  return arr.unshift(elem);
}
function addElementToEndOfArray(arr, elem){
  return arr.push(elem)
}

function addElementToEndOfArray(arr, elem){
  return [...arr, elem];
}

function destructivelyAddElementToEndOfArray(arr, elem) {
  return arr.push(elem)
}

function accessElementInArray(arr, ind) {
  return arr[ind];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  return arr.shift();
}

function removeElementFromBeginningOfArray(arr){
  return arr.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  return arr.pop();
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, arr.length -1);
}
