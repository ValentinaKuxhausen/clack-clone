export class User {
    uid: string;
    email: string;

    constructor(obj?: any) {
        this.uid = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
    }

    public toJSON() {
        return {      
            uid: this.uid,
            email: this.email
        };
    }
}