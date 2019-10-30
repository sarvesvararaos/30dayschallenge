const textarea = document.getElementById('text-area');
const charcount = document.getElementById('character-count');
const wordcount = document.getElementById('word-count');
const whitespacecount = document.getElementById('whitespace-count');
const linecount = document.getElementById('line-count');

const charactercount = (value) => {
    charcount.innerHTML = '';
    charcount.innerHTML = value.length;
}

const wordCount = (value) => {
    let line = lineCount(value);
    let wcon = value.split(' ')
                .filter(function(n) { return n != '' })
                .length;
    wordcount.innerHTML = '';
    if(line === 1){
        wordcount.innerHTML = wcon;
    }else{
        wordcount.innerHTML = wcon + 1;
    }         
}

const whitespaceCount = (value) => {
    let line = lineCount(value);
    whitespacecount.innerHTML = '';
    whitespacecount.innerHTML = value.split(" ").length - 1;
}

const lineCount = (value) => {
    if(value === ''){
        linecount.innerHTML = 0;
    }
    const lines = (value.match(/\n/g) || '').length + 1;
    linecount.innerHTML = '';
    linecount.innerHTML = lines;
    return lines;
}

textarea.addEventListener('input', () => {
    charactercount(textarea.value);
    wordCount(textarea.value);
    whitespaceCount(textarea.value);
    lineCount(textarea.value);
})