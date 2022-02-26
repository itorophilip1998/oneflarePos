const Create = async (model, data) => {
  let status;
  const _model = new model(data);
  await _model
    .save()
    .then(() => {
      status = "ok";
    })
    .catch((err) => {
      status = "error";
      console.log(err);
    });
  console.log(status);
  return status;
};

// const FindMany = async (model, [...filters]) => {
//   let status;
//   console.log(filters);
//   const res = await model
//     //mongoose disallows spreading aggregate filters
//     .aggregate(filters)
//     .exec()
//     .then((dta) => {
//       if (!dta) {
//         status = "error";
//         return dta;
//       }
//       console.log(dta);
//       status = "ok";
//       return dta;
//     })
//     .catch((err) => {
//       status = "error";
//       return err;
//     });

//   console.log(status);
//   if (status !== "") return { status: status, data: res };
//   else return { status: "error", data: "an error occured please try again" };
// };

const Find = async (model, [...filters]) => {
  let status;

  const res = await model
    .find(...filters)
    .clone()
    .lean()
    .exec()
    .then((dta) => {
      if (!dta) {
        status = "error";
        return dta;
      }
      status = "ok";
      return dta;
    })
    .catch((err) => {
      status = "error";
      return err;
    });

  console.log(status);
  if (status !== "") return { status: status, data: res };
  else return { status: "error", data: "an error occured please try again" };
};

const FindOne = async (model, [...filters]) => {
  let status;
  const res = await model
    .findOne(...filters)
    .clone()
    .lean()
    .exec()
    .then((dta) => {
      if (!dta) {
        status = "error";
        return dta;
      }
      status = "ok";
      return dta;
    })
    .catch((err) => {
      status = "error";
      return err;
    });

  console.log(status);
  if (status !== "") return { status: status, data: res };
  else return { status: "error", data: "an error occured please try again" };
};

const FindOneAndUpdate = async (model, [...filters]) => {
  //using a thenable because async await sometimes saves twice in one db query
  let status;

  const res = await model
    .findOneAndUpdate(...filters)
    .clone()
    .lean()
    .exec()
    .then((dta) => {
      if (!dta) {
        status = "error";
        return dta;
      }
      status = "ok";
      return dta;
    })
    .catch((err) => {
      status = "error";
      return err;
    });

  console.log(status);
  if (status !== "") return { status: status, data: res };
  else return { status: "error", data: "an error occured please try again" };
};

const Remove = async (model, [...filters]) => {
  // let status;
  // const res = await model
  //   .findOneAndDelele(...filters)
  //   .clone()
  //   .lean()
  //   .exec()
  //   .then((dta) => {
  //     if (!dta) {
  //       status = "error";
  //       return dta;
  //     }
  //     status = "ok";
  //     return dta;
  //   })
  //   .catch((err) => {
  //     status = "error";
  //     return err;
  //   });

  // console.log(status);
  // if (status !== "") return { status: status, data: res };
  // else return { status: "error", data: "an error occured please try again" };
  console.log("deleted");
};
//updatemany
// deletemany

module.exports = { Create, Find, FindOne, FindOneAndUpdate, Remove };
