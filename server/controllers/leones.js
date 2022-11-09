const Animal = require('../model/animal');

const leonesGet = (req, resp) => {
    
    Animal.find()
        .then(animals => {
            console.log('animals', animals);
            resp.render('index', { animals });
        })
        .catch(error => {
            console.log('error', error);
            resp.render('500');
        });

}

const leonesNuevoGet = (req, resp) => {
    resp.render('createForm');
}

const leonesPost = (req, resp) => {
    console.log('req', req.body);

    const { name, weight, age, gender } = req.body;

    const animal = new Animal();
    animal.name = name;
    animal.weight = weight;
    animal.age = age;
    animal.gender = gender;

    animal.save()
        .then(newUser => {
            console.log('newUser', newUser),
                resp.redirect('/');
            resp.end();
        })
        .catch(error => {
            console.log('error', error);
            resp.render('500');
            resp.end();
        });

}

const leonesDetalleGet = (req, resp) => {
    
    const { id } = req.params;

    Animal.findById(id)
        .then(animal => {
            resp.render('detalle', { animal });
        })
        .catch(error => {
            console.log('error', error);
        });

}

const leonesEditarGet = (req, resp) => {
    
    const { id } = req.params;

    Animal.findById(id)
        .then(animal => {
            resp.render('editar', { animal, modificado: false });
        })
        .catch(error => {
            console.log('error', error);
            resp.end();
        });

}

const leonesPut = async (req, resp) => {
    
    try {

        const { name, weight, age, gender } = req.body;

        console.log('age', age);

        const { id } = req.params;

        let animal = await Animal.findByIdAndUpdate(id, { name, weight, age, gender }, { new: true })

        resp.render('editar', { animal, modificado: true });

    } catch (error) {

        console.log('error', error);
        resp.render('500');

    }

}

const leonesDelete = async (req, resp) => {
    
    try {

        const { id } = req.params;

        let animal = await Animal.findById(id);

        animal.remove();

        resp.redirect('/');

    } catch (error) {

        console.log('error', error);
        resp.render('500');
        resp.end();

    }


}

module.exports = {
    leonesGet,
    leonesNuevoGet,
    leonesPost,
    leonesDetalleGet,
    leonesEditarGet,
    leonesPut,
    leonesDelete
}