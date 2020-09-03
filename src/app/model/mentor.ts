import { Seller } from './seller';
import { Feedback } from './feedback';
export class Mentor extends Seller{
  sent: number;
  completed: number;
  evaluation: number;
  feedbacks : Array<Feedback>;
}