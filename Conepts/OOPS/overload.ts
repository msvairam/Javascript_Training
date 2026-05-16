export interface User {
    id: number,
    name: string;
}

class UserService {
    getUser(id: number): User;
    getUser(id: string): User;


     getUser(value: any): User {
        if (typeof value === "number") {
        return { id: value, name: "By ID" };
        }
        return { id: 1, name: "By Email" };
    }
}

const user = new UserService();

user.getUser('fd');
user.getUser(45);
