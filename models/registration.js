'use strict';
module.exports = (sequelize, DataTypes) => {
    const Registration = sequelize.define('Registration', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coinTicker: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coinName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        collateralAmount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        watchDog: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sentinelRequired: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isCrawled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: 0
        },
        btcTalkAnn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        betweenBlocksAnn: {
            type: DataTypes.STRING,
            allowNull: false
        },
        github: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sourceCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        selectxchange: {
            type: DataTypes.STRING,
            allowNull: false
        },
        xchgUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        homepage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telegram: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discord: {
            type: DataTypes.STRING,
            allowNull: false
        },
        twitter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        blockExplorer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coinLogo: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        underscored: true,
        indexes: [
            {
                unique: true,
                fields: ['id']
            }
        ]
    });
    Registration.associate = function (models) {
        models.Registration.hasMany(models.Registered_coin);
    };
    return Registration;
};