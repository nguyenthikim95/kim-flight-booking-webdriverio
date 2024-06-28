import { expect } from '@wdio/globals'
import airlineTicketsPage from "../pageobjects/airlineTickets.page.js";
import homePage from "../pageobjects/home.page.js";

describe('Flight booking test script', () => {
    it('Search for Flight Tickets', async() => { 
        await homePage.open();
        browser.maximizeWindow();

        await homePage.selectDeparturePoint();
        await homePage.inputToSearchFlightFromTextbox();
        await homePage.selectDeparturePointHAN();
        await homePage.inputToSearchFlightToTextbox();
        //await browser.acceptAlert();
        await homePage.selectDestinationSGN();
        await homePage.clickToDepartDate();
        await homePage.selectToDepartDate();
        await homePage.clickToReturnDate();
        await homePage.selectToReturnDate();
        await homePage.clickToFlightPassenger();
        await homePage.clickToChildrentPlusButton();
        await homePage.clickToSearchButton();

        await airlineTicketsPage.getLastBreadcrumb();

        await expect(airlineTicketsPage.lastBreadcrumb).toHaveTextContaining("Hà Nội - Sài Gòn (TP.HCM)");
    })
})