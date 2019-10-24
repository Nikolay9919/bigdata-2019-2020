
// Activity


//1 
use stu_1601321013

var generateID = function(index) {
  var collection = ['BMV', 'VBM', 'ASD', 'RET', 'SAC'];
  return collection[index];
}

var generateModel = function(index) {
  var collection = ['412125', '124151', '214511', '1251241', '1245211'];
  return collection[index];
}

for(i = 0; i < 5; i++) {
  db.Vehicles.insert({
    id  : generateID(i),
    model  : generateModel(i)
  })
}

//2



//3


var generateName = function(index) {
  var collection = ["AWD","afa","dawf","afwaf"]
  return collection[index]
}

var generateCategory  = function(index) {
  var collection = ["XFW","daga","wvaw","gasg"]
  return collection[index]
}

var generateCount = function() {
  var collection = [123,5125,124,123,412,12,5,213,512,124]
  var index = Math.floor(Math.random() * (10 - 1) + 1);
  return collection[index]
}

var generateVehiclesId = function() {
  var ids = db.Vehicles.distinct('_id', {}, {});
  var index = Math.floor(Math.random() * (5 - 1) + 1);
  return ids[index]
}

for(i = 0; i < 4; i++) {
  db.cargo.insert({
    name  : generateName(i),
    category  : generateCategory(i),
    count  : generateCount(),
    vehicleId  : generateVehiclesId(),
  })
}

//4

db.Vehicles.find().forEach(function (document) {
  return db.cargo.find({ vehicleId  : document._id }).pretty();
})
