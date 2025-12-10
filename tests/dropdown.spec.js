import {test, expect} from '@playwright/test';

test('dropdown test', async function ({page})
{
    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.locator("#state").selectOption({index: 4});  /*select by index*/
    await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({value: 'Maharashtra'}); /*select by value*/
    await page.waitForTimeout(2000)
    await page.locator("#state").selectOption({label:'Goa'})    /*select by label(visible text)*/
    await page.waitForTimeout(2000)

    const val= await page.locator("#state").textContent();
    console.log(val);
    await expect(val.includes('Goa')).toBeTruthy()
    console.log("Assertion passed");

}

)