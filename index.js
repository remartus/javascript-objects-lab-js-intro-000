// define my object
var recipes = new Object()

//not modifying original, using clone
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({}, {key: value})
}

// we get to destroy
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

//no more destruction
function deleteFromObjectByKey(object, key){
  
}
