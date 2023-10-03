 import { expect as expectchai } from 'chai';
// const expectchai = require("chai").expect;
describe('Functional Testing on Application' , async() => 
{
    
    xit('Scrolling and mouse over', async() => 
    {
        browser.url("https://rahulshettyacademy.com/AutomationPractice");
        await $("#mousehover").scrollIntoView();
        await browser.pause(3000);
        await $("#mousehover").moveTo();
        await browser.pause(3000);
        await $("=Top").click();

    });

    xit('Handle Alert', async() => {
        browser.url("http://only-testing-blog.blogspot.com/");
        browser.pause(7000);
        
        // await $("button[ondblclick='myFunction()']").scrollIntoView();
        
        await $("#post-body-7297556448793668582 div[dir='ltr'] button").scrollIntoView();
        browser.pause(3000);
        await $("#post-body-7297556448793668582 div[dir='ltr'] button").doubleClick();
        browser.pause(2000);
        console.log(browser.isAlertOpen()); //returns true
        expectchai(browser.isAlertOpen()).to.be.true;
        expectchai(browser.getAlertText()).to.equals("Press 'OK' or 'Cancel' button!");
        await browser.acceptAlert();

    });

    xit('Webtables Sort Validations', () => {
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        browser.pause(3000);
        //map: is used to retireve new results from existing results
        //map: is used to map new value in real time

        
        //retrieve list of veggies names into array A
        //sort array A = Array B
        //compare array A and array B

        $("tr th:nth-child(1)").click();
        const veggiesLocators = $$("tr td:nth-child(1)");
        const originalVeggieNames = await veggiesLocators.map(veggie => veggie.getText()); //using this instead of for loop and array.length;
        console.log(originalVeggieNames);
        const veggies = originalVeggieNames.slice();// to keep the original array  //array A
        
        //arrays are pass by reference
        const sortedVeggies = veggies.sort(); //array B

        console.log(sortedVeggies);
        expectchai(originalVeggieNames).to.be.equal(sortedVeggies);
    });

    it('Webtables Filter Validations', async() => {
        
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        const pageSizeElem = $("label[for='page-menu']");
        await expect(pageSizeElem).toExist();
        
        await $("input[type='search']").setValue("Tomato");
    });
});

