// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2);
};

const returnLastTwoDrivers = function(array) {
  return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(times) {
  return function(value) {
    return times * value;
  };
};

let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let fetchSpecifiedDrivers = function(arrayOfDrivers, driverFunction) {
  return driverFunction(arrayOfDrivers);
};
