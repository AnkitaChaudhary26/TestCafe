import {Selector,t} from "testcafe"

class optionsGenerictab{
    constructor(){
        this.optionsLink =Selector("#options-link")
        this.genericLink = Selector("a").withText("Generic Options")
        this.ProgName = Selector("input").filter("#utility_program_name")
        this.ProgStatus = Selector("#utility_program_status")
        this.dashboardDisplay = Selector("#utility_program_display_on_dashboard")
        this.CommittedCapacity = Selector("#program_option_vpp_committed_capacity_mw")
    }

    async OptionsTab(){
        await t.click(this.optionsLink)
    }

    async GenericOptions(){
        await t.click(this.genericLink)
              .expect(this.ProgName.value).eql("Energy Storage", "This is not energy storage program")
              .expect(this.ProgStatus.value).eql("enabled", "This program is not enabled")
              .expect(this.dashboardDisplay.value).eql("true","This program is not displayed on DashBoard")
              console.log("Progam Name, status and Display on Dashboard is Verified")
    }
    async CapacityOptions(){
        await t.expect(this.CommittedCapacity.value).notEql("","There is no value in Committed Capacity")
        console.log("Committed Capacity Verified")
    }
}
export default optionsGenerictab