var friendsData = require("../data/friends.js")

function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function deltaCheck(array, userIndex, indexUp, indexDown){
    var deltaUp;
    var deltaDown; 
        if (array[indexUp] === undefined){ // checks if the newUser is the last entry
            return array[indexDown];

        } else if (array[indexDown] === undefined){ // checks if the newUser is the first entry
            return array[indexUp];

        } else { 
            deltaDown = parseInt(array[userIndex].score) - parseInt(array[indexDown].score);
            console.log("Delta Down: " + deltaDown)
    
            deltaUp = parseInt(array[indexUp].score) - parseInt(array[userIndex].score);
            console.log("Delta Up: " + deltaUp)

            return deltaCompare(deltaUp, deltaDown, array, indexUp, indexDown)

        }
            
}

function deltaCompare(deltaUp, deltaDown, array, indexUp, indexDown){
    if (deltaUp < deltaDown){
        return array[indexUp]
    } else if (deltaDown < deltaUp){
        return array[indexDown]
    } else if (deltaUp === deltaDown){
        var flip = Math.floor(Math.random()*2)
        if (flip === 0){
            return array[indexUp];
        } else {
            return array[indexDown]
        }
    }
}

//console.log(sortByKey(arr, "score"))

function bestMatch(newUser, array){
    console.log("Sorted array: ")
    console.log(array);
    var userIndex = array.indexOf(newUser)
    var indexUp = userIndex + 1;
    var indexDown = userIndex -1;
    console.log(userIndex)
    console.log(indexUp)
    console.log(indexDown)
    return deltaCheck(array, userIndex, indexUp, indexDown)
    
}

module.exports = function(newUser){
    return bestMatch(newUser, sortByKey(friendsData, "totalScore"))
}

