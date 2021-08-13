const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let d = expr.match(/(.{1,10})/g);
    // console.log(d);
    return d.reduce(function(acc, val) {
        if (val === '**********') {
            char = ' ';
        } else {
            val = val.slice(val.indexOf('1')).match(/(.{1,2})/g);
            char = MORSE_TABLE[val.reduce(function(acc, i) {
                i === '10' ? val = '.' : val = '-';
                return acc + val;
            }, '')]
        }
        return acc + char;
    }, '');
}

module.exports = {
    decode
}