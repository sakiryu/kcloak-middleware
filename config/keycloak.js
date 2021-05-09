import 'dotenv/config'
import KcAdminClient from 'keycloak-admin';
const keycloak = new KcAdminClient();

keycloak.setConfig({
    baseUrl: process.env.URL_BASE,
    realmName: process.env.REALM_NAME,
});

export default keycloak;
