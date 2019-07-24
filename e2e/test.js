const expect = require('chai').expect;

describe('Carrinho de Compras', () => {
  it('deve adicionar um produto ao carrinho e removê-lo', () => {
    browser.url('https://react-shopping-cart-67954.firebaseapp.com/');
    browser.waitForText('.shelf-item');

    browser.click('.bag--float-cart-closed');

    browser.waitForText('.bag__quantity');
    let bagProductsQtd = browser.getText('.bag__quantity');
    expect(bagProductsQtd).to.equal('0');

    browser.click('.shelf-item');
    browser.pause(100);

    bagProductsQtd = browser.getText('.bag__quantity');
    expect(bagProductsQtd).to.equal('1');

    browser.click('.shelf-item__del');
    browser.pause(100);
    bagProductsQtd = browser.getText('.bag__quantity');
    expect(bagProductsQtd).to.equal('0');
  });
});
