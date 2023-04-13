import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = "";
  getValue(e:any){
    //console.log(e.target.value);
    this.name = e.target.value;
  }
  chg(){
    this.name = "";

  }
}
