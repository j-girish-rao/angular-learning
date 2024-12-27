import { GreetingPipePipe } from './greeting-pipe.pipe';

describe('GreetingPipePipe', () => {
  it('create an instance', () => {
    const pipe = new GreetingPipePipe();
    expect(pipe).toBeTruthy();
  });
});
