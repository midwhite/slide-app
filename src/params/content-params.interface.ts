import { Slide } from '../models/slide';

export interface ContentParams {
  type: Slide.ContentType;
  texts?: string[];
  src?: string;
}
