class ReviewPage{

    //to access property use classname.property name = in Java Classname.Static variable
    //using property as a getter method
    get checkout() {
        return $("*=Checkout");
    }

    get password() {
        return $("input[type='password']");
    }

    get cards() {
        return $$("div[class='card h-100']");
    }

    sumOfProducts() {
        const sumOfProducts= (await Promise.all(await productPrices.map(async (promise))))
    }

}
    
    //module.exports= new ReviewPage(); before ES6 modules
    export default new ReviewPage(); //ES6 module