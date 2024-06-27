function caesarCipher(str, shift) {

    while(shift > 26) {
        shift-= 26;
    }

    while(shift < 0) {
        shift+= 26;
    }

    const shiftedChars = [];

    for(let i = 0; i < str.length; i++) {

        let code = str.charCodeAt(i);
        const shiftedCode = str[i].match(/[A-Za-z]/)? shiftCode(code, shift): code;
        
        shiftedChars.push(String.fromCharCode(shiftedCode));
    }

    const cipher = shiftedChars.join("");
    return cipher;
}

function shiftCode(code, shift) {
    let shiftedCode;
    if(code < 91) {
        shiftedCode = code + shift < 91? code + shift: code + shift - 26;
    }
    else {
        shiftedCode = code + shift < 123? code + shift: code + shift - 26;
    }
    return shiftedCode;
}

export {
    caesarCipher
}