import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const images = () => {
    return app.gulp.src(app.path.src.images)
                .pipe(app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: "IMAGES",
                        messege: "Error: <%+ error.messege %>"
                    })
                ))
                .pipe(app.plugins.newer(app.path.build.images))
                .pipe(webp())
                .pipe(app.gulp.dest(app.path.build.images))
                .pipe(app.gulp.src(app.path.src.images))
                .pipe(app.plugins.newer(app.path.build.images))
                .pipe(imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    interlaced: true,
                    optimizationLevel: 0 // 0 to 7
                }))
                .pipe(app.gulp.dest(app.path.build.images))
                .pipe(app.gulp.src(app.path.src.svg))
                .pipe(app.gulp.dest(app.path.build.images))
                .pipe(app.plugins.browsersync.stream());
}