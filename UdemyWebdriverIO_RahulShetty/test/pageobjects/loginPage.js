class LoginPage{

//to access property use classname.property name = in Java Classname.Static variable
//using property as a getter method
    get userName() 
    {
        // return $("#username")
        return $("input[name='username']");
    }
    
    get password(){
        return $("input[type='password']");
    }

    get alert(){
        return $(".alert-danger");
    }

    get signIN(){
        return $("#signInBtn");
    }

    get textInfo(){
        return $("p");
    }

   async login(username, password){
        await  this.userName.setValue(username);
        await  this.password.setValue(password);
        await  this.signIN.click();
    }
}

//module.exports= new LoginPage(); before ES6 modules
export default new LoginPage();  //ES6 module