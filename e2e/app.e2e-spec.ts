import { PresenceManagerPage } from './app.po';

describe('presence-manager App', function() {
  let page: PresenceManagerPage;

  beforeEach(() => {
    page = new PresenceManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
