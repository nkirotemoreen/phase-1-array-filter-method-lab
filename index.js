// Code your solution here
//matching characters
function findMatching (driverList, name) {
    return driverList.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }
  
  //matching letters
  function fuzzyMatch(driverList , providedName){
    let lengthOfName = providedName.length
    return driverList.filter(function(driverName){
        return driverName.slice(0,lengthOfName) === providedName;//used slice to return the part with the first index

    });

  }
  function matchName(driverList, name){
    return driverList.filter(function(driverInfo){
        return driverInfo.name.toLowerCase() === name.toLowerCase();

    })

  }


 
  
  /*--function matchName (driverList, name) {
    return driverList.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }
  --*/