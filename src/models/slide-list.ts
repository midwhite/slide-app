import { Slide } from './slide';
import { SlideParams } from '../params/slide-params.interface';

export class SlideList {
  private index: number = 0;
  private slides: Slide[] = [];

  constructor(slides: Slide[]) {
    this.slides = slides;

    // 次のスライドを表示する
    setTimeout(() => {
      this.transitState();
    }, this.getNextDelay());
  }

  transitState(): void {
    // スライドを更新
    this.slides[this.index].show();
    // 次のスライドが無ければ終了
    if (!this.hasNext()){ return; }
    // 次のスライドを表示する
    setTimeout(() => {
      this.index++;
      this.transitState();
    }, this.getNextDelay());
  }

  private hasNext(): boolean {
    return !!this.slides[this.index + 1];
  }

  private getNextDelay(): number {
    return this.slides[this.index].getDuration() + this.slides[this.index + 1].getDelay();
  }
}

