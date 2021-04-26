const express = require('express');
const router = express.Router();

//create routes
router.get('/', (req, res) => {
    res.send('server is up and running');
});

//export router
module.exports = router;