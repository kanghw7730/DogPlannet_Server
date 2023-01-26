'use strict';
module.exports = (sequelize, DataTypes) => {
  const DogInfos = sequelize.define('DogInfos', {
    user_id:{
      type: DataTypes.UUID,
      allowNull: false,
      unique: True,
    },
    dog_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    //array형식
    dog_type: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: ["비숑","닥스훈트","믹스견","말티즈","포메라니안","푸들","스피치"],
      allowNull: True,
  },
    //array형식
    dog_sex:{
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: ["암컷","수컷"],
      allowNull: True,
  },
    dog_birthyear: {
        type: DataTypes.DATEONLY,
        allowNull: true,
  }, 
});
  DogInfos.associate = function(models) {
    DogInfos.belongsTo(models.Users,{
        onDelete:'cascade',
        foreignKey: {
            allowNull:false,
        }
    });
  };
  return DogInfos;
};