export class Channels {
    id: string;;
    theme: string;
    users: string[];
    creator: string;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.theme = obj ? obj.theme : '';
        this.users = obj ? obj.users : '';
        this.creator = obj ? obj.creator : '';
    }


    public toJSON() {
        return {
            id : this.id,
            theme: this.theme,
            users: this.users,
            creator: this.creator
        }
    } 
}