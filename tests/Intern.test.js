const Intern=require("../lib/Intern.js")

test("testing if getSchool function returns correct school", () => {
    const testInt=new Intern("joe", "joe@gmail.com", "school", "intern",)
expect(testInt.getSchool()).toBe("school")

})