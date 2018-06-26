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
}, {
  animType: Slide.AnimationType.SlideTop,
  width: 300,
  height: 250,
  duration: 1000,
  style: {
    background: '#EEE',
    color: '#666',
  },
}];

new SlideList(params);
