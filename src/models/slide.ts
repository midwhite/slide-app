import { SlideParams } from '../params/slide-params.interface';
import { Content } from './content';

export class Slide {
  private static count: number = 0;
  private static readonly DefaultDulation: number = 300;
  private static readonly DefaultDelay: number = 0;

  // 基本情報
  id: number;
  width: number;
  height: number;
  top: number;
  left: number;
  display: boolean;
  script: string;
  content: Content;

  // スタイル情報
  style: object;

  animType: Slide.AnimationType;
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
    this.script = params.script;

    this.style = params.style || {};

    this.createDom();
  }

  private createDom(): void {
    this.element = document.createElement(this.params.domName || 'div');
    // 状態に応じてDOMを更新
    this.updateDom();
    // DOMツリーに追加
    document.getElementById('sc-wrapper').appendChild(this.element);
    // Contentオブジェクトを生成
    this.content = new Content(this, this.params.content);
    // ContentをDOMツリーに追加
    this.element.appendChild(this.content.element);
  }

  // 状態に応じてDOMを更新
  protected updateDom(): void {
    // クラス名を更新
    this.setClassNames();
    // スタイルを更新
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.transitionDelay = this.getDelay() + 'ms';
    this.element.style.transitionDuration = this.getDuration() + 'ms';
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

    // scriptの実行
    this.executeScript();
  }

  public hide(): void {
    this.display = false;
    this.updateDom();
  }

  public getDuration(): number {
    return this.params.duration || Slide.DefaultDulation;
  }

  public getDelay(): number {
    return this.params.delay || Slide.DefaultDulation;
  }

  private executeScript(): void {
    if (this.script) { eval(this.script); }
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
    Text, Image, Link, Marquee, Report, Video, Dom,
  }
}
