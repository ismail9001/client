module.exports = (sequelize, DataTypes) => {
	const Milk = sequelize.define('Milk', {
		weight: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		date: {
			type: DataTypes.DATE,
			allowNull: false
		}
	})
	return Milk
}
