import { Component} from '@angular/core';

@Component({
  selector: 'app-car-loan-component',
  templateUrl: './car-loan-component.component.html',
  styleUrls: ['./car-loan-component.component.less']
})
export class CarLoanComponentComponent  {

  result:number;
  P:number;
  T:number;
  R:number;
  Intrest:number;
  Total:number;
  CarLoan(Principal:string,Tenure:string,Roi:string){
    
    this.P=parseFloat(Principal) ;
    this.T=parseFloat(Tenure);
    this.R=parseFloat(Roi);
    var rate1 = (parseFloat(Roi)/100)/12;
    var rate = 1 + rate1;
    var interestRate = Math.pow(rate,this.T);
    var E1 = this.P*rate1*interestRate;
    var E2 = interestRate-1;
    var EMI = (E1/E2);      
    var total_payable=EMI*this.T;
    this.Total= Math.round((total_payable) * 100) / 100;
    this.result=Math.round((total_payable-this.P) * 100) / 100;
    
     
  
  
  
  }

}
