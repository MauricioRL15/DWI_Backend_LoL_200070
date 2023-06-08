const {Router} = require('express');
const campeonesController = require ('../controllers/campeones.controller');
const router = Router();

router.get('/', campeonesController.obtenerCampeones);
router.get("/:numcamp", campeonesController.obtenerCampeon);
router.put('/actualizar/:numcamp', campeonesController.actualizarCampeon);
router.delete('/delete/:numcamp', campeonesController.eliminarCampeon);
router.post('/insertar', campeonesController.insertarCampeon);

module.exports = router;