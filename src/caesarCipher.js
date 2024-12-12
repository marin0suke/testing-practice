// export function caesarCipher(string, shift) {
//     const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
//     let codedStr = "";

//     string.split("").forEach(char => {
//             if (alphabet.includes(char.toLowerCase())) {
//                 const isUpperCase = char === char.toUpperCase(); // checks if current char is uppercase.
//                 const i = alphabet.indexOf(char.toLowerCase()); // get index of char within alphabet.
//                 const shifted = alphabet[(i + shift + alphabet.length) % alphabet.length]; // shift the char to coded.

//                 codedStr += isUpperCase ? shifted.toUpperCase() : shifted; // add to return value depending on casing.

//             } else {
//                 codedStr += char;
//             }
//     });
    

//     console.log(codedStr);
//     return codedStr;
// }


//single responsibility coded

export function caesarCipher(string, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // this is specific to caesar.
    let codedStr = ""; // string is specific to this prob. might be array/obj in other cases.

    string.split("").forEach(char => {
        if (alphabet.includes(char.toLowerCase())) {
            const shifted = shiftChar(alphabet, shift, char);
            codedStr += preserveCase(char, shifted);
        } else {
            codedStr += char;
        }
    })

    return codedStr;
}

function shiftChar(arr, shift, char) {
    const i = arr.indexOf(char.toLowerCase());
    return arr[(i + shift + arr.length) % arr.length];
}

function preserveCase(char, shiftedChar) {
    return char === char.toUpperCase() 
        ? shiftedChar.toUpperCase() 
        : shiftedChar;
}