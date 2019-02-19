// Code your solution in this file!
const returnFirstTwoDrivers = function(list){
  return [list[0], list[1]]
}

const returnLastTwoDrivers = function(list){
  return [list[list.length-2], list[list.length-1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(multiplier){
  return function(num){return num*multiplier}
}

let fareDoubler = function(fare){
  return createFareMultiplier(2)(fare)
}

let fareTripler = function(fare){
  return createFareMultiplier(3)(fare)
}

let fetchSpecifiedDrivers = function(list, fn){
  return fn(list)
}
