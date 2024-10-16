import { expect } from '@wdio/globals'
import Products from '../pageobjects/products.js'
import LoginPage from '../pageobjects/login.page.ts';

describe('Products', () => {
    it('add a product to the cart', async () => {
        await Products.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(1000);
        await Products.addToCard.click();
        expect(await Products.remove.isDisplayed())

    })
})