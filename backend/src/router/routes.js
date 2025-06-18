const express= require('express');
const { getnotes, postnotes, updatenotes, deletenotes, getnotebyid } = require('../controllers/notescontroller');
const router = express.Router();
router.get('/',getnotes)
router.get('/:id',getnotebyid)
router.post('/',postnotes)
router.put('/:id',updatenotes)
router.delete('/:id',deletenotes)

module.exports=router;