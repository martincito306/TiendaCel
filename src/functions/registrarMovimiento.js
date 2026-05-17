const { app } = require('@azure/functions');

app.http('registrarMovimiento', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',

    handler: async (request, context) => {

        let body = {};

        try {

            body = await request.json();

        } catch (e) {

            try {

                const text = await request.text();

                body = JSON.parse(text);

            } catch (err) {

                body = {};
            }
        }

        context.log('==============================');
        context.log('Movimiento recibido desde TiendaCel');
        context.log(body);
        context.log('==============================');

        return {
            status: 200,

            jsonBody: {
                ok: true,
                mensaje: 'Movimiento registrado en Azure Functions',
                sistema: body.sistema || 'TiendaCel',
                tipo: body.tipo || 'sin_tipo',
                fecha: body.fecha || new Date().toISOString(),
                datos: body.datos || {}
            }
        };
    }
});