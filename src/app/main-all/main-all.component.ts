import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-all',
  templateUrl: './main-all.component.html',
  styleUrl: './main-all.component.scss'
})
export class MainAllComponent {
  @Input() activeTab: string = '';
  slides = [
    { url: './assets/Icons/angular.svg', alt: 'Angular', Style: "width=" },
    { url: './assets/Icons/css-color.svg', alt: 'CSS' },
    { url: './assets/Icons/html-color.svg', alt: 'HTML' },
    { url: './assets/Icons/javascript-color.svg', alt: 'JavaScript' },
    { url: './assets/Icons/typescript-color.svg', alt: 'TypeScript' },
    { url: './assets/Icons/nodejs.svg', alt: 'NodeJs' }
  ];
  slideIndex = 0;
 
  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    setInterval(() => {
      this.slideIndex++;
      if (this.slideIndex === this.slides.length) this.slideIndex = 0;
    }, 5000);
  }

  changeSlide(n: number) {
    this.slideIndex += n;
    if (this.slideIndex < 0) this.slideIndex = this.slides.length - 1;
    else if (this.slideIndex >= this.slides.length) this.slideIndex = 0;
  }
}
