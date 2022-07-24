export class StockArray{
    displaySymbol: string;
    stockName: string;
    stockPrice: number;
    stockPercentChange: number;

    constructor(symbol:string, name:string, price:number, percentChange:number){
        this.displaySymbol = symbol;
        this.stockName = name;
        this.stockPrice = price;
        this.stockPercentChange = percentChange;
    }
    
}