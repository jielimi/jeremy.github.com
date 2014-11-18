//包装函数 wrapper function
module.exports = function(grunt){
    //初始化配置对象
    grunt.initConfig({
        browserify: {
            js:{
                src: 'app/app.js',
                dest: 'app/app-pro.js'
            }
        },
        uglify: {
            bulid: {
                src: 'app/app-pro.js',
                dest: 'app/app-pro.js'
            }
        }
    });

    //加载对应的插件
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //部署任务，最重要的是 default 任务

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('default',['browserify','uglify']);
}