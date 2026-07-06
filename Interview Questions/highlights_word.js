function highlight(str, words) {
    const uniqueWords = new Set(words);

    return str.split(' ').map(word => {
        let output = '';
        if (uniqueWords.has(word)) {
            output = `<strong>${word}</strong>`;
        }

        for(let i =0; i < word.length; i++) {
            let prefix = word.slice(0, i + 1);
            let surfix = word.slice(i + 1);

            if(uniqueWords.has(prefix) && uniqueWords.has(surfix)) {
                output = `<strong>${prefix}${surfix}</strong>`; 
            }

            if(uniqueWords.has(prefix) && !uniqueWords.has(surfix)) {
                output = `<strong>${prefix}</strong>`;
            }

            if(!uniqueWords.has(prefix) && uniqueWords.has(surfix)) {
                output = `${prefix}<strong>${surfix}</strong>`;
            }

        }

        return output !== '' ? output : word;

    }).join(' ');
}


const str = "Ultimate JavaScript / FrontEnd Guide";
const words = ['Front', 'End', 'JavaScript'];

console.log(highlight(str, words));