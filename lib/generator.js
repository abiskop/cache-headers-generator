
var moment = require('moment')
var RFC1123 = "ddd, DD MMM YYYY HH:mm:ss [GMT]"

return module.exports = {
  generateHeaders: generateHeaders
}

function generateHeaders(maxAge, cacheControl, lastModified, date) {
  var maxAgeInt = parseInt(maxAge, 10)

  return {
    'Cache-Control': 'max-age=' + maxAgeInt + ',' + cacheControl,
    'Last-Modified': moment(lastModified).format(RFC1123),
    'Date': moment(date).format(RFC1123),
    'Expires': moment(date).add({ seconds: maxAgeInt }).format(RFC1123)
  }
}
