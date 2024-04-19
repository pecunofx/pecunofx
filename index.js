// Importa el módulo 'os' para verificar la versión de Node.js
const os = require('os');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    // Verifica la versión de Node.js
    if (os.version() !== 'v20.0.0') {
        context.log('Por favor, actualiza a Node.js 20.');
        return;
    }

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". anda a la concha de tu hermana."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
