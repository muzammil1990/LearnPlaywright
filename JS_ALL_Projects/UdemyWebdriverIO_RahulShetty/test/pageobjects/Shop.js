class Shop{

    //to access property use classname.property name = in Java Classname.Static variable
    //using property as a getter method
        get checkout(){
            return $("*=Checkout");
        }
        
        get password(){
            return $("input[type='password']");
        }
    
        get cards(){
            return $$("div[class='card h-100']");
        }

//performing action of adding item to cart
async addProductsToCart(products){
    for (let i = 0; i < await this.cards.length; i++) {
        const card = await this.cards[i].$("div h4 a");
        if (products.includes(await card.getText())) {
            await this.cards[i].$(".card-footer button").click();
        }
    }
}

    }
   //module.exports= new Shop(); before ES6 modules 
    export default new Shop(); //ES6 module