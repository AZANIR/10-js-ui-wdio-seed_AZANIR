describe('User', () => {
  it('can register', async () => {
    browser.url("/create_account");
    const registrationForm = $('form[name="customer_form"]');
    const firstNameLogin = registrationForm.$('input[name="firstname]');
    firstNameLogin.setValue("User123");
    const lastNameLogin = registrationForm.$('input[name="lastnmae]')
    lastNameLogin.setValue("lastname123");
    const countrySelect = registrationForm.$('select[name="country_code"]');
    countrySelect.selectByVisibleText('Ukraine');
    
    browser.pause(3000);
  });
});