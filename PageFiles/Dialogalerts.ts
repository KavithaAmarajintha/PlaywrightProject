import { Locator, Page }from '@playwright/test'

class DialogAlerts{
    page:Page;
    alert:Locator;
    Confirmation_alert:Locator;
    youpressedOk:Locator;
    prompt_alert:Locator;
    prompt_message:Locator;




    constructor(page:Page){
        this.alert=page.locator("//div//button[@onclick='myFunctionAlert()']")
        this.Confirmation_alert=page.locator("//div//button[@onclick='myFunctionConfirm()']")
        this.youpressedOk=page.locator("//div//p[contains(text(),'You pressed OK!')]")
        this.prompt_alert=page.locator("//div//button[@onclick='myFunctionPrompt()']")
        this.prompt_message=page.locator("//div//p[@id='demo']")


    }
    

        
     }


export default DialogAlerts;