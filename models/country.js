'use strict';
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        KOD1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        KOD2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        TELEFON_KODU: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tr_TR: {
            type: DataTypes.STRING,
            allowNull: false
        },
        AD: {
            type: DataTypes.STRING,
            allowNull: false
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false,
        underscored: true
    });
    return Country;
};