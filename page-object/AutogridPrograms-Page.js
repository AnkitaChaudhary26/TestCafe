import {Selector,t} from "testcafe"


class AutogridProgramsPage{
    constructor(){
        this.Progtab= Selector("a").withText("Programs")
        this.ProgLink = Selector("a").withText("Energy Storage")
    }


    async SelectProg(){
        await t.click (this.Progtab)
               .click (this.ProgLink)

        console.log("Enerygy storage program is selected successfully");
        
                     
    }

}
export default AutogridProgramsPage