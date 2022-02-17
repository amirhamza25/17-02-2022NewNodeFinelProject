module.exports = (sequelize, DataTypes) => {
    const agentBalance = sequelize.define("agentBalance", {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        agentId: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        balance: {
            type: DataTypes.DOUBLE(20, 2),
            allowNull: false,
            validate: {
                min: {
                    args: [0],
                    msg: "Your amount is too low"
                }
            }
        }
    },
        {
            timestamps: false,
            freezeTableName: true
        });

    agentBalance.associate = (models) => {
        agentBalance.belongsTo(models.agent, {
            foreignKey: 'agentId',
        });
    }

    return agentBalance;
};