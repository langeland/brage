const revisions = [];

exports.getSpecifications = (req, res, next) => {
  res.render('specifications/get-specifications');
};

exports.getSpecification = (req, res, next) => {
  res.render('specification/get-specifications');
};

