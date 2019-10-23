

//Architecture
 show dbs
 show collections

db.Departments.insert({})
var generateDepartments = function(index) {
    var collection = ['Credit analysis', 'Operations department', 'Debit analysis', 'Cash department', 'Accounts stat department'];
  
    // var index = Math.floor((Math.random() * (7 -1) + 1));
    return collection[index]
  }

  for(i = 0; i < 5; i++) {
    db.Departments.insert({
      name  : generateDepartments(i)
    })
  }

  db.Employees.insert({})

  var generateFname = function(index) {
    var collection = ['Mihail', 'Ivan', 'Serioja', 'Nikola', 'Vladimir', 'Anastasija', 'Ekaterina'];
  
    return collection[index]
  }

  var generateLname = function(index) {
    var collection = ['Petrov', 'Ivanov', 'Jozik', 'Toskov', 'Putin', 'Kozareva', 'Velika'];
  
    return collection[index];
  }

  var generateAdName = function(index) {
    var collection = ['', 'Ivacov', 'Jozikol', 'Toskovew', 'PN', 'Kozarev', 'Velik'];

    return collection[index];
  }
  var generateMailingAddress = function() {
    var collection = ['Plovdiv', 'Odesa', 'Kyiv', 'Sofia', 'Bolgrad', 'Montana', 'Undefined?'];
  
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index];
  }

  var generateMobPH = function(index) {
    var collection = ['04449393924', '0444939393', '0992823838', '0893723927', '0348313', '4455', '2234'];
  
    // var index = Math.floor(Math.random() * (7 - 1) + 1);
    return collection[index];
  }

  var generatePosition = function(index) {
    var collection = ['credit analytic', 'debit analytic', 'operations analytic', 'cash stat analytic', 'accounts analytic', 'cash stat analytic', 'credit analytic'];
    return collection[index];
  }

  var generateEmail = function(index) {
    var collection = ['awd@awd.com', 'gfaef.awd@daw.awd', 'lsv@awd.awd', 'afkf.awdb@ac.com', 'daffaa.adca@da.com', 'awddv@aawd.adaw', 'awddA@dafa.com'];
    return collection[index];
  }
  var ids = db.Employees.distinct('_id', {}, {});

    var getEmpId = function(index) {
        return ids[index];
    }

    var getRandomEmpID = function() {
        var index = Math.floor(Math.random() * (5 - 1) + 1);
        return ids[index];
    }
  


  for(i = 0; i < 5; i++) {
    db.Employees.insert({
      FName  : generateFname(i),
      LName  : generateLname(i),
      ADName  : generateAdName(i),
      MailingAddress  : generateMailingAddress(),
      MobPhone  : generateMobPH(i),
      Email : generateEmail(i),
      Position  : generatePosition(i),
      Department  : generateDepartments(i)
    })
  }

 for (i = 0; i < 5; i++) {
     var id = getEmpId(i)
     var randomID = getRandomEmpID()
    db.Employees.find({_id : id}).forEach(function(document) {
        db.Employees.update({ _id : document._id},{
            $set: { Manager : randomID}
        })
      })
 }  

