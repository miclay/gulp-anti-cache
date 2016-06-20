# gulp-anti-cache

Using query strings to negate the effect of chche. 

## Installation

```
$ npm install gulp-anti-cache --save-dev
```

## Usage

```
var gulp = require('gulp');
var nocache = require('gulp-anti-cache');
```

#### default usage:

```
gulp.task('nocache', function() {
  gulp.src('src/*.html')
    .pipe(nocache())
    .pipe(gulp.dest('dest/'));
});
```
#### with params usage:

```
gulp.task('nocache', function() {
  gulp.src('src/*.html')
    .pipe(nocache({
    	stampKeyName: 'customkey'
    }))
    .pipe(gulp.dest('dest/'));
});
```