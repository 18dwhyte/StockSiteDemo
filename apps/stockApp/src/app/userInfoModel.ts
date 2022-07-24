export class UserInfoModel{

    email: string;

    username: string;

    password:string;

    money: number;

    purchaseHistory: [string,number,number];

    constructor(userEmail:string, userName:string, password:string,money:number,purchaseHistory:[string,number,number]){
        this.email = userEmail;
        this.username = userName;
        this.password = password;
        this.money = money;
        this.purchaseHistory = purchaseHistory;
    }
}