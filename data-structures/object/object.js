/*
    Object in JavaScript
    1. An object is a collection of key-value pairs.
    2. An object is an instance of a class.
    3. An object can be created using an object literal or the Object constructor.    
*/


/*
    JavaScript Object Methods:
    1. Object Creation:
        - Object.create(): Creates a new object with the specified prototype object and properties.
        - Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
    
    2. Property Access:
        - Object.keys(obj): Returns an array of a given object's own enumerable property names.
        - Object.values(obj): Returns an array of a given object's own enumerable property values.
        - Object.entries(obj): Returns an array of a given object's own enumerable property [key, value] pairs.
        - Object.getOwnPropertyNames(obj): Returns an array of all properties (enumerable or not) found directly upon a given object.
        - Object.getOwnPropertyDescriptor(obj, prop): Returns a property descriptor for a named property on an object.
        - Object.getOwnPropertyDescriptors(obj): Returns an object containing all own property descriptors for an object.
        - Object.getOwnPropertySymbols(obj): Returns an array of all symbol properties found directly upon a given object.
        - Object.getPrototypeOf(obj): Returns the prototype of the specified object.
        - Object.setPrototypeOf(obj, prototype): Sets the prototype of a specified object to another object or null.
        - Object.hasOwnProperty(prop): Returns a boolean indicating whether the object has the specified property as its own property.
        
    3. Property Manipulation:
        - Object.defineProperty(obj, prop, descriptor): Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
        - Object.defineProperties(obj, props): Defines new or modifies existing properties directly on an object, and returns the object.
        - Object.preventExtensions(obj): Prevents any extensions of an object.
        - Object.seal(obj): Prevents adding or deleting properties from an object, and sets all existing properties as non-configurable.
        - Object.freeze(obj): Freezes an object, and prevents new properties from being added to it, prevents existing properties from being removed, and prevents existing properties, or their enumerability, configurability, or writability, from being changed.

    4. Object Iteration:
        - Object.keys(obj).forEach(() => ...): Returns an array of a given object's own enumerable property names.
        - Object.values(obj).forEach(() => ...): Returns an array of a given object's own enumerable property values.
        - Object.entries(obj).forEach(() => ...): Returns an array of a given object's own enumerable property [key, value] pairs.
    
    5. Object Comparison:
        - Object.is(obj1, obj2): Determines whether two values are the same value.
        - Object.isExtensible(obj): Determines if an object is extensible.
        - Object.isSealed(obj): Determines if an object is sealed.
        - Object.isFrozen(obj): Determines if an object is frozen.
    6. Object String Conversion:
        - Object.toString(): Returns a string representing the object.

*/