import {Page, Locator}from '@playwright/test'

class Timesheets{
     page:Page;
     readonly username:Locator;
     readonly password:Locator;
     readonly login:Locator;
     readonly timesheets:Locator;
     readonly mytimesheets:Locator;
     readonly  Employeetimesheetreport:Locator;
     readonly updateicon:Locator;
     readonly dailywise:Locator;
     readonly update:Locator;
     readonly updatesuccesffuly:Locator;
     readonly Updatetimesheet:Locator;
     readonly updatebutton:Locator;
     readonly Backtolist:Locator;
     readonly infoicon:Locator;
     readonly TimesheetDetails:Locator;
     readonly Backtolist1:Locator;
     readonly delete:Locator;
     readonly alert:Locator;
     readonly no:Locator;
     readonly mail:Locator;
     readonly submit:Locator;
     readonly No:Locator;
     readonly search:Locator;
     readonly alert1:Locator;
    

     constructor(page){
        this.page=page;
        this.username=page.locator("#LoginUser");
        this.password=page.locator("#password-field");
        this.login=page.locator("#Login");
        this.timesheets=page.locator("//b[text()='Timesheets']");
        this.mytimesheets=page.locator("//a[text()='My Timesheets']");
        this.Employeetimesheetreport=page.locator("//h6[text()='Employee Timesheet Report']");
        this.updateicon=page.locator("(//a[@title='Update'])[1]");
        this.dailywise=page.locator("(//div[@class='col-md-6'])//h1");
        this.update=page.locator("//a[@title='Update']");
        this.Updatetimesheet=page.locator("(//div[@class='col-md-6'])//h1");
        this.updatebutton=page.locator("input#btnUpdate")
        this.updatesuccesffuly=page.locator("//div[@class='toast-message']")
        this.Backtolist=page.locator("//a[@class='btn btn-primary']");
        this.infoicon=page.locator("(//td//a[@title='Details'])[1]");
        this.TimesheetDetails=page.locator("//h6[text()='Timesheet Details']");
        this.Backtolist1=page.locator("//a[text()='Back to List']");
        this.delete=page.locator("(//td//a[@title='Delete'])[1]");
        this.alert=page.locator("(//div[@class='container'])//h1");
        this.no=page.locator("//a[@class='btn btn-primary']");
        this.mail=page.locator("(//a[@title='Submit to HR'])[4]");
        this.submit=page.locator("(//div//div[@class='container'])//h1")
        this.No=page.locator("(//a[@class='btn btn-danger'])[1]")
        this.search=page.locator("//input[@type='search']");
        this.alert1=page.locator("//td[@class='dataTables_empty']");



     }
}
export default Timesheets;