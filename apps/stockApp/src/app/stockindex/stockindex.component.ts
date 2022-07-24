import { Component, OnInit } from '@angular/core';
import { StockArray } from './stockArray';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-stockindex',
  templateUrl: './stockindex.component.html',
  styleUrls: ['./stockindex.component.css']
})

export class StockindexComponent implements OnInit {
    
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  stockData:any;
  stockInfo:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  getData(){
    return this.http.get('http://localhost:3000/stock').subscribe(data => {
      this.stockData = data;
  })
  }

  search(stockName:any){
    
    return this.http.post('http://localhost:3000/stock', stockName.value).subscribe(data => {
      this.stockInfo = data;
      console.log(this.stockInfo);
       data = stockName.value;
  })
  }

}
