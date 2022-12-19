export class Channel {
  slice(): any {
    throw new Error('Method not implemented.');
  }
    id: string;;
    theme: string;
    description: string;
    users: string[];
    creator: string;
    closedArea: boolean;

    constructor(obj?: any) {
        this.id = obj ? obj.id : '';
        this.theme = obj ? obj.theme : '';
        this.users = obj ? obj.users : '';
        this.creator = obj ? obj.creator : '';
        this.closedArea = obj ? obj.closedArea : false;
        this.description = obj ? obj.description : '';
    }


    public toJSON() {
        return {
            id : this.id,
            theme: this.theme,
            users: this.users,
            creator: this.creator,
            closedArea : this.closedArea,
            description : this.description
        }
    } 
}