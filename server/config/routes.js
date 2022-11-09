const { leonesGet, leonesNuevoGet, leonesPost, leonesDetalleGet, leonesEditarGet, leonesPut, leonesDelete } = require('../controllers/leones');

module.exports = function(app) {

    app.get('/', leonesGet);
    
    app.get('/leones/nuevo', leonesNuevoGet);
    
    app.post('/leones', leonesPost);
    
    app.get('/leones/:id', leonesDetalleGet);
    
    app.get('/leones/editar/:id', leonesEditarGet);
    
    app.post('/leones/:id', leonesPut);
    
    app.post('/leones/destruir/:id', leonesDelete);
    
    app.get('*', (req, resp) => {
        resp.render('404');
    });

}
