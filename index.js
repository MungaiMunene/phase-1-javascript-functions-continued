// saturdayFun
function saturdayFun(target = "roller-skate") {
    return `This Saturday, I want to ${target}!`
}
saturdayFun()

// mondayWork
function mondayWork(target = "go to the office") {
    return `This Monday, I will ${target}.`
}
mondayWork()

//wrapAdjective 
function wrapAdjective(special ='*') {
    return function(adjective) {
        return `You are ${special}${adjective}${special}!`
    }
}