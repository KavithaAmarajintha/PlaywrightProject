import test,{expect}from '../../../Fixtures/BaseClass'
import ENV from '../../../Utilities/env';

test.describe('NewsandEvents @Employee',async()=>{
    test('NewsEvents',async({page,loginPage,newsandevents})=>{
       await test.step('validates',async()=>{
             await loginPage.gotoLoginPage();
             await loginPage.LoginMethod(ENV.USERNAME,ENV.PASSWORD)
             await newsandevents.newsandevents.click();
             await newsandevents.newslist.click();
             await page.waitForTimeout(2000);
             await newsandevents.readmore.click();
             if(await newsandevents.newsdetails.isVisible())
             {
                expect(await newsandevents.newsdetails.textContent()).toContain("News Details");
                console.log(await newsandevents.newsdetails.textContent());
             }
            
            await newsandevents.backtonews.click();
            await page.evaluate(() => {
               window.scrollBy(0, 500);
             }); 
            await newsandevents.readmore1.click();
            
            await newsandevents.viewimages.click();
            await newsandevents.gallery1.click();
            if(await newsandevents.gallerylist.isVisible()){
               expect(await newsandevents.gallerylist.textContent()).toContain("Gallery List");
               console.log(await newsandevents.gallerylist.textContent())
            }
            await newsandevents.backtonewsdetails.click();
            await newsandevents.backtonews.click();
            
        })
    })
})