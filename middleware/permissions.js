//is admin, all the different types
// has permissions
const { ErrorHandler } = require("../helpers/error");
const query = require("../helpers/queries");
const { getModel } = require("../helpers/utils");

const canCreate = async (req, res, next) => {
  const id = req.params.id;
  try {
    // const resp = await query.FindOne(getModel("admin"), [{ id: id }]);
    console.log("middleware");
  } catch (err) {
    next(err);
  }
  next();
};

module.exports = { canCreate };
