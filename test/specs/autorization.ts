import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'


describe('Autorization ', () => {
    it('login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await browser.pause(2000)
      //  const receivedUrl = await browser.getUrl();
       // console.log(receivedUrl);
        await expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/inventory.html')
    })
})

