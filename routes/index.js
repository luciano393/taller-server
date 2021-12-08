const express = require('express');
const worksController = require('../controllers/worksController');
const router = express.Router();

module.exports = function() {

    router.get('/works',
        worksController.getWorks
    )

    router.post('/works',
         worksController.newWork
    )

    router.get('/works/:id',
        worksController.getWork
    )

    router.put('/works/:id',
        worksController.putWork
    )

    router.delete('/works/:id',
        worksController.deleteWork
    )

    return router;
}