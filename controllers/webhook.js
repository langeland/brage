const Specification = require('../models/specification');
const Revision = require('../models/revision');
const Sequelize = require("sequelize");
const RevisionUtility = require('../util/revision');

exports.createCevision = async (req, res, next) => {
  console.log('Create new revision', req.body);
  /*
  const specification = await Specification.findOne({
    where: {
      [Sequelize.or]: [
        { identifier: req.body.identifier },
        { slug: req.body.identifier }
      ]
    }
  });
  */
  const specification = await Specification.findOne({ where: { identifier: req.body.identifier } });


  if (specification === null) {
    console.log('Specification not found');
    return res.status(404).send();
  }

  RevisionUtility.createNewRevision(
    specification,
    req.body.file,
    req.body.commit,
    req.body.version,
    req.body.releaseName,
    req.body.environment
  )

  res.status(200).send();
};
