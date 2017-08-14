import { HackathonFrontPage } from './app.po';

describe('hackathon-front App', () => {
  let page: HackathonFrontPage;

  beforeEach(() => {
    page = new HackathonFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
