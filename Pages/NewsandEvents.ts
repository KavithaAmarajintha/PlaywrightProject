import {Page,Locator} from '@playwright/test'
class NewsEvents{
    page:Page;
    newsandevents:Locator;
    newslist:Locator;
    readmore:Locator;
    newsdetails:Locator;
    viewimages:Locator;
    gallerylist:Locator;
    gallery1:Locator;
    // gallery2:Locator;
    // gallery3:Locator;
     backtonewsdetails:Locator;
    backtonews:Locator;
    // img1:Locator;
     readmore1:Locator;
    // readmore2:Locator;
    // readmore3:Locator;
    // readmore4:Locator;
    // readmore5:Locator;


    constructor(page){
        this.page=page;
        this.newsandevents=page.locator("//li[@id='isEmpMode20']//b");
        this.newslist=page.locator("(//div//div//a)[7]");
        this.readmore=page.locator("(//figcaption//button)[1]");
        this.newsdetails=page.locator("//div//h6[contains(text(),'News Details')]");
        this.viewimages=page.locator("//div//a//button[contains(text(),'View Images')]");
        this.gallerylist=page.locator("//div//h6[contains(text(),'Gallery List')]");
        this.gallery1=page.locator("img#gal")
        // this.gallery2=page.locator("(//img[@id='gal'])[2]");
        // this.gallery3=page.locator("(//img[@id='gal'])[3]");
        this.backtonewsdetails=page.locator("//div//input[@type='button']");
         this.backtonews=page.locator("//div//a[@class='btn btn-primary']");
        // this.img1=page.locator("img#img01");
         this.readmore1=page.locator("(//figcaption//button)[8]");
        // this.readmore2=page.locator("(//button[contains(text(),'Read More')])[3]");
        // this.readmore3=page.locator("(//button[contains(text(),'Read More')])[4]");
        // this.readmore4=page.locator("(//button[contains(text(),'Read More')])[5]");
        // this.readmore5=page.locator("(//button[contains(text(),'Read More')])[6]");
    }
    async NewsEventsPage(){
        await this.readmore1.click();
        await this.backtonews.click();
        //await this.readmore2.click();
        await this.backtonews.click();
        //await this.readmore3.click();
        await this.backtonews.click();
       /// await this.readmore4.click();
        await this.backtonews.click();
        //await this.readmore5.click();
        await this.backtonews.click();
    }





}
export default NewsEvents;