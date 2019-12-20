import {t} from "testcafe"

export async function login(username, password){
    //await t.click("#signin_button")
    await t.typeText("#email", username, {paste:true})
    await t.typeText("password", password, {paste:true})
    
    await t.click(".new-button login")
    
}