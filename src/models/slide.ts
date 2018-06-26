import { SlideParams } from '../params/slide-params.interface';

export class Slide {
  // 基本情報
  width: number;
  height: number;
  top: number;
  left: number;
  display: boolean;

  // スタイル情報
  style: any;

  animType: Slide.AnimationType;
  contentType: Slide.ContentType;

  element: HTMLElement;

  params: SlideParams;

  constructor(params: SlideParams) {
    this.params = params;
    this.display = false;

    this.width = params.width;
    this.height = params.height;

    this.style = params.style || {};

    this.createDom();
  }

  private createDom(): void {
    // DOM要素を生成
    this.element = document.createElement(this.params.domName || 'div');
    // 状態に応じてDOMを更新
    this.updateDom();
    // DOMツリーに追加
    document.getElementById('root').appendChild(this.element);
  }

  // 状態に応じてDOMを更新
  private updateDom(): void {
    // クラス名を更新
    this.element.classList.toggle('show', this.display);
    this.element.classList.toggle('hidden', !this.display);
    // スタイルを更新
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.transition = 'all .3s 0s ease';

    Object.keys(this.params.style).forEach(property => {
      const value: string = this.params.style[property];
      this.element.style[property] = value;
    });
  }

  // 状態を変更する
  private transit(): void {
    this.display = !this.display;
  }
}

export namespace Slide {
  export enum AnimationType {
    SlideLeft, SlideRight, SlideTop, SlideBottom, Fade,
  }

  export enum ContentType {
    Text, Image, Link, Report, Video, Dom,
  }
}
