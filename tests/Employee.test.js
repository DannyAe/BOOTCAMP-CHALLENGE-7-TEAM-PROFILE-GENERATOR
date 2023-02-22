const Employee=require("../lib/Employee.js")

test("testing if getName function returns correct name", () => {
    const testEmp=new Employee("joe", "joe@gmail.com", 12345)
expect(testEmp.getName()).toBe("joe")

})