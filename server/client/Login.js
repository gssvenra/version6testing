exports.submit = async (session, models, vars) => {
    await session.transform.version6testing.update('Login', models.Login);
    await session.transform.version6testing.action('Login', 'submit');
};