'use strict';
module.exports = (sequelize, DataTypes) => {
    const Registered_coin = sequelize.define('Registered_coin', {
        /*registration_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },*/
        coinName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coinTicker: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isCrawled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        },
        currentPrice: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        worth: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dailyIncome: {
            type: DataTypes.STRING,
            allowNull: true
        },
        monthlyIncome: {
            type: DataTypes.STRING,
            allowNull: true
        },
        yearlyIncome: {
            type: DataTypes.STRING,
            allowNull: true
        },
        roi: {
            type: DataTypes.STRING,
            allowNull: true
        },
        masternode_count: {
            type: DataTypes.STRING,
            allowNull: true
        },
        percentChange24h: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        rank: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastCheckTime:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        timestamps: false,
        underscored: true,
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    },
        );
    Registered_coin.associate = function (models) {
        models.Registered_coin.belongsTo(models.Registration, {
            onUpdate: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        //models.Registered_coin.hasOne(models.Registration);
    };


    return Registered_coin;
};