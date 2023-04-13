import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  imgSrcarr = [
    'assets/Img/1.jpg',
    'assets/Img/2.jpg',
    'assets/Img/3.jpg',
    'assets/Img/4.jpg',
  ];
  imgSrc = this.imgSrcarr[0];
  i: number = 0;
  interval: any = '';
  next() {
    if (this.i < this.imgSrcarr.length - 1) {
      this.i++;
    } else {
      this.i = 0;
    }
    this.imgSrc = this.imgSrcarr[this.i];
  }

  prev() {
    if (this.i > 0) {
      this.i--;
    } else {
      this.i = this.imgSrcarr.length - 1;
    }
    this.imgSrc = this.imgSrcarr[this.i];
  }
  slide() {
    this.interval = setInterval(() => {
      this.next();
      if (this.i == this.imgSrcarr.length - 1) {
        this.i = -1;
      }
    }, 2000);
  }
  stop() {
    clearInterval(this.interval);
  }
}
