import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isApproved=false;
  numbers=[
'One',
'Two',
'Three',
'Four',
'Five',
'Six',
'Seven',
'Eight',
'Nine',
'Ten'
  ];
  luckyNumber=0;
 approve(status: boolean){
  this.isApproved=status;
 }
}
