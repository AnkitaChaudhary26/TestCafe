import {Selector} from "testcafe"
import {login} from "../helper"
import AutogridLoginPage  from "../page-object/AutogridLogin-Page"
import AutogridProgramsPage from "../page-object/AutogridPrograms-Page"
import optionsGenericTabPage from "../page-object/optionsGenericTab-Page"
import SubscriptionRulePage from "../page-object/SubscriptionRules-Page"
import AnalyticsOptionsPage from "../page-object/AnalyticsOptions-Page"


//prettier ignore
fixture `Login functionality`
    .page `https://demopreview-qa-test-dromsweb.autogridsystems.net/users/sign_in`

const autogridLoginPage = new AutogridLoginPage()
const autogridProgramsPage = new AutogridProgramsPage()
const genericTabPage = new optionsGenericTabPage()
const subscription = new SubscriptionRulePage()
const analyticsOptions = new AnalyticsOptionsPage()

test ("Testing user signin functionality", async t=>{
  //await t.setTestSpeed(0.01)

//Testing login functionality
  await autogridLoginPage.loginAutogrid("demopreview_admin","4Xy7CAgVmkAP")
    
//Selecting Energy Storage program
   await autogridProgramsPage.SelectProg()

//Verifying Options tab/Generic options
   await genericTabPage.OptionsTab()
   await genericTabPage.GenericOptions()
   await genericTabPage.CapacityOptions()

//Verifying objects in Subscription rule tab
   await subscription.AllowContrats()

//Verifying Analytics options
   await analyticsOptions.method()
})