const { Client } = require('pg');

const config = {
    user:'postgres',
    password:'postgres',
    host:'localhost',
    port: 5432,
    database:'fm-test'
};

const users = [
    {
    first_name: 'Tom',
    last_name: 'Cat',
    email: 'Tomanjerry@gmail.com',
    is_male: true,
    birthday: '1939-03-01',
    height: 1.02,
},
{
    first_name: 'Jerry',
    last_name: 'Mouse',
    email: 'Tomandmouse@gmail.com',
    is_male: true,
    birthday: '1939-05-01',
    height: 1.01,
},
{
    first_name: 'Spike',
    last_name: 'Dog',
    email: 'Tom&jerry@gmail.com',
    is_male: true,
    birthday: '1939-03-01',
    height: 1.08,
}
]

const client = new Client(config);
start();

async function start(){
    await client.connect();
    const res = await client.query(`
        INSERT INTO "users"("first_name","last_name","email","is_male","birthday","height")
        VALUES ${mapUsers(users)};
    `);
    console.log(res);
    await client.end();
}

function mapUsers(users){
    return users
        .map(
            user => `('${user.first_name}', '${user.last_name}', '${user.email}', '${user.is_male}', '${user.birthday}', '${user.height}')`
        )  
        .join(',')
}
//console.log(mapUsers(users));