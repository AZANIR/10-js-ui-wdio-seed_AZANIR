import * as chai from 'chai';
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe("Chai", ()=>{
  it("should",async ()=>{
    await browser.url("/");
    const helloWord = await $("div");
    //await helloWord.should.contain("Hello world");
  })
  it("expect",async()=>{
    await browser.url("/");
    const helloWord = await $("div");
    await expect(await helloWord.isDisplayed()).to.equal(true, "Hello world")
  })
  it("assert",async()=>{
    await browser.url("/");
    const helloWord = await $("div");
    await assert.isTrue(await helloWord.isDisplayed(), "Hello world");
  })
});