const Account = require('../models/Account');

module.exports = {
    async store(req, res) {
       const { name } = req.body;

       let account = await Account.findOne({ name });

       if(!account) {
          account = await Account.create({ name });
       }

       return res.json(account);
    }
};