export class Message {
    
    id: string;;
    firstName: string;
    lastName: string[];
    email: string;
    users: string[];
 

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.users = obj ? obj.users : '';
    }


    public toJSON() {
        return {
            id : this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            users : this.users,   
        }
    } 
}