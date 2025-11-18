const{test, expect}=require('@playwright/test');


test("Verify error message for invalid login",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)
    await page.viewportSize({width:1600,height:900})
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin1234') //intentionally wrong password
    await page.locator("//button[@type='submit']").click()
    const errormessage=  await page.locator("//p[contains(@class,'-alert-content-text')]").textContent()
    console.log("Error message is :"+errormessage)
    expect(errormessage.includes("Invalid")).toBeTruthy()
})
