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

###Output

Will output e.g. something like

```
Cache-Control: max-age=31536000,public
Last-Modified: Tue, 22 Jul 2014 11:47:31 GMT
Date: Tue, 22 Jul 2014 11:47:31 GMT
Expires: Wed, 22 Jul 2015 11:47:31 GMT
```
