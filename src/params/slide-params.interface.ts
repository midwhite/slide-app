import { ContentParams } from './content-params.interface';
import { Slide } from '../models/slide';

export interface SlideParams {
  domName?: string;
  animType?: Slide.AnimationType;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  duration?: number;
  delay?: number;
  style?: any;
  script?: string;
  content?: ContentParams;
}
