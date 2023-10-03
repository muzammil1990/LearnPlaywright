
describe('Windows and Frames Miscellaneous', async() => {
    
    it('Parent and child window switch', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $(".blinkingText").click();

        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
       
        console.log(await $("h1").getText());
        console.log(await browser.getTitle());

        await browser.closeWindow();

        await browser.switchToWindow(handles[0]); //back to parent window
        console.log(await browser.getTitle());

        //open a new window itself
        await browser.newWindow("https://www.google.com/");
        console.log( await browser.getTitle());
        await browser.switchWindow("https://rahulshettyacademy.com/loginpagePractise/");
        await $("#username").setValue("back to username field bro");
        browser.pause(60000);

    });
});