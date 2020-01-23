function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
} 

function mondayWork(activity="go to the office") {
  return`This Monday, I will ${activity}.`
}

function wrapAdjective(flair="*") {
 return function(adjective='special') {
    return `You are ${flair}${adjective}${flair}!`
  }
}

const  Calculator = {
  
  add(a,b) {
    return a + b
  }
  subtract(a,b) {
  //   return a - b
  // }
  multiply(a,b) {
  //   return a * b 
  // }
  divide(a,b) {
  //   return a / b
  // }
}