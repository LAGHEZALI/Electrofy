import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slide',
  templateUrl: './home-slide.component.html',
  styleUrls: ['./home-slide.component.css']
})
export class HomeSlideComponent implements OnInit {
  slideIndex = 1;

  constructor() {}

    ngOnInit() {
      this.showDivs(this.slideIndex);
    }

    plusDivs(n) {
      this.showDivs(this.slideIndex += n);
    }

    currentDiv(n) {
      this.showDivs(this.slideIndex = n);
    }

    showDivs(n) {
      let i;
      const x = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('demo');
      if (n > x.length) { this.slideIndex = 1; }
      if (n < 1) { this.slideIndex = x.length; }
      for (i = 0; i < x.length; i++) {
        const y = <HTMLElement>x[i];
        y.style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' w3-opacity-off', '');
      }
      const z = <HTMLElement>x[this.slideIndex - 1];
      z.style.display = 'block';
      dots[this.slideIndex - 1].className += ' w3-opacity-off';
    }
}
