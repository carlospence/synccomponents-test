type nonEmptyString = never; // Cannot be implicitly cast to
export function isNonEmptyString(str: string): str is nonEmptyString {
    var isNull = !str;
    return !isNull && str.length > 0; // Or any other logic, removing whitespace, etc.
}