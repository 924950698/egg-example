module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Gannt = app.model.define('gannt', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true }, //  设置主键  自增长 
    label: STRING(20),
    user: STRING(20),
    start: INTEGER(20),
    endDate: STRING(20),
    duration: INTEGER(50),
    percent: INTEGER(10),
    type: STRING(20),
    proType: STRING(20),
    risk: STRING(10),
  })

  return Gannt;
}