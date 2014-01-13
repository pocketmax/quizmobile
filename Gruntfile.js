module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: true
			},
			files: {
				src: ['app/**/*.js']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			bla: {
				src: ['app/model/*.js','app/store/*.js','app/view/*.js','app/controller/*.js','app/main.js'],
				dest: 'dist/app.min.js'
			}
		},
		clean: {
			// Clean any pre-commit hooks in .git/hooks directory
			hooks: ['.git/hooks/pre-commit']
		},
		// Run shell commands
		shell: {
			hooks: {
				// Copy the project's pre-commit hook into .git/hooks
				command: 'cp git-hooks/pre-commit .git/hooks/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-shell');

	grunt.registerTask('default', ['jshint','uglify']);
	grunt.registerTask('hookmeup', ['clean:hooks','shell:hooks']);

};
