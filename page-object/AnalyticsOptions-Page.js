import {Selector,t} from "testcafe"

class AnalyticsOptions{
    constructor(){
        this.link = Selector("a").withText("Analytics Options")
        this.forecastMethod= Selector("#forecast_presenter_analytics_method_id")
    }
    async method(){
        await t.click(this.link)
        await t.expect(this.forecastMethod.textContent).eql("Measured Asset Availability", "Forecast method is not Measured Asset Availability")
        console.log("Forecast method is Measured Asset Availability")
    }
}
export default AnalyticsOptions