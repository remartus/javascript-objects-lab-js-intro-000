// define my object
var recipes = new Object()

//not modifying original, using clone
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, {key: value})
}
