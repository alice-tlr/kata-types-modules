function callsTheFunction(func){
  func()
}

module.exports = {
  callsTheFunction: callsTheFunction,
  callsProperty: callsProperty,
  map: map,
  filter:filter,
  find:find
}

function callsProperty(obj){
  obj.increment()
}

function map(arr, func) {
  //return arr.map(func)//refer the func parameter to the array prototype method (every single array has that map, and return the result)
  var myArr =[];
  for (var i = 0; i < arr.length; i++){
    var oldValue = arr[i];
    var newValue = func(oldValue)
    myArr.push(newValue)
  }
  return myArr;
}

function filter(arr, func){
  //return arr.filter(func)//refer the func pararmeter to the filter prototype method (if its true its included in the new array. if it's false it is not included)
  var myArr = [];
  for (var i = 0; i < arr.length; i++){
    var val = arr[i];
    var include = func(val)
    if (include) {
      myArr.push(val)
    }
  }
  return myArr;

}

function find (arr, func){
  //return arr.find(func)//find prototype find the first instance of true and returns it
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    var match = func(val)
    if (match) {
      return val;
    }
  }
}
