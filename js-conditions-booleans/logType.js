

// const data = ['john', 'mike']
const data = null


switch (typeof data) {
    case "undefined":
        console.log("undefined!");
        break;
    case "null":
        console.log("null!");
        break;
    case "number":
        console.log('number!');
        break;
    case "NaN":
        console.log('not a number!');
        break;
    case "string":
        console.log("string!");
        break;
    case "boolean":
        console.log("boolean!");
        break;
    case "bigInt":
        console.log("bigint!");
        break;
    case "function":
        console.log("function!");
        break;
    case "object":
        console.log("object!");
        break;
    case "array":
        console.log("array!");
        break;
    default:
        console.log('I hav no idea!')



}
console.log('Code has run')