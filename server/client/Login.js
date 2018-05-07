exports.submit = async (session, models, vars) => {
    await session.transform.version6testing.update('login', models.Login);
    await session.transform.version6testing.action('login', 'submit');
};