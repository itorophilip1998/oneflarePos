const { ErrorHandler } = require("../helpers/error");
const { getModel, createId, cleanText } = require("../helpers/utils");
const query = require("../helpers/queries");

exports.createItem = async (req, res, next) => {
  const id = createId();
  try {
    if (!req.body.type) throw new ErrorHandler(400, "no product type provided");
    if (!req.body.id) throw new ErrorHandler(400, "a unique id is required");
    const data = { ...req.body, id: id };
    const resp = await query.FindOneAndUpdate(getModel("business"), [
      { businessRef: req.query.ref },
      { $push: { products: data } },
      { new: true },
    ]);
    if (resp.status === "ok") {
      return res
        .status(201)
        .send({ status: resp.status, message: "product created successfully" });
    } else throw new ErrorHandler(500, "an error occured");
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.find = async (req, res, next) => {
  const ref = req.query.ref;
  try {
    const resp = await query.FindOne(getModel("business"), [
      { businessRef: ref },
      "products",
    ]);
    if (resp.status === "ok") {
      return res
        .status(201)
        .send({ status: resp.status, data: resp.data.products });
    } else throw new ErrorHandler(500, "an error occured");
  } catch (err) {
    next(err);
  }
};

exports.findOne = async (req, res, next) => {
  const ref = req.query.ref;
  const name = cleanText(req.query.name);
  try {
    const resp = await query.FindOne(getModel("business"), [
      { businessRef: ref },
      { products: 1, _id: 0 },
    ]);
    const product = resp.data.products.filter((data) => data.name === name);
    if (resp.status === "ok")
      return res.status(200).send({ status: "ok", data: { ...product[0] } });
    else throw new ErrorHandler(404, "Product not found");
  } catch (err) {
    next(err);
  }
  next();
};

exports.updateItem = async (req, res, next) => {
  const id = req.params.id;
  const ref = req.query.ref;
  const key = Object.keys(req.body);
  const value = Object.values(req.body);
  let counter = 0;
  try {
    const resp = await query.FindOne(getModel("business"), [
      { businessRef: ref },
      "products",
    ]);
    const product = resp.data.products.filter((data) => data.id === id);

    for (const keys of key) {
      product[0][keys] = value[counter];
      counter += 1;
    }
    console.log(product);
    const update = await query.FindOneAndUpdate(getModel("business"), [
      { businessRef: ref },
      { $set: { "products.$[elem]": product[0] } },
      { arrayFilters: [{ "elem.id": id }] },
    ]);
    console.log(product, update);
    if (update.status === "ok") {
      return res
        .status(200)
        .send({ status: "ok", message: "product updated successfully" });
    } else throw new ErrorHandler(500, "an error occured");
  } catch (err) {
    next(err);
  }
};

exports.deleteItem = async (req, res, next) => {
  const id = req.params.id;
  const ref = req.query.ref;
  try {
    const resp = await query.FindOneAndUpdate(getModel("business"), [
      { businessRef: ref },
      { $pull: { products: { id: id } } },
    ]);
    if (resp.status === "ok") {
      return res
        .status(200)
        .send({ status: "ok", message: "product deleted successfully" });
    } else throw new ErrorHandler(500, "an error occured");
  } catch (err) {
    next(err);
  }
};
