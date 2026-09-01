// A super class should be replacable with objects of its subclassed without affecting the correctness of the program
// A <- B. A is Super class, B is sub class
// A sub class can stand in for its parent class. 

class User {
    constructor(name) {
        this.name = name;
    }

    login() {
        console.log("User Logged In...");
    }

    accessAdminPanel() { // old, should remove for consistency
        console.log('User accesses admin panel with admin privilleges');
    }

    performRoleSpecificAction() { // new
        
    }
}

class Admin extends User {
    accessAdminPanel() { // old
        console.log("User accesses Admin Panel with admin Privilleges");
    }

    performRoleSpecificAction() { // new

    }
}

class Member extends User {

}

function processUser(user) {
    user.login();
    user.accessAdminPanel(); // It is not approprivate for the member class, when member class fail.
    // any subclass User can be replace used in place of User without causing errors
    // revised design the performRoleSpecificAction method is defined in the User class and overridden
    // in each subclass to provide role-specific functionality.
    // ensuring that subclasses of User are interchangeable without issues
    // Code is more maintainable and scalable.
}

const admin = new Admin('Alice');
const member = new Member('Bob');

processUser(admin);
processUser(member);

