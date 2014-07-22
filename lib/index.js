
var generateHeaders = require('./generator').generateHeaders

var now = new Date()
var argv = require('optimist')
  .usage('Usage: $0 -m [seconds] -d [date] -l [date] -c [string]')
  .demand(['m'])
  .alias('m', 'max-age')
  .alias('d', 'date')
  .alias('l', 'last-modified')
  .alias('c', 'cache-control')
  .default('d', now)
  .default('l', now)
  .default('c', 'private')
  .argv

var headers = generateHeaders(argv.m, argv.c, argv.l, argv.d)
Object.keys(headers).forEach(function(key) {
  writeln(key + ': ' + headers[key])
})

return

function writeln(string) {
  process.stdout.write(string + '\n')
}
