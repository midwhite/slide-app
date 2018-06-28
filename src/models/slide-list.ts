import { Slide } from './slide';
import { SlideParams } from '../params/slide-params.interface';

export class SlideList {
  private index: number = 0;
  private slides: Slide[] = [];

  constructor(slides: Slide[]) {
    this.slides = slides;
    setTimeout(() => {
      this.transitState();
    }, 1000);
  }

  transitState(): void {
    // スライドを更新
    this.slides[this.index].show();
    // 次のスライドが無ければ終了
    if (!this.hasNext()){ return; }
    // 次のスライドを表示する
    setTimeout(() => {
      this.transitState();
    }, 1000);
  }

  private hasNext(): boolean {
    this.index++;
    return !!this.slides[this.index];
  }
}

