module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Project configuration.
    grunt.initConfig({
        uglify: {
            dependencies: {
                files: {
                    'dist/js/dep.js': [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-animate/angular-animate.js'
                    ]
                }
            },
            main: {
                files: {
                    'dist/js/app.js': [
                        'src/app/app.js'
                    ]
                }
            }
        },
        concat: {
            appCss: {
                files: {
                    'dist/css/app.css': [
                        'src/**/*.css'
                    ]
                }
            },
            depCss: {
                files: {
                    'dist/css/dep.css': [
                        'bower_components/angular-loading-bar/build/loading-bar.css',
                        'bower_components/bootstrap/dist/css/bootstrap.css'
                    ]
                }
            },
            appJs: {
                files: {
                    'dist/js/app.js': [
                        'src/app/app.js',
                        'src/**/*.js'
                    ]
                }
            },
            depJs: {
                files: {
                    'dist/js/dep.js': [
                        'bower_components/angular/angular.js',
                        'bower_components/angular-animate/angular-animate.js',
                        'bower_components/angular-sanitize/angular-sanitize.js',
                        'bower_components/angular-resource/angular-resource.js',
                        'bower_components/angular-jwt/dist/angular-jwt.js',
                        'bower_components/a0-angular-storage/dist/angular-storage.js',
                        'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                        'bower_components/angular-loading-bar/build/loading-bar.js',
                        'bower_components/angular-ui-router/release/angular-ui-router.js',
                        'bower_components/jquery/dist/jquery.js'
                    ]
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/css/main.css': 'src/scss/app.scss'
                }
            }
        },
        copy: {
            main: {
                cwd: 'src/',
                src: '**/*.html',
                dest: 'dist/',
                expand: true
                //flatten: true
            },
            fonts: {
                cwd: 'bower_components/themify-icons/fonts',
                src: '**/*',
                dest: 'dist/fonts',
                expand: true,
                flatten: true
            },
            images: {
                cwd: 'src/assets/images/',
                src: '**/*',
                dest: 'dist/assets/images',
                expand: true
            }
        },
        watch: {
            compileScss: {
                files: 'src/**/*.scss',
                tasks: ['sass']
            },
            compileJs: {
                files: 'src/**/*.js',
                tasks: ['concat:appJs']
            },
            compileCss: {
                files: 'src/**/*.css',
                tasks: ['concat:appCss']
            },
            copyPage: {
                files:  'src/**/*.html',
                tasks: ['copy:main']
            },
            copyImages: {
                files: 'src/images/**/*',
                tasks: ['copy:images']
            },
            copyIndex: {
                files: 'src/index.html',
                tasks: ['copy:mainIndex']
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('init', ['concat:depJs', 'concat:appJs', 'concat:depCss', 'concat:appCss', 'copy', /*'sass',*'copy:copyPage'*/, 'copy:images', 'concat', 'copy:fonts']);
};
