exports.categorylistview = async (session, models, vars) => {
    models.categorylistview = vars.page;
    await session.screen('categorylistview');
};