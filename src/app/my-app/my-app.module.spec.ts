import { MyAppModule } from './my-app.module';

describe('MyAppModule', () => {
  let myAppModule: MyAppModule;

  beforeEach(() => {
    myAppModule = new MyAppModule();
  });

  it('should create an instance', () => {
    expect(myAppModule).toBeTruthy();
  });
});
