const{test, expect}=require('@playwright/test');

test("Valid login",async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByPlaceholder("Username").fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')
    await page.locator("//button[@type='submit']").click()
    await expect(page).toHaveURL(/dashboard/)   
    await page.getByAltText("profile picture").click()
    await page.waitForTimeout(2000)
    await page.getByText("Logout").click()
    await page.waitForTimeout(2000)
    await expect(page).toHaveURL(/login/)
    await page.waitForTimeout(2000)


})