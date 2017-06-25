import { SPOTIFYAPPPage } from './app.po';

describe('spotify-app App', () => {
  let page: SPOTIFYAPPPage;

  beforeEach(() => {
    page = new SPOTIFYAPPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
