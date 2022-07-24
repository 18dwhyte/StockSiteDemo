
module.exports = class userInfoModel{
    email
    username;
    password;
    money;
    purchaseHistory = [this.stockName,this.stockAmount,this.stockPrice];

    constructor(email,user,password,money,purchaseHistory){
        this.email = email;
        this.username = user;
        this.password = password;
        this.money = money;
        this.purchaseHistory = purchaseHistory;
    }

    toJSON(){
        return{
            email: this.email,
            username: this.username,
            password: this.password,
            money: this.money,
            purchaseHistory: [
                this.stockName,
                this.stockAmount,
                this.stockPrice
            ]
        }
    }
}

