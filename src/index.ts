import { Slide } from './models/slide';
import { SlideParams } from './params/slide-params.interface';
import { SlideList } from './models/slide-list';

const params: SlideParams[] = [{
  animType: Slide.AnimationType.SlideLeft,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#000',
    color: '#666',
  },
  content: {
    html: '<p style="margin: 0px;">プレゼンテーション</p><p style="margin: 0px;">バナーのご紹介</p>',
  },
}, {
  animType: Slide.AnimationType.SlideLeft,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#EEE',
    color: '#666',
  },
  content: {
    html: '<p style="margin: 0px;">こんにちは！高野です。</p>',
  },
}, {
  animType: Slide.AnimationType.SlideLeft,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#FCE4EC',
    color: '#666',
  },
  content: {
    html: '<p style="margin: 0px;">今回、作ったのは</p>',
  },
}, {
  animType: Slide.AnimationType.SlideLeft,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#FCE4EC',
    color: '#666',
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    html: '<p style="margin: 0px;">プレゼンテーション</p><p style="margin: 0px;">バナー</p>',
  },
}, {
  animType: Slide.AnimationType.SlideBottom,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#EEE',
    color: '#666',
  },
  content: {
    html: '<p style="margin: 0px;">上からでも下からでも</p>',
  },
}, {
  animType: Slide.AnimationType.Fade,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#F50057',
    color: '#FFF',
  },
  content: {
    html: '<p style="margin: 0px;">なんと<b>フェード</b>でも</p>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#FFF',
    color: '#666',
  },
  content: {
    html: '<p style="margin: 0px;">スライドを</p><p style="margin: 0px;">表現できるのです。</p>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#666',
    color: '#FFF',
  },
  content: {
    html: '<p style="margin: 0px;">スライドの中身はHTMLなので</p>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#666',
    color: '#FFF',
    textAlign: 'center',
  },
  content: {
    html: '<p style="margin: 0px;">このように画像を表示することも</p><img src="https://cdn.smartcanvas.net/appdata/user4079/apps106532/images/1529925723bbq.jpg" style="width: 260px; margin-top: 10px;" />',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#666',
    color: '#FFF',
  },
  content: {
    html: '<p style="margin: 0px;">さらにはiframeを用いて</p>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#FFF',
  },
  content: {
    html: '<iframe src="https://sample.smartcanvas.net/index.pkg.html?user=4079&app=106546&type=DM-1_1&no_send=true" width="300" height="250" frameborder="0"></iframe>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#666',
    color: '#FFF',
  },
  content: {
    html: '<p style="margin: 0px;">このようにインビュー動画を</p><p style="margin: 0px;">挟むことも可能なんです</p>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#666',
    color: '#FFF',
  },
  content: {
    html: '<p style="margin: 0px;">どうですか！現場の島田さん！</p>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#666',
    color: '#FFF',
  },
  content: {
    html: '<p style="margin: 0px;">バナレボの新メニューに</p><p style="margin: 0px;">いかがですか！</p>',
  },
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#666',
    color: '#FFF',
  },
  content: {
    html: '<p style="margin: 0px;">売れますよね？売れますよね？</p><p style="margin: 0px;">売れますよね？売れますよね？</p><p style="margin: 0px;">売れますよね？売れますよね？</p><p style="margin: 0px;">売れますよね？売れますよね？</p><p style="margin: 0px;">売れますよね？売れますよね？</p><p style="margin: 0px;">売れますよね？売れますよね？</p><p style="margin: 0px;">売れますよね？売れますよね？</p><p style="margin: 0px;">売れますよね？売れますよね？</p>',
  },
}, {
  animType: Slide.AnimationType.Fade,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#AD1457',
    color: '#FFF',
    fontSize: '28px',
  },
  script: 'console.log("This is the executed script.")',
  content: {
    html: '<p style="margin: 0px;">これ絶対売れますよね？</p>',
  },
}, {
  animType: Slide.AnimationType.SlideBottom,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#9C27B0',
    color: '#FFF',
    fontSize: '28px',
  },
  content: {
    html: '<p style="margin: 0px;">ご検討お願いします！</p>',
  },
}];

const slides: Slide[] = params.map((param: SlideParams) => new Slide(param));
const slideList: SlideList = new SlideList(slides);
