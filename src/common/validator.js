// src/common/validator.js
import { validate as isUuid } from 'uuid';

export function validateUuidParam(paramName, source = 'params') {
  return (req, res, next) => {
    const val = source === 'params'
      ? req.params[paramName]
      : req.query[paramName] || req.body[paramName];

    if (!val || !isUuid(val)) {
      return res
        .status(400)
        .json({ error: `Invalid ${paramName} (${source})` });
    }
    next();
  };
}

export function validateBody(requiredFields = []) {
  return (req, res, next) => {
    for (const f of requiredFields) {
      if (req.body[f] == null) {
        return res
          .status(400)
          .json({ error: `Field "${f}" is required in body` });
      }
    }
    next();
  };
}

export function validateQuery(requiredFields = []) {
  return (req, res, next) => {
    for (const f of requiredFields) {
      if (req.query[f] == null) {
        return res
          .status(400)
          .json({ error: `Query parameter "${f}" is required` });
      }
    }
    next();
  };
}