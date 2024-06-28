import { $ } from '@wdio/globals'
import Page from './page.js';

class AirlineTicketsPage extends Page {
    get lastBreadcrumb () {
        return $("//ol[@class='container navigation-banner breadcrumb']/li[last()]//a");
    }

    async getLastBreadcrumb () {
        await this.lastBreadcrumb.waitForEnabled();
        await this.lastBreadcrumb.waitForDisplayed();
    }
}

export default new AirlineTicketsPage();
