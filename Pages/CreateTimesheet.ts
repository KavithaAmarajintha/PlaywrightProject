import {test,expect, Page, Locator}from'@playwright/test'
class CreateTimesheet{
    page:Page;
    timesheets:Locator;
    createtimesheets:Locator;
    Createtimesheet:Locator;
    daywise:Locator;
    fromdate:Locator;
    todate:Locator;
    proceed:Locator;
    worklocation:Locator;
    clientmanager:Locator;
    cstmanager:Locator;
    projectname:Locator;
    workedhours:Locator;
    taskdescription:Locator;
    addtolist:Locator;
    delete:Locator;
    cancel:Locator;
    next:Locator;
    submit:Locator;
    addtimesheet:Locator;
    backtolist:Locator;
    delete1:Locator;
    yes:Locator;
    alert:Locator;
    backlist:Locator;

    constructor(page){
        this.page=page;
        this.timesheets=page.locator("(//li[@id='isEmpAcc']//span)/b");
        this.createtimesheets=page.locator("//a[contains(text(),'Create Timesheets')]");
        this.Createtimesheet=page.locator("(//div//div)//h1");
        this.daywise=page.locator("input#DailyWise");
        this.fromdate=page.locator("input#PeriodFrom");
        this.todate=page.locator("input#tDate");
        this.proceed=page.locator("input#proceed");
        this.worklocation=page.locator("input#worklocation");
        this.clientmanager=page.locator("input#clientmanager");
        this.cstmanager=page.locator("input#cstmanager");
        this.projectname=page.locator("input#projectname");
        this.workedhours=page.locator("input#workhours");
        this.taskdescription=page.locator("textarea#taskdescription");
        this.addtolist=page.locator("input#btnAdd");
        this.delete=page.locator("(//td//a//span)");
        this.cancel=page.locator("(//td//a//span)");
        this.next=page.locator("button#btnNext");
        this.submit=page.locator("input#btnSubmit");
        this.addtimesheet=page.locator("//span[contains(text(),'Add Time Sheet')]");
        this.backtolist=page.locator("//a[@class='btn btn-primary']");
        this.delete1=page.locator("(//tbody//td//a)[3]");
        this.yes=page.locator("//input[@type='submit']");
        this.alert=page.locator("//div[@class='alert alert-danger']");
        this.backlist=page.locator("//a[contains(text(),'Back to List')]");

    }
    async TimesheetPage(){
        
        await this.timesheets.click();
        await this.createtimesheets.click();
        await this.daywise.click();

    }
    async CreateTimesheet1(fdate,tdate1){
        await this.addtimesheet.click();
        await this.daywise.click();
        await this.fromdate.fill(fdate);
        await this.todate.fill(tdate1);
    }

    async CreateTimesheet(frmdate,tdate,worklocation1,cmanager,ctmanager,pname,workhours1,tdes){
        await this.fromdate.fill(frmdate);
        await this.todate.fill(tdate);
        await this.proceed.click();
        await this.worklocation.fill(worklocation1);
        await this.clientmanager.fill(cmanager);
        await this.cstmanager.fill(ctmanager);
        await this.projectname.fill(pname);
        await this.workedhours.clear();
        await this.workedhours.fill(workhours1);
        await this.taskdescription.fill(tdes);
        
    }
    
}
export default CreateTimesheet;
