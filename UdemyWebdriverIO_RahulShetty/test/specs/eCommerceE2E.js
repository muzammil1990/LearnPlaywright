describe('Ecommerce Application', async() => {
    
    it('End to End Test', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        browser.pause(3000);
        await $('#username').setValue("rahulshettyacademy");
        // browser.pause(3000);
        const password= $("input[name='password']");
        // browser.pause(3000);
        await password.setValue("learning");
        // browser.pause(2000);
        await $("#signInBtn").click();
        const checkoutLink= await $("*=Checkout");
        await checkoutLink.waitForExist();

        const products=["iphone X" , "Blackberry"];
        const cards= $$("div[class='card h-100']");

        for (let i = 0; i < await cards.length; i++) {
            const card = await cards[i].$("div h4 a");
            if (products.includes(await card.getText())) {
                await cards[i].$(".card-footer button").click();
            }
        }
        checkoutLink.click();
        browser.pause(9000);

    });
});