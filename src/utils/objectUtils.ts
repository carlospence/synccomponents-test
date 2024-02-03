
export function getOjectValue<ObjectType>(object: ObjectType, path: string){
    const keys = path.split('.');
    let result = object;
    var finalResult;
    for (const key of keys) {
        finalResult = result[key as keyof ObjectType];
    }
    return finalResult;
  }