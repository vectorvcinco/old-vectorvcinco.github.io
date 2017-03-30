import { Vectorvcinco.Github.IoPage } from './app.po';

describe('vectorvcinco.github.io App', () => {
  let page: Vectorvcinco.Github.IoPage;

  beforeEach(() => {
    page = new Vectorvcinco.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
