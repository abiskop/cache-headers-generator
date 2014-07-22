cache-headers-generator
=======================

stupid simple command line tool that generates HTTP caching headers

###Usage

```
Usage: node ./lib/index.js -m [seconds] -d [date] -l [date] -c [string]

Options:
  -m, --max-age        [required]
  -d, --date           [default: "2014-07-22T09:46:22.494Z"]
  -l, --last-modified  [default: "2014-07-22T09:46:22.494Z"]
  -c, --cache-control  [default: "private"]
```
