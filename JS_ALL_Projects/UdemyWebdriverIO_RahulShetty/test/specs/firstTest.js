
//describe accepts two parameters "test suite text", function(){};
//short form of anonymous function is:  ()=> {}
describe('Ecommerce Application', () => {  
    
    xit('Login Fail Page Test', async() => {
        //promises= resolved, pending , rejected
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await browser.getTitle());

            //assertion
       await expect(browser).toHaveTitleContaining("Rahul Shetty");

       await $('.alert-danger').click();
       browser.waitUntil( async()=>  await $("#signInBtn").getAttribute('value') === "Sign In",
            
        {  
                timeout: 5000,
                timeoutMsg: 'error text not present'
        })

        console.log(await $('.alert-danger').getText());
        expect($('p')).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

    });

    it('to login', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        browser.pause(3000);
        await $('#username').setValue("rahulshettyacademy");
        browser.pause(3000);
        const password= $("input[name='password']");
        browser.pause(3000);
        await password.setValue("learning");
        browser.pause(2000);
        await $("#signInBtn").click();
        await $("btn-primary").waitForExist();
    });

});