'use strict';
module.exports = (sequelize, DataTypes) => {
    const Subscriber = sequelize.define('Subscriber', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        cell_phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        underscored: true
    });

    Subscriber.associate = function (models) {
        models.Subscriber.belongsTo(models.Country, {
            onUpdate: "CASCADE",
            foreignKey: {
                allowNull: true
            }
        });
        models.Country.hasMany(models.Subscriber);
    };
    return Subscriber;
};