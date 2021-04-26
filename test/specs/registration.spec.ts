describe('User', () => {
  it('can register', async () => {
    await browser.url("/create_account");
    const createAccountForm = await $('#box-create-account');
    const firstName = await createAccountForm.$('input[name="firstname"]');
    await firstName.setValue("User123");
    const lastName =  await createAccountForm.$('input[name="lastname"]')
    await lastName.setValue("lastname123");
    const countryCode = await createAccountForm.$('select[name="country_code"]');
    await countryCode.selectByVisibleText('Ukraine');
    const email = `Some${new Date().getTime()/1000}@mail.com`;
    const emailInput = await createAccountForm.$('input[name="email"]');
    await emailInput.setValue(email);
    const phoneInput = await createAccountForm.$('input[name="phone"]');
    await phoneInput.setValue("+380441111111");
    const password = await createAccountForm.$('input[name="password"]');
    await password.setValue(email);
    const passwordConfirm = await createAccountForm.$('input[name="confirmed_password"]');
    await passwordConfirm.setValue(email);
    const createAccountBtn = await $('button[name="create_account"]');
    //await createAccountBtn.click();

    await browser.pause(10000);
  });
});