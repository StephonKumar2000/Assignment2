// FOR EACH //
cost arr = [1,2,3,4];
Array.prototype.myEach = function(callback1) {
  for(let i = 0; i < this.length; i++){
    if (this[i] === undefined) continue;

    callback(this[i], i, this);
  }

};

// MAP //
Array.prototype.myMap = function(callback2) {
  let newArray = [];
  let x = this.length;
  for (let i = 0; i < x; i++) {
    let counter = callback2(this[i]);
    newArray.push(counter);
  }
  return newArray;
};

let arr = [1, 2, 3];
arr = arr.myMap(e => e * 2);
console.log(arr);

// FILTER //
var a = [12,45,61,80];

Array.prototype.myFilter = function(callback3){
  var newArray = [];
  for(let i =0; i < this.length ; i++){
    if(callback3(this[i])){
      newArray.push(this[i]);
    }
  }
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});



// SOME //
Array.prototype.mySome = function(callback4, con1) {
  for(var i = 0; i < this.length; i++){
    if (callback4.call(con1, this[i], i, this))
    return true;
  }
  return false;

};

// EVERY //
Array.prototype.myEvery = function(callback5, con2) {
  for (var i = 0; i < this.length; i++){
    if(!callback5.call(con2, this[i], i, this))
    return false;
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callback6, intVal) {
    var a_ = (intVal === undefined) ? undefined : intVal;
    for (var i = 0; i < this.length; i++) {
        if (a_ !== undefined)
            a_ = callback6.call(undefined, a_, this[i], i, this);
        else
            a_ = this[i];
    }
    return a_;
};
// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};
