exports.clickAssigned = async (session, models, vars) => {
    await session.transform.version6testing.action('homescreen', 'clickAssigned');
};