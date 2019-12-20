import {Selector,t} from "testcafe"

//const Selector = require('testcafe');
//const t = require('testcafe');



class AutogridLoginPage{
    constructor(){
        this.email= Selector("#email")
        this.password= Selector("#password")
        this.loginButton =Selector(".new-button")
        this.link= Selector("a").withText("Welcome, System Administrator")
    }


    async loginAutogrid(username, password){
        var that = this;
        await t.typeText(that.email, username)
               .typeText(that.password, password)
               .pressKey("enter")  
               .expect(this.link).ok()
        console.log("User is able to login successfully")   
    }
}
export default AutogridLoginPage