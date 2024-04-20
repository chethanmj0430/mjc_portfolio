import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

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
  experience1: boolean = false;
  experience2: boolean = false;
  project1: boolean = false;
  project2: boolean = false;
  project3: boolean = false;
  project4: boolean = false;
  modalVisible: boolean = false;
  showModal: boolean = false;
  pdfSrc: string = './assets/Icons/ChethanMJ.pdf';

  constructor(private http: HttpClient) {}
 
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

  toggleVisibility(section: number): void {
    if (section === 1) {
      this.experience1 = !this.experience1;
      this.experience2 = false;
    } else if (section === 2) {
      this.experience2 = !this.experience2;
      this.experience1 = false;
    } else if (section === 3) {
      this.project1 = !this.project1;
      this.project2 = false;
      this.project3 = false;
      this.project4 = false;
    } else if (section === 4) {
      this.project2 = !this.project1;
      this.project1 = false;
      this.project3 = false;
      this.project4 = false;
    } else if (section === 5) {
      this.project3 = !this.project1;
      this.project2 = false;
      this.project1 = false;
      this.project4 = false;
    } else if (section === 6) {
      this.project4 = !this.project1;
      this.project2 = false;
      this.project3 = false;
      this.project1 = false;
    }
  }

  downloadPdf() {
    const link = document.createElement('a');
    link.href = this.pdfSrc;
    link.download = 'ChethanMJ.pdf'; 
    link.click();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  closeModal(): void {
    this.showModal = false;
  }

}
