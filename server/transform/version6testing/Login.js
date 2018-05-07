exports.submit = async (session, models, vars) => {
    await session.transform.version6testing.action('Login', 'submit');
};
exports.Login = async (session, models, vars) => {
    models.Login = vars.page;
    await session.screen('Login');
};