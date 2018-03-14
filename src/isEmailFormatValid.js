const emailAddresses = require('email-addresses');
const every = require('lodash/every');
const head = require('lodash/head');
const isEmpty = require('lodash/isEmpty');
const last = require('lodash/last');

const REGEXP_BANNED_LOCAL_CHARS = /[^a-zA-Z0-9\+\-\?\.=_]/;
const REGEXP_BANNED_DOMAIN_CHARS = /[^a-zA-Z0-9\.\-]/;
const REGEXP_INVALID_DOMAIN_PART = /^[0-9]*$/;
const REGEXP_REQUIRED_DOMAIN_CHARS = /[a-zA-Z0-9]/;

function isEmailFormatValid(email) {
  if (isEmpty(email)) {
    return false;
  }

  const parsedEmail = emailAddresses.parseOneAddress(email);
  if (!parsedEmail
    || parsedEmail.address !== email
    || REGEXP_BANNED_LOCAL_CHARS.test(parsedEmail.local)
    || REGEXP_BANNED_DOMAIN_CHARS.test(parsedEmail.domain)
  ) {
    return false;
  }

  const parsedDomainParts = parsedEmail.domain.split('.');
  if (parsedDomainParts.length < 2) {
    return false;
  }

  return every(parsedDomainParts, domainPart => (
    REGEXP_REQUIRED_DOMAIN_CHARS.test(domainPart)
    && REGEXP_REQUIRED_DOMAIN_CHARS.test(head(domainPart))
    && REGEXP_REQUIRED_DOMAIN_CHARS.test(last(domainPart))
    && !REGEXP_INVALID_DOMAIN_PART.test(domainPart)
  ));
}

module.exports = isEmailFormatValid;
