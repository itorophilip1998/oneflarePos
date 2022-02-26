const JWT = require("jsonwebtoken");
const webtoken = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
// const query = require("../helpers/queries")
const { Create, FindOne } = require("../helpers/queries");
const {
  cleanText,
  joinToObjects,
  getModel,
  createId,
  createRef,
} = require("../helpers/utils");
const { ErrorHandler } = require("../helpers/error");

const signup = async (req, res, next) => {
  const salt = Math.floor(Math.random() * 10);
  try {
    const {
      full_name,
      email,
      password: plainTextPassword,
      type,
      role,
      ...rest
    } = req.body;
    console.log(createRef());
    const hashPassword = await bcrypt.hash(plainTextPassword, salt);

    const userExists = await FindOne(getModel(cleanText(type)), [
      { email: email },
    ]);
    if (userExists.data) throw new ErrorHandler(400, "user already exists");

    // create user by type
    switch (cleanText(type)) {
      case "user":
        const newUser = await Create(User, {
          id: createId(),
          full_name: cleanText(full_name),
          email: cleanText(email),
          password: hashPassword,
          rest,
        });
        console.log(type, newUser);
        if (newUser === "ok") {
          return res
            .status(201)
            .send({ status: newUser, message: "new user created" });
        } else
          throw new ErrorHandler(
            500,
            "an error occured while creating business admin"
          );
      case "business":
        const newBusiness = await Create(getModel(type), {
          id: createId(),
          full_name: cleanText(full_name),
          email: cleanText(email),
          password: hashPassword,
          businessRef: createRef(),
          rest,
        });
        console.log(type);
        if (newBusiness === "ok") {
          return res.status(201).send({
            status: newBusiness,
            message: "new business created",
          });
        } else
          throw new ErrorHandler(
            500,
            "an error occured while creating business admin"
          );
      case "admin": //business admin can create new admins and assign them rols
        const admin = await Create(getModel(type), {
          id: createId(),
          full_name: cleanText(full_name),
          email: cleanText(email),
          password: hashPassword,
          role: role, //businessadmin
          rest,
        });
        console.log(type);
        if (admin === "ok") {
          return res.status(201).send({
            status: admin,
            message: "new admin created",
          });
        } else
          throw new ErrorHandler(500, "an error occured while creating admin");
      default:
        throw new ErrorHandler(400, "specify account type");
    }
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password: plainTextPassword } = req.body;
  let userData;

  try {
    const userExists = await Promise.all([
      await FindOne(getModel("user"), [{ email: email }, { _id: 0 }]),
      await FindOne(getModel("business"), [{ email: email }, { _id: 0 }]),
      await FindOne(getModel("admin"), [{ email: email }, { _id: 0 }]),
      await FindOne(getModel("superadmin"), [{ email: email }, { _id: 0 }]),
    ]);
    for (const resp of userExists) {
      if (resp.status === "ok") {
        userData = resp;
      }
    }
    if (!userData.data) throw new ErrorHandler(405, "user does not exists");
    const { email: user, password } = userData.data;

    if (await bcrypt.compare(plainTextPassword, password)) {
      const token = JWT.sign({ id: userData.id, username: user }, webtoken, {
        expiresIn: "1h",
      });
      console.log(joinToObjects(userData.data, "token", token));
      return res.status(200).send({
        status: "ok",
        data: joinToObjects(userData.data, "token", token),
      });
    }
    throw new ErrorHandler("an error occured");
  } catch (err) {
    next(err);
  }
};

module.exports = { signup, login };
