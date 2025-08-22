import {test,expect,Page,Locator}from '@playwright/test'
class LeaveRequest{
    page:Page;
    leaverequest:Locator;
    leavelist:Locator;
    myleaves:Locator;
    search:Locator;
    info:Locator;
    leavedetails:Locator;
    availableleavecount:Locator;
    backtolist:Locator;
    submitleaverequest:Locator;
    addreq:Locator;
    reqtimeoff:Locator;    
    leavetype:Locator;
    fromdate:Locator;
    todate:Locator;
    note:Locator;
    applynow:Locator;
    halfday:Locator;
    date:Locator;

    alert:Locator;
    backtolist1:Locator;
    alert1:Locator;
    alert2:Locator;

    constructor(page)
    {
        page=page;
        this.leaverequest=page.locator("li[id='isEmpAcc3'] b")
        this.leavelist=page.locator("//a[@href='/Employee/LeaveList']");
        this.myleaves=page.locator("//div[@class='row']//div//h6");
        this.search=page.locator("//input[@type='search']");
        this.info=page.locator("(//td//a//i[@class='fa fa-fw fa-info'])[1]");
        this.leavedetails=page.locator("(//div//div//h6)[1]");
        this.availableleavecount=page.locator("(//div//div//h5)[1]");
        this.backtolist=page.locator("//input[@type='button']");
        //this.submitleaverequest=page.locator("(//a[@class='collapse-item'])[4]")
        this.addreq=page.locator("(//div[@class='row'])//span[2]")
        
        this.reqtimeoff=page.locator("(//div//div//h1)[1]");
        this.leavetype=page.locator('#LeaveType');
        this.fromdate=page.locator("#FromDate");
        this.todate=page.locator("#ToDate");
        this.note=page.locator("#Note");
        this.applynow=page.locator("#submit");
        this.halfday=page.locator("#IsHalfDay");
        this.alert=page.locator("//div[@class='alert alert-danger']");
        this.backtolist1=page.locator("a[class='btn btn-primary']");
        this.date=page.locator("(//input[@type='date'])[1]");;
        this.alert1=page.locator("(//div[@class='row']//div)[1]");
        this.alert2=page.locator("(//div//div//div)[36]");


    }
    async Validations(leavename,fdate,tdate,note1){
        await this.backtolist1.click();
        await this.addreq.click();
        await this.leavetype.selectOption({label:leavename})
        await this.fromdate.fill(fdate);
        await this.todate.fill(tdate);
        await this.note.fill(note1);
        

    }
    async HalfDayvalidations(leavename,fdate1,note1){
        await this.backtolist1.click();
        await this.addreq.click();
        await this.leavetype.selectOption({label:leavename})
        await this.fromdate.fill(fdate1);
        await this.note.fill(note1);




    }
        
    
    



    
    



}
export default LeaveRequest;