export class Channel {
 
    id: string;;
    theme: string;
    discription: string;
    usersData: string[];
    creatorId: string;
    closedArea: boolean;

    constructor(obj?: any) {
        this.theme = obj ? obj.theme : '';
        this.usersData = obj ? obj.usersData : '';
        this.creatorId = obj ? obj.creatorId : '';
        this.closedArea = obj ? obj.closedArea : false;  
        this.discription = obj ? obj.discription : '';
      }


    public toJSON() {
        return {           
            theme: this.theme,
            usersData: this.usersData,
            creatorId: this.creatorId,
            closedArea : this.closedArea,
            discription : this.discription
        }
    } 
}