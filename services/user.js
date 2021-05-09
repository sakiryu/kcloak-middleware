import 'dotenv/config'
import keycloak from '../config/keycloak';
import server from '../config/server';

server.get('/auth', async(req, res) => {
    await keycloak.auth({
        username: req.body.username,
        password: req.body.password,
        grantType: 'password',
        clientId: req.body.clientId,
        totp: '123456',
        clientSecret: req.body.secret
    });

    res.status(200).send({
        accessToken: keycloak.accessToken,
        refreshToken: keycloak.refreshToken
    });
});

server.post('/users', async(req, res) => {
    const user = await keycloak.users.create(req.body.user);
    res.send(user);
});

server.patch('/users', async(req, res) => {
    const user = await keycloak.users.update({ id: req.body.id }, req.body.user);
    res.send(user);
});

server.put('/users', async(req, res) => {
    const user = await keycloak.users.update({ id: req.body.id }, req.body.user);
    res.send(user);
});

server.get('/users', async(req, res) => {
    const users = await keycloak.users.find();
    res.send(users);
});

server.get('/users/:id', async(req, res) => {
    const user = await keycloak.users.findOne({ id: req.params.id });
    res.send(user);
});

server.delete('/users', async(req, res) => {
    await keycloak.users.del({ id: req.body.id });
    res.status(200).send();
});

export default server;
