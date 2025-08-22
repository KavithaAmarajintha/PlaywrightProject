import{Page,Locator}from'@playwright/test'
class MyprofilePage{
        page:Page
        readonly usernameinput:Locator
        readonly passwordinput:Locator
        readonly login:Locator;
        readonly myprofile:Locator
        readonly myinfo:Locator
        readonly primaryaddress:Locator
        readonly changeyouraddress:Locator
        readonly street:Locator
        readonly city:Locator
        readonly state:Locator
        readonly zipcode:Locator
        readonly update:Locator
        readonly alert:Locator
        readonly secondaryaddress:Locator
        readonly street3:Locator
        readonly city3:Locator
        readonly state3:Locator
        readonly country3:Locator
        readonly zipcode3:Locator
        readonly alert1:Locator

 constructor(page){
        this.page = page;
        this.usernameinput=page.locator("#LoginUser");
        this.passwordinput=page.locator("#password-field");
        this.login=page.locator("#Login");
        this.myprofile=page.locator("//b[text()='My Profile']");
        this.myinfo=page.locator("//h2[text()='My Info']");
        this.primaryaddress=page.locator("(//div /a /span /i)[1]");
        this.changeyouraddress=page.locator("//h5[text()='Change your Address']");
        this.street=page.locator("#Street");
        this.city=page.locator("#City");
        this.state=page.locator("#State");
        this.zipcode=page.locator("#Zip");
        this.update=page.locator("#updateData");
        this.alert=page.locator("//div[text()='Address has been changed']");
        this.secondaryaddress=page.locator("(//div/a/span/i)[2]");
        this.street3=page.locator("#SecondaryStreet");
        this.city3=page.locator("#SecondaryCity");
        this.state3=page.locator("#SecondaryState");
        this.country3=page.locator("#SecondaryCountry")
        this.zipcode3=page.locator("#SecondaryZip");
        this.update=page.locator("#updateData");
        this.alert1=page.locator("//div[text()='Secondary Address has been changed.']");
}

    
    
        
}
export default MyprofilePage;

    

