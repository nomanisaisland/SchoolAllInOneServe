const express = require('express');
const app = express();
const router = express.Router();
const { getImfor } = require('../apis/getImfor');
app.use(router);

//
router.get('/',(req, res, next) => {
    getImfor(req, res, next);
})

module.exports = router;