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
    type: Slide.ContentType.Image,
    texts: ['プレゼンテーション', 'バナーのご紹介'],
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
    type: Slide.ContentType.Image,
    texts: ['上からでも下からでも'],
  },
}, {
  animType: Slide.AnimationType.Fade,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#989800',
    color: '#666',
  },
  content: {
    type: Slide.ContentType.Image,
    texts: ['なんとフェードでも'],
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
    type: Slide.ContentType.Image,
    texts: ['スライドを', '表現できるのです'],
  },
}];

const slides: Slide[] = params.map((param: SlideParams) => new Slide(param));
const slideList: SlideList = new SlideList(slides);
