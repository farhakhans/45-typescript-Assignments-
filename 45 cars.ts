// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs,
//   such as a color or an optional feature.
//    Print the Object that’s returned to make sure all the information was stored correctly.

interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; // Allow arbitrary additional properties
  }
  
  function createCar(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): Car {
    const car: Car = {
      manufacturer,
      modelName,
      ...extras.reduce((acc, extra) => ({ ...acc, ...extra }), {})
    };
    return car;
  }
  
  // Example usage:
  const myCar = createCar("Toyota", "camry", { color: "blue" }, { year: 2023 });
  
  // Print the result
  console.log(myCar);
  
  
