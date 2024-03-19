// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature.
//    Print the Object that’s returned to make sure all the information was stored correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, extras.reduce(function (acc, extra) { return (__assign(__assign({}, acc), extra)); }, {}));
    return car;
}
// Example usage:
var myCar = createCar("Toyota", "camry", { color: "blue" }, { year: 2023 });
// Print the result
console.log(myCar);
