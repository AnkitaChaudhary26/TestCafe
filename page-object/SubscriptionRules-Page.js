import {Selector,t} from "testcafe"

class subscriptionRules{
    constructor(){
        this.subscriptionLink= Selector("a").withText("Subscription Rules")
        this.AccountLevel= Selector("#program_option_allow_participant_account_contracts")
        this.SPLevel= Selector("#program_option_allow_service_point_contracts")
        this.device= Selector("#program_option_allow_device_contracts")
        this.commercial = Selector("#account_type_id5")
        this.industrial = Selector("#account_type_id6")
    }
    async AllowContrats(){
        
        await t.click(this.subscriptionLink)
        if (await (this.AccountLevel.value)=="true") {
            console.log("Account Level subscription is allowed")
            await t.expect(this.commercial.checked).eql(true)
            await t.expect(this.industrial.checked).eql(true)
            console.log("Industrial and commercial Account types are allowed")

        } 
        else if (await (this.SPLevel.value)=="true") {
            console.log("SP Level subscription is allowed");
        }
        else if (await (this.device.value)=="true"){
             console.log("Device Level subscription is allowed")

        }

    }
}
export default subscriptionRules