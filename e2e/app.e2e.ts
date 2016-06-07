import { Ng2BigbangPage } from './app.po';

describe('ng2-bigbang App', function() {
  let page: Ng2BigbangPage;

  beforeEach(() => {
    page = new Ng2BigbangPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-bigbang works!');
  });
});
