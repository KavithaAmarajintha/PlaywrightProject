
import { Locator, Page }from '@playwright/test'

export async function matchContentFromTextBoxAndReturnIndex(
    elementNames: Locator,
    textToMatch: string
  ): Promise<number> {
    try {
      let result: number;
      const count = await elementNames.count();
      console.log("Count : " + count);
      for (let i = 0; i < count; i++) {
        let value = await elementNames.nth(i).textContent();
        //console.log("Text Before Trim : " +value);
        value = value.trim();
        //console.log("Text After Trim : " + value);
        if (value === textToMatch) {
          result = i;
          break;
        }
      }
      //console.log("Matched Text index: " + result);
      return result;
    } catch (error) {
      console.log(`Error in getting window handle and error is: ${error}`);
    }
  }