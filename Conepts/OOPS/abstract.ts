export interface User {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'editor' | 'viewer';
}

export abstract class BaseApiService<T> {

    protected readonly apiUrl = 'https://example.com';

    protected getUrl(): string {
        return `${this.apiUrl}/${this.endpoint}`;
    }

    constructor(protected endpoint: string) {

    }

    abstract fetchData(): Array<T>;
}

export class UserService extends BaseApiService<User> {
   
    public fetchData(): Array<User> {
        console.log(this.getUrl());
        return [];
    }
    constructor() {
        super('user');
    }
}

const user =  new UserService();
console.log(user.fetchData());
