
import loginPage from '../pageobjects/loginPage';
// const loginPage = require('../pageobjects/loginPage').default  //before ES6 modules
import shopPage from '../pageobjects/shop';


//describe accepts two parameters "test suite text", function(){};
//short form of anonymous function is:  ()=> {}
describe('Ecommerce Application', () => {  
    
    xit('Login Fail Page Test', async() => {
        //promises= resolved, pending , rejected
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining("Rahul Shetty Academy");

        await loginPage.login("rahulshettyacademy", "learning123");
        await console.log(loginPage.alert.getText());
            
        //assertion
       await browser.waitUntil( async()=>  await loginPage.signIN.getAttribute('value') === "Sign In",    
        {  
                timeout: 5000,
                timeoutMsg: 'error text not present'
        })

       await console.log(await loginPage.alert.getText());
       await expect(await loginPage.textInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning");

    });

    it('End to End Test', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        browser.pause(3000);
        await loginPage.login("rahulshettyacademy", "learning123");
        await shopPage.checkout.waitForExist(); //link text

        const products=["iphone X" , "Blackberry"]; //test data
        shopPage.addProductsToCart(products);
        shopPage.checkout.click();
        browser.pause(9000);  

    });

});