//importing chai library
const expectchai = require("chai").expect

describe('UI Controls Test Suite', async() => {
   
    xit('UI Controls', async() => {
        await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        await $('#username').setValue("rahulshettyacademy");
        const password= $("input[name='password']");
        await password.setValue("learning");

        //section 6. Lecture 36 = return multiple elements and chaining locators

        // 1st way: directly identify webelement user radiobutton
        const radiobuttons = $$(".radiotextsty");
        const userdropdwon = radiobuttons[1];
        await userdropdwon.click();
        await browser.pause();

        
        //to identify parent then navigate to child (use chainable locators)
        const radioButtons = $$(".customradio");
        const userDropdown = radioButtons[1];
//though 7 elements were returen but search scope was limited within label = customradio class
//when unique classname to identify webelement is not present we can use tagname to come from parent to child
        await userDropdown.$("span").click();   
        const modal= $(".modal-body");
// it is used when second page or second page element is not loaded and element doesn't exist in dom itself. 
//so here its not valid as modal body already exist in dom so use waitForDisplayed
    
// await modal.waitForExist()
    await modal.waitForDisplayed();
    await modal.not.waitForDisplayed();

    //dropdown
    const dropdown= await $("select.form-control"); //must have select tag
    await dropdown.selectByAttribute("value","teach");
    browser.pause(2000);
    await dropdown.selectByVisibleText("Consultant");
    await dropdown.selectByIndex(0);
    console.log(await dropdown.getValue());
    //chai assertions
    expectchai(await dropdown.getValue()).to.equal("stud");

    });

    it('Dynamic dropdown controls', async() =>
    {
        browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await $("#autocomplete").setValue("ind");
        
                            //parent      to  child
        let items = $$("[class='ui-menu-item'] div");

        for(let i=0; i< items.length; i++){
            if(items[i].getText() === "India"){
                item[i].click();
            }
        }
    });

    xit('Checkboxes Identification', async() =>
    {
        const checkboxes = $$("input[type='checkbox']");
        for(let i=0; i < checkboxes.length; i++){
            if(await checkboxes[i].getText() === "Option2"){
                checkboxes[i].click();
                break;
            }
        }
        console.log(await checkElement[i].isSelected());  //true

        //or
        const checkElement = $$("input[type='checkbox']");
        checkElement[1].click();
       console.log(await checkElement[1].isSelected());  //true
       console.log(await checkElement[2].isSelected()); //false

    });
});