import gulpSass from 'gulp-sass';
import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import terser from 'gulp-terser';
import plumber from 'gulp-plumber';

import rollup from '@rollup/stream';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const sass = gulpSass(dartSass);

export function js() {
    return rollup({
        input: './src/js/app.js',
        plugins: [
            nodeResolve(),
            commonjs()
        ],
        output: {
            format: 'es'
        }
    })
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(plumber())
        .pipe(terser())
        .pipe(dest('./build/js'));
};

export function css() {
    return src('./src/scss/style.scss', { sourcemaps: true })
        .pipe(plumber())
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(dest('./build/css', { sourcemaps: '.' }));
};

export function dev() {
    watch('./src/scss/**/*.scss', css);
    watch('./src/js/**/*.js', js);
};

export default series(js, css, dev);