import { ElectroShopPage } from './app.po';

describe('electro-shop App', () => {
  let page: ElectroShopPage;

  beforeEach(() => {
    page = new ElectroShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
