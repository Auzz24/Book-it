const Rent = require('./Rent');
const User = require('./Users')

User.hasMany(Rent, {
    foreignKey:'user_id'
});

Rent.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

module.exports = { Rent, User};