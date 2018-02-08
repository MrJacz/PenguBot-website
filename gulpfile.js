const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

gulp.task("sass:build", () => gulp.src(["src/scss/*.scss", "node_modules\\bulma\\bulma.sass"])
    .pipe(sass())
    .pipe(gulp.dest("build/css")));

gulp.task("sass:dev", () => gulp.src(["src/scss/*.scss", "node_modules\\bulma\\bulma.sass"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream()));

gulp.task("js:build", () => gulp.src(["node_modules/jquery/dist/jquery.min.js", "src/js/*.js", "!build/js/*.min.js"])
    .pipe(gulp.dest("build/js")));

gulp.task("js:dev", () => gulp.src(["node_modules/jquery/dist/jquery.min.js", "!src/js/*.min.js"])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream()));

gulp.task("fonts:build", () => gulp.src("node_modules/font-awesome/fonts/*").pipe(gulp.dest("build/fonts")));
gulp.task("fonts:dev", () => gulp.src("node_modules/font-awesome/fonts/*").pipe(gulp.dest("src/fonts")));
gulp.task("fa:build", () => gulp.src("node_modules/font-awesome/css/font-awesome.min.css").pipe(gulp.dest("build/css")));
gulp.task("fa:dev", () => gulp.src("node_modules/font-awesome/css/font-awesome.min.css").pipe(gulp.dest("src/css")));

gulp.task("serve", () => {
    browserSync.init({ server: "./src" });

    gulp.watch(["node_modules\\bulma\\bulma.sass", "src/scss/*.scss"], ["sass:dev"]);
    gulp.watch(["node_modules/jquery/dist/jquery.min.js", "src/js/*.js"], ["js:dev"]);
    gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("build", ["sass:build", "js:build", "fonts:build", "fa:build"], () => {
    gulp.src(["src/*.html"])
        .pipe(gulp.dest("build/"));
});

gulp.task("dev", ["sass:dev", "js:dev", "fonts:dev", "fa:dev", "serve"]);

gulp.task("default", ["dev"]);
