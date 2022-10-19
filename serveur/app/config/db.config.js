module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "mdpprom13",
    DB: "projetMinistere",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
// npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
