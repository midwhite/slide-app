import { SlideParams } from '../params/slide-params.interface';

export class Slide {
  static count: number = 0;
  static readonly DefaultDulation: number = 300;
  static readonly DefaultDelay: number = 0;

  // 基本情報
  id: number;
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
    this.id = ++Slide.count;
    this.params = params;
    this.display = this.id === 1;

    // 基本情報
    this.width = params.width;
    this.height = params.height;
    this.animType = params.animType;

    this.style = params.style || {};

    this.createDom();
  }

  private createDom(): void {
    // DOM要素を生成
    this.element = document.createElement(this.params.domName || 'div');
    // 状態に応じてDOMを更新
    this.updateDom();
    // DOMツリーに追加
    document.getElementById('sc-wrapper').appendChild(this.element);
  }

  // 状態に応じてDOMを更新
  protected updateDom(): void {
    // クラス名を更新
    this.setClassNames();
    // スタイルを更新
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.transitionDelay = this.getDelay();
    this.element.style.transitionDuration = this.getDuration();
    this.element.style.transitionProperty = 'all';
    this.element.style.transitionTimingFunction = 'ease';

    // スタイルの生成
    Object.keys(this.params.style).forEach(property => {
      const value: string = this.params.style[property];
      this.element.style[property] = value;
    });
  }

  public show(): void {
    this.display = true;
    this.updateDom();
  }

  public hide(): void {
    this.display = false;
    this.updateDom();
  }

  private getDuration(): string {
    return (this.params.duration || Slide.DefaultDulation) + 'ms';
  }

  private getDelay(): string {
    return (this.params.delay || Slide.DefaultDulation) + 'ms';
  }

  private setClassNames(): void {
    // 共通するクラス名を付与
    this.element.classList.add('sc-slide');
    this.element.classList.toggle('sc-show', this.display);
    this.element.classList.toggle('sc-hide', !this.display);

    // アニメーションタイプに応じたクラス名を付与
    switch (this.animType) {
      case Slide.AnimationType.Fade:
        this.element.classList.add('sc-fade');
        break;
      case Slide.AnimationType.SlideLeft:
        this.element.classList.add('sc-slider-left');
        break;
      case Slide.AnimationType.SlideRight:
        this.element.classList.add('sc-slider-right');
        break;
      case Slide.AnimationType.SlideTop:
        this.element.classList.add('sc-slider-top');
        break;
      case Slide.AnimationType.SlideBottom:
        this.element.classList.add('sc-slider-bottom');
        break;
    }
  }
}

export namespace Slide {
  export enum AnimationType {
    SlideLeft, SlideRight, SlideTop, SlideBottom, Fade, Blink,
  }

  export enum ContentType {
    Text, Image, Link, Report, Video, Dom,
  }
}
