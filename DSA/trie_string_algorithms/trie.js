class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      // create note it doesn't exist
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char]; // move to next node
    }

    node.isEnd = true; // mark end of word
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return node.isEnd;
  }

  startsWith(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) return false;
      node = node.children[char];
    }
    return true;
  }
  autoComplete(prefix) {
    let node = this.root;
    const result = [];

    for(let char of prefix) {
        if(!node.children[char]) return [];

        node = node.children[char];
    }

    this.dfs(node, prefix, result);

    return result;
  }

  dfs(node, current, result) {
    if(node.isEnd) {
        result.push(current);
    }

    for(let char in node.children) {
        this.dfs(node.children[char], current+char, result);
    }
  }

  delete(word) {
    return this.deleteHelper(this.root, word, 0);
  }

  deleteHelper(node, word, index) {
    // Based Part end of word
    if(index === word.length) {
        if(!node.isEnd) return false;
        node.isEnd = false;
        return {
            deleted: true,
            shouldDelete: Object.keys(node.children).length === 0
        };
    }

    const char = word[index];
    const child = node.children[char];

    if(!child) return false;

    // Recursion Part
    const  { deleted, shouldDelete } = this.deleteHelper(child, word, index + 1);

     if (shouldDelete) {
        delete node.children[char];
       return  {
            deleted,
            shouldDelete: Object.keys(node.children).length === 0 && !node.isEnd
        };
    }
    return { deleted, shouldDelete: false };
  }
}
/*
const trie = new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("card");
trie.insert("care");
trie.insert("dog");

console.log(trie.search("cat")); // true  ✅
console.log(trie.search("ca")); // false ❌ not a complete word
console.log(trie.search("dog")); // true  ✅
console.log(trie.search("dot")); // false ❌

console.log("______Prefix_________");
console.log(trie.startsWith("car")); // true  ✅
console.log(trie.startsWith("do")); // true  ✅
console.log(trie.startsWith("bat")); // false ❌

console.log("_____-Auto Completed___");
console.log(trie.autoComplete("car"));
// ["car", "card", "care", "careful"] ✅

console.log(trie.autoComplete("care"));
// ["care", "careful"] ✅
console.log('_________Delete___________');
console.log(trie.delete('cat'));
console.log(trie.root);
*/