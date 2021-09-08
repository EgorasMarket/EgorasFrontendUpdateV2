const Users = require("../models/Users");
module.exports = async function (req, res, next) {

    const { count } = await Users.findAndCountAll({
        where: {
            id: req.user.id,
            job_function: 'admin'
        }
    });

    if (count > 0) {
        next();
    } else {
        res.status(401).json({
            errors: [{
                msg: 'Access denied'
            }]
        });
    }


}