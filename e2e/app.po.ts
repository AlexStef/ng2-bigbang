export class Ng2BigbangPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-bigbang-app h1')).getText();
  }
}
