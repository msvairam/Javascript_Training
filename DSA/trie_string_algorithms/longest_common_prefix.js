const Trie = require('./trie.js');

function longestCommonPrefix(words) {
    if(!words.length) return '';

    const trie = new Trie.Trie();
    for(let word of words) {
        trie.insert(word);
    }

    let prefix = '';
    let node = trie.root;

    while(true) {
        let keys = Object.keys(node.children);

        if(keys.length !== 1 || node.isEnd) break;

        prefix += keys[0];
        node = node.children[keys[0]];
    }
    
    return prefix;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));

