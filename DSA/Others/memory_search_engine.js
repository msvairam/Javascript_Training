class InMemorySearch {
    constructor() {
        this.entities = new Map();
    }

    addNameSpace(name) {
        this.entities.set(name, []);
    }

    addDocuments(name, ...documents) {
        const existing = this.entities.get(name);

        if (!existing) {
            this.entities.set(name, [...documents]);
        } else {
            this.entities.set(name, [...existing, ...documents]);
        }
        return this.entities;
    }

    search(namespace, filterFn, sortParams) {
        const documents = this.entities.get(namespace);

        const filterDocuments = documents.filter(filterFn);

        if(sortParams && sortParams?.key && sortParams?.asc != undefined) {
            const key = sortParams.key;
           
            filterDocuments.sort((a, b) => {
                let comparison = 0;
                if(typeof a[key] === 'string') {
                    comparison = a[key].localeCompare(b[key]);
                } else {
                    comparison = a[key] - b[key];
                }

                return sortParams?.asc ? comparison : comparison * -1;
            });
        }
        return filterDocuments;
    }
}

const searchEngine = new InMemorySearch();
searchEngine.addDocuments('Movies', 
                    {name: 'Avenger', rating: 8.5, year: 2017}, 
                    {name: 'Black Adam', rating: 8.7, year: 2022}, 
                    {name: 'Jhon Wick 4', rating: 8.2, year: 2023}, 
                    {name: 'Black Panther', rating: 9.0, year: 2022}
                   );
console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {key: 'rating', asc: false}));
console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {key: 'name', asc: false}));
