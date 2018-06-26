import { Slide } from './slide';
import { SlideParams } from '../params/slide-params.interface';

export class SlideList {
  private index: number = 0;
  slides: Slide[] = [];

  constructor(params: SlideParams[]) {
    this.slides = params.map((param: SlideParams) => new Slide(param));
    this.slides.forEach((slide: Slide, i: number) => {
      // 初期状態を与える
      if (i === 0) {
        slide.show();
      } else {
        slide.hide();
      }
    });
    setInterval(() => {
      const maxIndex: number = this.slides.length - 1;
      const prevSlide: Slide = (this.index === 0) ? this.slides[maxIndex] : this.slides[this.index - 1];
      const nextSlide: Slide = (this.index === maxIndex) ? this.slides[0] : this.slides[this.index + 1];
      prevSlide.transit();
      nextSlide.transit();
      // this.slides.forEach((slide: Slide) => slide.transit());
      this.index = (this.index + 1) % this.slides.length;
    }, 2000);
  }
}

// params.forEach((param: SlideParams) => {
//   const slide: Slide = new Slide(param);
//   console.log(slide);
//   setInterval(() => slide.transit(), 2000);
// });
