
export function getOjectValue<ObjectType>(object: ObjectType, path: string){
    const keys = path.split('.');
    let result = object;
    var finalResult;
    for (const key of keys) {
        finalResult = result[key as keyof ObjectType];
    }
    return finalResult;
  }

  export function isEmpty(obj: any) {
    // null and undefined are "empty"
    if (obj === null) return true;

    if (obj === undefined) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
            return false;
    }

    return JSON.stringify(obj) === JSON.stringify({});
}