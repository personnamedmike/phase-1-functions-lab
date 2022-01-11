const distanceFromHqInBlocks = function (street) {
  return Math.abs(street - 42);
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination){
  return Math.abs(start-destination) * 264;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400){
    return 0
  }
  else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
    return 2.56
  } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
    return 25 
  } else if (distanceTravelledInFeet(start, destination) > 2500) {
    return 'cannot travel that far'
  }
  
}