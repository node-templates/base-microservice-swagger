'use strict';
const config = require('config');
const gulp = require('gulp');
const generate = require('gulp-swagger-codegen');

module.exports = () =>
  gulp.src([config.get('api.swaggerFile')])
    .pipe(generate(config.get("build.generateSwagger")))
    .pipe(gulp.dest('./src'));

