export class Channel {
 
    id: string;;
    channelName: string;
    discription: string;
    usersData: string[];
    creatorId: string;
    isClosedArea: boolean;

    constructor(obj?: any) {
        this.channelName = obj ? obj.channelName  : '';
        this.usersData = obj ? obj.usersData : '';
        this.creatorId = obj ? obj.creatorId : '';
        this.isClosedArea = obj ? obj.isClosedArea : false;  
        this.discription = obj ? obj.discription : '';
      }


    public toJSON() {
        return {           
            channelName: this.channelName,
            usersData: this.usersData,
            creatorId: this.creatorId,
            isClosedArea : this.isClosedArea,
            discription : this.discription
        }
    } 
}