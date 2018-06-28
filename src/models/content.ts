import { Slide } from './slide';
import { ContentParams } from '../params/content-params.interface';

export class Content {
  slideId: number;
  element: HTMLElement;
  params: ContentParams;

  constructor(slide: Slide, params: ContentParams) {
    this.slideId = slide.id;
    this.params = params;
    this.element = document.createElement('div');
    this.createElement();
  }

  private createElement(): void {
    this.element.id = 'sc-content-' + this.slideId;
    this.element.innerHTML = this.params.html;
  }
}
