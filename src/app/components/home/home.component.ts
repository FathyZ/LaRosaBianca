import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
     @ViewChild('carousel', { static: true }) carouselRef!: ElementRef;
      isDragging = false;
  startX = 0;
  scrollLeft = 0;
  currentSlide = 0;
  slides = [
    {
      title: 'Fresh Flowers Delivered Daily',
      description: 'Experience the joy of fresh blooms at your doorstep.',
      image: 'assets/hero1.jpg'
    },
    {
      title: 'Celebrate Every Moment',
      description: 'Flowers that speak your heart for every occasion.',
      image: 'assets/hero2.jpg'
    },
    {
      title: 'Nature’s Touch, Artistic Design',
      description: 'Handcrafted floral arrangements for your space.',
      image: 'assets/hero3.jpg'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
goToSlide(index: number): void {
  this.currentSlide = index;
}
  ngOnInit() {
  setInterval(() => this.nextSlide(), 6000); // Every 5s
}



squareSlides = [
    { link: '/summer', image: 'assets/images.png', alt: 'Summer' },
    { link: '/birthday', image: 'assets/images.png', alt: 'Birthday' },
    { link: '/anniversary', image: 'assets/images.png', alt: 'Anniversary' },
    { link: '/get-well', image: 'assets/images.png', alt: 'Get Well' },
    { link: '/get-well', image: 'assets/images.png', alt: 'Get Well' },
    { link: '/get-well', image: 'assets/images.png', alt: 'Get Well' },
    { link: '/get-well', image: 'assets/images.png', alt: 'Get Well' },
    { link: '/get-well', image: 'assets/images.png', alt: 'Get Well' },

  ];

ngAfterViewInit(): void {
    const carousel = this.carouselRef.nativeElement.querySelector('.carousel-track');

    carousel.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDragging = true;
      this.startX = e.pageX - carousel.offsetLeft;
      this.scrollLeft = carousel.scrollLeft;
      carousel.classList.add('dragging');
    });

    carousel.addEventListener('mouseleave', () => {
      this.isDragging = false;
      carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mouseup', () => {
      this.isDragging = false;
      carousel.classList.remove('dragging');
    });

    carousel.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - this.startX) * 1.5; // scroll speed
      carousel.scrollLeft = this.scrollLeft - walk;
    });
  }
}