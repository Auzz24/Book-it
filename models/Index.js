const Rent = require('./Rent');
const User = require('./User')

User.hasMany(Rent, {
    foreignKey:'user_id'
});

Rent.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { Rent, User};