db.Clients.insert({})


 var generateFnameClient = function() {
    var collection = ['Mihail', 'Ivan', 'Serioja', 'Nikola', 'Vladimir', 'Anastasija', 'Ekaterina'];
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index]
  }

  var generateLnameClient = function() {
    var collection = ['Petrov', 'Ivanov', 'Jozik', 'Toskov', 'Putin', 'Kozareva', 'Velika'];
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index];
  }

  var generateAdNameClient = function() {
    var collection = ['', 'Ivacov', 'Jozikol', 'Toskovew', 'PN', 'Kozarev', 'Velik'];
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index];
  }
  var generateMailingAddressClient = function() {
    var collection = ['Plovdiv', 'Odesa', 'Kyiv', 'Sofia', 'Bolgrad', 'Montana', 'Undefined?'];
  
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index];
  }

  var generateMobPHClient = function() {
    var collection = ['04449393924', '0444939393', '0992823838', '0893723927', '0348313', '4455', '2234'];
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index];
  }
  var generateEmailClient = function() {
    var collection = ['awd@awd.com', 'gfaef.awd@daw.awd', 'lsv@awd.awd', 'afkf.awdb@ac.com', 'daffaa.adca@da.com', 'awddv@aawd.adaw', 'awddA@dafa.com'];
        var index = Math.floor(Math.random() * (7 - 1) + 1);
    return collection[index];
  }

  for(i = 0; i < 5; i++) {
    db.Clients.insert({
      FName  : generateFnameClient(),
      LName  : generateLnameClient(),
      ADName  : generateAdNameClient(),
      MailingAddress  : generateMailingAddressClient(),
      MobPhone  : generateMobPHClient(),
      Email : generateEmailClient()
    })
  }

  var generateAccountName = function() {
    var collection = ['Salary', 'Uni', 'Another', 'Strip', 'Home', 'Eat', 'WTF', 'All'];
    var index = Math.floor(Math.random() * (8 - 1) + 1);
    return collection[index];
  }

  var generateIBAN = function(index) {
    var collection = ['AWDAW123', 'ALKMV2525141', 'VLV:OAEKF2312', 'F{OEK:OSAEG24', 'FA:OJ#44114', 'FAE:jlI1421'];
    return collection[index];
  }
  
  var generateAmount = function() {
      var collection = [23,251,35,35,235,234,532,234,234,4353252,23525,2345236,324236262632,234234,12,123215];
      var index = Math.floor(Math.random() * (16 - 1) + 1);
      return collection[index];
  }

  var generateCurrency = function() {
    var collection = ['BGN', 'EUR', 'USD', 'UAH', 'MD', 'AWD'];
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index];
  }
  var idsCl = db.Clients.distinct('_id', {}, {});
   var getClId = function(index) {
        return idsCl[index];
    }

    var getRandomClID = function() {
        var index = Math.floor(Math.random() * (7 - 1) + 1);
        return idsCl[index];
    }
  
  for (i = 0; i < 6; i++) {
    var id = getClId(i)
   db.Clients.find({_id : id}).forEach(function(document) {
       db.Clients.update({ _id : document._id},{
           $set: { Accounts : [
               {
                   name : generateAccountName(),
                   IBAN : generateIBAN(i),
                   Amount : generateAmount(),
                   Currency : generateCurrency()
               }
           ]}
       })
     })
}  
//Part 1
 //1
 var departments = db.Departments.distinct('name', {}, {});

var getDepartments = function() {
    return departments;
}
//2 
var generateMonthlyFee = function() {
    var collection = [300,1000, 10000];
    var index = Math.floor(Math.random() * (6 - 1) + 1);
    return collection[index];
  }
var generateSalary = function() {
  var collection = [1000,1100,1200,1300.1400,1500,1600,1700,1800,1900,2000]
  var index = Math.floor(Math.random() * (6 - 1) + 1);
  return collection[index];
}

for (i = 0; i < 5; i++) {
    var id = getEmpId(i)
   db.Employees.find({_id : id}).forEach(function(document) {
       db.Employees.update({ _id : document._id},{
           $set: { MonthlyFee : generateMonthlyFee(),
                    Salary : generateSalary() }
       })
     })
} 

var getMFS = function() {
  return db.Employees.find({}, {_id : 0, FName : "$FName" , LName : "$LName", Salary : "$Salary", MonthlyFee : "$MonthlyFee"}).pretty()
}



//3

for (i = 0; i < 5; i++) {
  var id = getEmpId(i)
 db.Employees.find({_id : id}).forEach(function(document) {
     db.Employees.update({ _id : document._id},{
         $set: { Email :  (document.FName + "." + document.LName + "@bankoftomarow.bg" ).toLowerCase()}
     })
   })
} 

var getNewEmail = function() {
  return db.Employees.find({}, {_id : 0, FName : "$FName" , LName : "$LName", Email : "$Email"}).pretty()
}

//4

var generateDates = function(index) {
  var collection = [new Date("2013-05-18T16:00:00Z"),new Date("2017-05-18T16:00:00Z"),new Date("2019-05-18T16:00:00Z"),new Date("2002-05-18T16:00:00Z"),new Date("2001-05-18T16:00:00Z")]
  return collection[index]
}

for (i = 0; i < 5; i++) {
  var id = getEmpId(i)
 db.Employees.find({_id : id}).forEach(function(document) {
     db.Employees.update({ _id : document._id},{
         $set: { WorkBegDate : generateDates(i) }
     })
   })
} 

var currDateMinusFY = function() {
  return new Date((new Date().getFullYear() - 5)  + "-" + new Date().getMonth() + "-" + new Date().getDay())
}

