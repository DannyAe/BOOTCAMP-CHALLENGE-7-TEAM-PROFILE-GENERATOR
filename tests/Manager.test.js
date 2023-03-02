const Manager=require("../lib/Manager.js")

test("testing if getContact function returns correct contact", () => {
    const testMan=new Manager("joe", "joe@gmail.com", "id", "contact",)
expect(testMan.getContact()).toBe("contact")

})

