exports.start = async (session, models, vars) => {
    await session.transform.version6testing.start();
};