var getGenEmp = function() {
 return db.Employees.find({"WorkBegDate":{$gte:ISODate("2001-05-18T16:00:00Z"),$lte:currDateMinusFY()}}).pretty();
}

//5 
var getEmplByFName = function() {
  return db.Employees.find({FName : /S/i})
}

//6
var generateNationalities = function() {
  var collection = ["BG","UK", "UA", "RU", "USA"]
  var index = Math.floor(Math.random() * (5 - 1) + 1);
  return collection[index]
}

for (i = 0; i < 5; i++) {
  var id = getEmpId(i)
 db.Employees.find({_id : id}).forEach(function(document) {
     db.Employees.update({ _id : document._id},{
         $set: { Nationality : generateNationalities() }
     })
   })
} 

var getForeignEmp = function() {
  return db.Employees.find({"Nationality": {$ne: "BG"}});
}
//7
var getEmplByFNameOrLNameOrAdName = function() {
  return db.Employees.find({FName : /I/i , LName : /I/i, ADName : /I/i})
}

//Part 2
//1
var depIds = db.Departments.distinct('_id', {}, {});

var generateRandomDepId = function() {
  var index = Math.floor(Math.random() * (5 - 1) + 1);
  return depIds[index]
}

for (i = 0; i < 5; i++) {
  var id = getRandomEmpID()
 db.Employees.find({_id : id}).forEach(function(document) {
     db.Employees.update({ _id : document._id},{
         $set: { Department : [ generateDepartments(i), generateRandomDepId()] }
     })
   })
} 
//2

var currDateMinusTM = function() {
  return new Date((new Date().getFullYear())  + "-" + (new Date().getMonth() - 2) + "-" + new Date().getDay())
}

// I do not have an employee with such experience,  so I update the second 
var specId = getEmpId(1)
 db.Employees.find({_id : id}).forEach(function(document) {
     db.Employees.update({ _id : document._id},{
         $set: { WorkBegDate : new Date() }
     })
   })
   var getEmplByDateAndCountOfDepTwoMore = function() {
    return db.Employees.find({"WorkBegDate":{$gt:currDateMinusTM()}, "Department" : {$type : "array"}});

   }
//3
   var getEmplByCountOfDepOne = function() {
     return db.Employees.find({ "Department" : {$not : {$type : "array"}} });

   }
//Part 3
//1 

var generateStatusEmpl = function(index) {
  var collection = ["fired","motherM", "vacation/sick", "work"]
  // var index = Math.floor(Math.random() * (4 - 1) + 1);
  return collection[index]
}

// set status to first 3 Emps
for (i = 0; i < 3; i++) {
  var id = getEmpId(i)
 db.Employees.find({_id : id}).forEach(function(document) {
     db.Employees.update({ _id : document._id},{
      $set: { Status : generateStatusEmpl(i)}
     })
   })
} 

var getEmplFiredEmpl = function() {
  return db.Employees.find({ "Status" : "fired"} );
}
//2
var getEmplMotherMEmpl = function() {
  return db.Employees.find({ "Status" : "motherM"} );
}
//3
var getEmplMotherMEmpl = function() {
  return db.Employees.find({ "Status" : "vacation/sick"} );
}
//4
var getEmpWithHSalary = function() {
  return db.Employees.find({"Salary":{$gte:2000,$lte:3000}}).pretty();
 }
//5
var getEmpWithFixSalary = function() {
  return db.Employees.find({$or: [{Salary : 2500},{Salary : 3000},{Salary : 3500},{Salary : 4000}  ]})
 }

 //6
 var getEmplWithoutManager = function() {
  return db.Employees.find({ "Manager" : {$type : 6}});
 }
//7
 var getGenEmpWithSalary = function() {
  return db.Employees.find({$and: [{Salary : {$gte : 5000}},{"WorkBegDate":{$gte:ISODate("2001-05-18T16:00:00Z"),$lte:currDateMinusFY()}}]}).sort({FName : -1})
 }
 //8
 var getEmplWithHSalaryByDep = function() {
   var collection = []
   var departments = db.Departments.distinct('name', {}, {});
   departments.forEach(function(element) {
     collection.push({element : db.Employees.find({Department: element}).sort({Salary: -1}).limit(5)})
   })
   return collection
 }
db.Employees.aggregate([
  { $match: {} },
  { $group: { _id : "_id", MonthlyFee: "$MonthlyFee", FName: "$FName", LName : "$LName", Salary : "$Salary" } },
  { $sort: {  } }
])
