import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2BigbangAppComponent } from '../app/ng2-bigbang.component';

beforeEachProviders(() => [Ng2BigbangAppComponent]);

describe('App: Ng2Bigbang', () => {
  it('should create the app',
      inject([Ng2BigbangAppComponent], (app: Ng2BigbangAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-bigbang works!\'',
      inject([Ng2BigbangAppComponent], (app: Ng2BigbangAppComponent) => {
    expect(app.title).toEqual('ng2-bigbang works!');
  }));
});
