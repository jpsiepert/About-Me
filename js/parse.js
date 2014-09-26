Parse.initialize("6lPbgVuNOVtGXQUdUuZboILIAbni6M412fGnd36F", "lGPoxUohyuXzPbtDebFzxLER2rbbuf36WIM96Qbl");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  console.log("yay! it worked");
});