const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var count = 0
var len = ingredients.length
while(count < len) {
  console.log(ingredients[count])
  count++
}
// Write a for loop that prints out the contents of ingredients:
for(var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
len = len - 1
while(len >= 0) {
  console.log(ingredients[len])
  len = len - 1
}