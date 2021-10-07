// FOR EACH //
Array.prototype.myEach = function(x) {
  for(let i=0; i<this.length; i++){
    x(this[i], i)
  }

};

[1,2,3,4,5].myEach(function(y, i){
  console.log(y)
});

// MAP //
var a = [43, 54, 32, 12]
Array.prototype.myMap = function(call) {
  var new_ = [];
  for(let i = 0; i < this.length; i++){
    new_.push(call(this[i]));
  }
  return new;
};
var new_a = a.myMap(function(item)){
  return item * 2
});

// FILTER //
var a2 = [23,54,12,89];
Array.prototype.myFilter = function(call2) {
  var new_2 = [];
  for(let i = 0; i < this.length; i++){
    if(call2(this[i])){
      new2.push(this[i]);
    }
  }
  return new_2
};
var new_a2 = s.myFilter(function(item){
  return item% 2 == 1;
});

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

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
