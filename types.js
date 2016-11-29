function getNumber(){
  return 5;
}

module.exports = { //follow this pattern to export to this module (all this code) to the required file in the index.test.js
  getNumber: getNumber,
  getObject: getObject,
  getString: getString,
  getBoolean: getBoolean,
  getFunction: getFunction,
  getNull: getNull
}

function getObject(){
  return {};//this is an empty object, but i can have properties and value, either will pass

}

function getString(){
  return "cool";
}

function getBoolean(){
  return true;
}

function getFunction(){
  return function() {

  }
}

function getNull(){
  return null;//special kind of object that represents nothing (the absents of a thing)
}
