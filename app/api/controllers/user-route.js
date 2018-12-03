import express from 'express';
import UserService from '../../dominio/services/user-service';
var router = express.Router();

const userService = new UserService();

router.route('/')
  .post(async (req, res) => {
    let create = userService.save(req.body);
    
    create.then(() => {
      res.send(JSON.stringify({"status": 201, "error": null, "response": create}));
    }).catch(() => {
      res.send(JSON.stringify({"status": 500, "error": 'Falha ao criar', "response": "Falha ao inserir"}));
    })  
  })
  .get(async (req, res) => {
    try {
      let search = await userService.findAll('USUARIO');
      res.send(JSON.stringify({"status": 200, "error": null, "response": search}));
    } catch(ex) {
      res.send(JSON.stringify({"status": 404, "error": ex, "response": 'Sem resultados'})); 
    }
  });

router.route('/:id')
  .get(async(req, res) => {
    try {
      let search = await userService.findById('USUARIO', req.params.id);
      res.send(JSON.stringify({"status": 200, "error": null, "response": search}));
    } catch(ex) {
      res.send(JSON.stringify({"status": 500, "error": ex, "response": 'Falha interna!'})); 
    }
  })

  .put(async(req, res) => {
    let updated = userService.update(req.body, req.params.id);
    
    updated.then((returned) => {
      res.send(JSON.stringify({"status": 200, "error": null, "response": returned}));
    }).catch((err) => {
      res.send(JSON.stringify({"status": 500, "error": err, "response": "Falha ao atualizar"}));
    })
  })

  .delete(async(req, res) => {
    try {
      let returned = await userService.remove('USUARIO', req.params.id);
      res.send(JSON.stringify({"status": 200, "error": null, "response": returned}));
    } catch(ex) {
      res.send(JSON.stringify({"status": 500, "error": ex, "response": "Não pode ser deletado"})); 
    }
  });

export default router;
