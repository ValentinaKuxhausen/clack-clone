export class User {
    uid: string;
    email: string;
    channels: string[];
    directMessages: string[];
    userId: string;
    displayName: string;

    constructor(obj?: any) {
        this.uid = obj ? obj.city : '';
        this.email = obj ? obj.email : '';
        this.channels = obj ? obj.channels : '';
        this.directMessages = obj ? obj.directMessages : '';
        this.userId = obj ? obj.userId : '';
        this.displayName = obj ? obj.displayName : '';
    }

    public toJSON() {
        return {      
            // uid: this.uid,
            email: this.email,
            channels : this.channels,
            directMessages: this.directMessages,
            userId: this.userId,
            displayName: this.displayName,
        };
    }



}