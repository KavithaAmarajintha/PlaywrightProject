import {test,expect,Page,Locator}from '@playwright/test'
class CreateESR{
    page:Page;
    esr1:Locator;
    createnewesr:Locator;
    newesr:Locator;
    country:Locator;
    category:Locator;
    subject:Locator;
    description:Locator;
    submit:Locator;
    alert:Locator;
    filename:Locator;




    constructor(page){
        this.page=page;
        this.esr1=page.locator("(//span//b)[7]");
        this.createnewesr=page.locator("//span[@class='text']");
        this.newesr=page.locator("(//div[@class='col-md-6'])//h1");
        this.country=page.locator("select#Country");
        this.category=page.locator("select#cate1");
        this.subject=page.locator("input#Subject");
        this.description=page.locator("textarea#Description");
        this.submit=page.locator("//input[@type='submit']");
        this.alert=page.locator("//div[@class='alert alert-danger']");
        






    }
    async EsrPage(countryname,categoryname,test,testing){
        await this.country.selectOption({label:countryname});
        await this.category.selectOption({label:categoryname});
        await this.subject.fill(test);
        await this.description.fill(testing);



    }
}
export default CreateESR;