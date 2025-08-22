import{test,expect,Page,Locator}from '@playwright/test'

class ESR{
    page:Page;
    esr:Locator;
    Esr:Locator;
    search:Locator;
    info:Locator;
    esrdetails:Locator;
    backtolist:Locator;
    chat:Locator;
    esrchat:Locator;
    backtolist1:Locator;
    attach:Locator;
    uploadattach:Locator;
    esrattach:Locator;
    file:Locator;
    submit:Locator;
    backtolist2:Locator;
    alert:Locator;

    constructor(page){
        page=page;
        this.esr=page.locator("(//span//b)[7]");
        this.Esr=page.locator("(//div//div//h6)[1]")
        this.search=page.locator("//input[@type='search']");
        this.info=page.locator("(//td//a[@title='Details'])[1]");
        this.esrdetails=page.locator("(//div[@class='col-md-12']//h6)[1]")
        this.backtolist=page.locator("//div[@class='col-md-4']//div//a");
        this.chat=page.locator("(//td//a[@title='Chat']//i)[1]");
        this.esrchat=page.locator("(//div[@class='container']//h3)")
        this.backtolist1=page.locator("//div[@class='container']//a");
        this.attach=page.locator("(//td//a[@title='Attachments'])[1]");
        this.uploadattach=page.locator("(//h6[@class='m-0 font-weight-bold text-primary'])[1]");
        this.esrattach=page.locator("(//div[@class='row']//div//h6)[1]");
        this.file=page.locator("(//input[@type='file'])");
        this.submit=page.locator("input#submit");
        this.backtolist2=page.locator("(//div[@class='row']//span)[1]");
        this.alert=page.locator("(//tbody//tr//td)")

    }

    public async gotoEsr(status,choosefile)
    {
        await this.esr.click();
        await this.search.fill(status);
        await this.search.clear();
        await this.info.click();
        await this.backtolist.click();
        await this.chat.click();
        await this.backtolist1.click();
        await this.attach.click();
        await this.page.waitForTimeout
        await this.file.setInputFiles(choosefile);

        await this.submit.click();
        await this.backtolist2.click();
    }
}
export default ESR;