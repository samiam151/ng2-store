import { Ng2pocPage } from './app.po';

describe('ng2poc App', function() {
  let page: Ng2pocPage;

  beforeEach(() => {
    page = new Ng2pocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
