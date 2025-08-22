import { test,expect,Locator, Page} from '@playwright/test'
class MyDocuments{
    page:Page;
    mydocuments:Locator;
    updatei:Locator;
    edit:Locator;
    update:Locator;
    alert:Locator;
    documentlist:Locator;
    adddocument:Locator;
    addemployeedocument:Locator;
    documentname:Locator;
    filename:Locator;
    add:Locator;
    cancel:Locator;
    invalid:Locator;

    

    constructor(page){
        this.page=page;
        this.mydocuments=page.locator("//b[text()='My Documents']");
        this.documentlist=page.locator("//h6[text()='Document List']")
        this.updatei=page.locator("(//i[@class='fa fa-fw fa-edit'])[1]")
        this.edit=page.locator("//h1[text()='Edit Employee Document']")
        this.update=page.locator("//input[@value='Update']")
        this.alert=page.locator("//div[text()='Updated Successfully.']")
        this.adddocument=page.locator("//span[@class='text']");
        this.addemployeedocument=page.locator("//h1[text()='Add Employee Document']")
        this.documentname=page.locator("input#DocumentName");
        this.filename=page.locator("input#file");
        this.add=page.locator("(//input[@class='btn btn-primary'])[1]");
        this.cancel=page.locator("//input[@value='Cancel']")
        this.invalid=page.locator("//div[@class='alert alert-danger']//p")
    }
    public async gotologinPage()
    {

        await this.page.goto("http://40.114.69.27/")
    }
    public async MyDocuments1(ducname,fname)
    {
        
        await this.documentname.fill(ducname);
        await this.filename.setInputFiles(fname);
        await this.add.click();
    }
    


}
export default MyDocuments;