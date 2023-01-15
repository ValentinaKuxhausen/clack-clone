export class Channel {
 
    id: string;;
    theme: string;
    discription: string;
    usersData: string[];
    creatorId: string;
    isClosedArea: boolean;

    constructor(obj?: any) {
        this.theme = obj ? obj.theme : '';
        this.usersData = obj ? obj.usersData : '';
        this.creatorId = obj ? obj.creatorId : '';
        this.isClosedArea = obj ? obj.isClosedArea : false;  
        this.discription = obj ? obj.discription : '';
      }


    public toJSON() {
        return {           
            theme: this.theme,
            usersData: this.usersData,
            creatorId: this.creatorId,
            isClosedArea : this.isClosedArea,
            discription : this.discription
        }
    } 
}