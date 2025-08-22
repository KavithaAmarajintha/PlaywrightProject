import {test,expect,Page,Locator}from '@playwright/test'
class HolidayList{
    page:Page;
    holidaylist:Locator;
    holidayslist:Locator;
    search:Locator;
    alert:Locator;

    constructor(page){
        page=page;
        this.holidaylist=page.locator("//b[text()='Holiday List']");
        this.holidayslist=page.locator("//h6[text()='Holidays List']");
        this.search=page.locator("//input[@type='search']");
        this.alert=page.locator("//td[text()='No matching records found']");


    }
    async gotologin()
    {
        await this.page.goto('http://40.114.69.27/');
    }

    async HolidayList1(holidayname1,holidayname2)
    {
        
        await this.search.fill(holidayname1);
        await this.search.clear();
        await this.search.fill(holidayname2);
        
    }


}
export default HolidayList;

