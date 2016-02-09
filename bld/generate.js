'use strict';
const config = require('config');
const gulp = require('gulp');
const generate = require('../../gulp-swagger-generator');

module.exports = () =>
  gulp.src([config.get('api.swaggerFile')])
    .pipe(generate(config.get("build.generateSwagger")))
    .pipe(gulp.dest('./src'));

