var friendsFavFood = "Burger";
var myFavFood = "Pizza";

function getMyFavFood() {
    if (!myFavFood) {
        var myFavFood = friendsFavFood;
    }
    return myFavFood;
}

console.log(`I can eat ${getMyFavFood()} all day long`);
