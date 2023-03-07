import { Component } from '@angular/core';

import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
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
    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
      
    }
   
}