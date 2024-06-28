import { $ } from '@wdio/globals'
import Page from './page.js';

class HomePage extends Page {
    get flightFrom () {
        return $("input[placeholder='Chọn điểm đi']");
    }

    get searchFlightFromTextbox () {
        return $("//div[text()='Chọn điểm đi']/following-sibling::div//input[@data-id='flight_from']");
    }

    get HANOption () {
        return $("//strong[text()= 'HAN']");
    }

    get searchFlightToTextbox () {
        return $("//div[text()='Chọn điểm đến']/following-sibling::div//input[@data-id='flight_to']");
    }

    get SGNOption () {
        return $("//strong[text()= 'SGN']");
    }

    get departDate () {
        return $("//label[text()='Ngày đi']/following-sibling::input[@id='departure_date_flight']");
    }

    get returnDate () {
        return $("//label[text()='Ngày về']/following-sibling::input[@id='returning_date_flight']");
    }

    get selectDepartDate() {
        return $("//span[@data-month='7/2024']/ancestor::div[contains(@class,'ui-datepicker-header')]/following-sibling::table//span[text()=1 and @class='ui-datepicker-day ']");
    
    }

    get selectReturnDate() {
        return $("//span[@data-month='7/2024']/ancestor::div[contains(@class,'ui-datepicker-header')]/following-sibling::table//span[text()='7' and @class='ui-datepicker-day ']");
    }

    get flightPassenger () {
        return $("//label[text()='Hành khách']/following-sibling::input[contains(@class,'mktnd_frm_flight_passenger')]");
    }

    get childrentPlusButton () {
        return $("//div[@class='popover-content']//label[contains(text(),'Trẻ em')]/parent::div/following-sibling::div//div[@data-type='plus']");
    }

    get searchButton () {
        return $("//button[contains(text(),'Tìm chuyến bay')]");
    }

    async selectDeparturePoint () {
        await this.flightFrom.waitForClickable();
        await this.flightFrom.click();

    }

    async inputToSearchFlightFromTextbox (flightFrom) {
        this.searchFlightFromTextbox.waitForVisible();
        this.searchFlightFromTextbox.setValue("Han");
    }


    async selectDeparturePointHAN () {
        await this.HANOption.waitForClickable();
        await this.HANOption.click();
    }

    async inputToSearchFlightToTextbox () {
        this.searchFlightToTextbox.waitForVisible();
        this.searchFlightToTextbox.setValue("Ho c");
    }

    async selectDestinationSGN () {
        await this.SGNOption.waitForClickable();
        await this.SGNOption.click();
    }

    async clickToDepartDate () {
        await this.departDate.waitForClickable();
        await this.departDate.click();
    }

    async selectToDepartDate () {
        await this.selectDepartDate.waitForClickable();
        await this.selectDepartDate.click();
    }

    async clickToReturnDate () {
        await this.returnDate.waitForClickable();
        await this.returnDate.click();
    }

    async selectToReturnDate () {
        await this.selectDepartDate.waitForClickable();
        await this.selectDepartDate.click();
    }

    async clickToFlightPassenger () {
        await this.flightPassenger.waitForClickable();
        await this.flightPassenger.click();
    }

    async clickToChildrentPlusButton () {
        await this.childrentPlusButton.waitForClickable();
        await this.childrentPlusButton.click();
    }

    async clickToSearchButton () {
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }
    
    open () {
        return super.open('');
    }
}

export default new HomePage();
