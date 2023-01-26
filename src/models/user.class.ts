export class User {
    uid: string;
    email: string;
    channels: string[];
    directMessages: string[];
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    userId: string;

    constructor(obj?: any) {
        this.uid = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
        this.channels = obj ? obj.channels : '';
        this.directMessages = obj ? obj.directMessages : '';
        this.firstName = obj ? obj.firstName : '';
        this.lastName = obj ? obj.lastName : '';
        this.street = obj ? obj.street : '';
        this.city = obj ? obj.city : '';
        this.userId = obj ? obj.userId : '';
    }

    public toJSON() {
        return {      
            uid: this.uid,
            email: this.email,
            channels : this.channels,
            directMessages: this.directMessages,
            firstName: this.firstName,
            lastName: this.lastName,
            street: this.street,
            city: this.city,
            userId: this.userId,
        };
    }



}