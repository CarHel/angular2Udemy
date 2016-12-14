import { LocalizationPage } from './app.po';

describe('localization App', function() {
  let page: LocalizationPage;

  beforeEach(() => {
    page = new LocalizationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
