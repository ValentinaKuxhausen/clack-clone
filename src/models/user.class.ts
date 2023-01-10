export class User {
    uid: string;
    email: string;
    channels: string[];
    directMessages: string[];
    fullName: string[];

    constructor(obj?: any) {
        this.uid = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
        this.channels = obj ? obj.channels : '';
        this.directMessages = obj ? obj.directMessages : '';
        this.fullName = obj ? obj.fullName : '';
    }

    public toJSON() {
        return {      
            uid: this.uid,
            email: this.email,
            channels : this.channels,
            directMessages: this.directMessages,
            fullName: this.fullName
        };
    }
}