const Engineer=require("../lib/Engineer.js")

test("testing if getGithub function returns correct github", () => {
    const testEng=new Engineer("joe", "joe@gmail.com", 12345, "githubaccount",)
expect(testEng.getGithub()).toBe("githubaccount")

})