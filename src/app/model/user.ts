export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    constructor(id: number = 0, userName: string = "", password: string = "",
        firstName: string = "", lastName: string = "", phone: string = "",
        email: string = "", reviewer: boolean = false, admin: boolean = false) {
            this.id = id;
            this.username = userName;
            this.password = password;
            this.firstName = firstName;
            this.lastName = lastName;
            this.phone = phone;
            this.email = email;
            this.isReviewer = reviewer;
            this.isAdmin = admin;
        }
}
