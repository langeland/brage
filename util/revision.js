const Revision = require('../models/revision');
const crypto = require('crypto');
const hash = crypto.createHash('sha1');

exports.createNewRevision = async (specification, resourceRef, commit, version, releaseName, environment) => {

    const lastRevision = await Revision.findOne({
        where: { specification: specification.identifier },
        order: [['revisionNumber', 'DESC']]
    });

    console.log('lastRevision', lastRevision);

    if (lastRevision = undefined) {
        const nextRevisionNumber = 0;
    } else {
        const nextRevisionNumber = lastRevision.revisionNumber + 1;
    }


    Revision.create({
        specification: specification.identifier,
        revisionNumber: nextRevisionNumber,
        resourceRef: resourceRef,
        commit: commit,
        version: version,
        releaseName: releaseName,
        environment: environment
      });

  };
  