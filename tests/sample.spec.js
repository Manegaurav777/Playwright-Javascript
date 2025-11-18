const{test,expect}=require('@playwright/test');

test("My first test",async function ({page}) {
    expect(1).toBe(1);
    
})

test("My second test",async function ({page}) {
    expect("hello gaurav").toContain("hello");
    
})

test.skip("My Third test",async function ({page}) {
    expect(200).toBe(200)
    
})

test("My Fourth test",async function ({page}) {
    expect(true).toBeTruthy
    
})

test("My Fifth test",async function ({page}) {
    expect("Gaurav mane".includes("mane")).toBe(true);
    
})