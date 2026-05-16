export interface IEmployee {
    name: string;
 role(): void
}

export class DeveloperEmployee implements IEmployee {
    name: string = 'vairamuthu';
    role() {
        return 'Developer';
    }
}

const dev = new DeveloperEmployee();
console.log(dev.role());