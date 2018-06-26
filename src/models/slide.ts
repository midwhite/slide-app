import { SlideParams } from '../params/slide-params.interface';

export class Slide {
  static id: number = 0;

  // 基本情報
  id: number;
  width: number;
  height: number;
  top: number;
  left: number;
  visible: boolean = true;
  display: boolean;

  // スタイル情報
  style: any;

  animType: Slide.AnimationType;
  contentType: Slide.ContentType;

  element: HTMLElement;

  params: SlideParams;

  constructor(params: SlideParams) {
    this.id = ++Slide.id;
    this.params = params;
    this.display = this.id === 1;

    this.width = params.width;
    this.height = params.height;

    this.style = params.style || {};

    this.createDom();
  }

  private createDom(): void {
    // DOM要素を生成
    this.element = document.createElement(this.params.domName || 'div');
    // 基本情報
    this.animType = this.params.animType;
    // 状態に応じてDOMを更新
    this.updateDom();
    // DOMツリーに追加
    document.getElementById('sc-wrapper').appendChild(this.element);
  }

  // 状態を変更する
  public transit(): void {
    this.display = !this.display;
    if (this.display) {
      this.show();
    } else {
      this.hide();
    }
  }

  private show(): void {
    this.visible = true;
    this.updateDom();
  }

  private hide(): void {
    this.visible = false;
    this.updateDom();
    // 不可視化した状態で初期化
    setTimeout(() => {
      this.visible = true;
      this.display = false;
      this.updateDom();
    }, this.getDuration());
  }

  // 状態に応じてDOMを更新
  protected updateDom(): void {
    // クラス名を更新
    this.setClassNames();
    // スタイルを更新
    this.element.style.display = (this.visible) ? 'block' : 'none';
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.transition = 'all ' + this.getDuration() + 'ms ' + this.getDelay() + 'ms ease';

    Object.keys(this.params.style).forEach(property => {
      const value: string = this.params.style[property];
      this.element.style[property] = value;
    });
  }

  public getDuration(): number {
    return this.params.duration || 300;
  }

  protected getDelay(): number {
    return this.params.delay || 0;
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
