const distanceFromHqInBlocks = function (street) {
  return Math.abs(street - 42);
};

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}
