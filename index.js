const { Client } = require('pg');

const config = {
    user:'postgres',
    password:'postgres',
    host:'localhost',
    port: 5432,
    database:'fm-test'
};

const user = [
    {
    first_name: 'Tom',
    last_name: 'Cat',
    email: 'Tomandjerry@gmail.com',
    is_male: true,
    birthday: '1939-03-01',
    height: 1.02,
},
{
    first_name: 'Jerry',
    last_name: 'Mouse',
    email: 'Tomandjerry@gmail.com',
    is_male: true,
    birthday: '1939-05-01',
    height: 1.01,
},
{
    first_name: 'Spike',
    last_name: 'Dog',
    email: 'Tomandjerry@gmail.com',
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
        VALUES
            ('${user.first_name}', '${user.last_name}', '${user.email}', '${user.is_male}', '${user.birthday}', '${user.height}');
    `);
    console.log(res);
    await client.end();
}

function mapUsers(users){
    return users
        .map()
        .join()
}