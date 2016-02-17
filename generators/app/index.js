'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the solid ' + chalk.red('Manati Drupal Starter Kit') + ' generator!'
    ));

    var prompts = [{
      name: 'humanName',
      message: 'What\'s your app human name?',
      default: 'Manati'
    }, {
      name: 'appName',
      message: 'What\'s your app machine name?',
      default: function (props) {
        return _.snakeCase(props.humanName);
      }
    }, {
      type: 'confirm',
      name: 'confirm',
      message: 'Please confirm generation',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      this.props.humanName = props.humanName;
      this.props.appName = props.appName;
      done();
    }.bind(this));
  },

  writing: {
    rootFiles: function () {
      this.fs.copyTpl(
        this.templatePath('_aquifer.json'),
        this.destinationPath('aquifer.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_behat.yml'),
        this.destinationPath('behat.yml'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_circle.yml'),
        this.destinationPath('circle.yml'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_wercker.yml'),
        this.destinationPath('wercker.yml'),
        this.props
      );
      this.fs.copy(
        this.templatePath('composer.json'),
        this.destinationPath('composer.json')
      );
      this.fs.copy(
        this.templatePath('composer.lock'),
        this.destinationPath('composer.lock')
      );
      this.fs.copy(
        this.templatePath('drupal.make.yml'),
        this.destinationPath('drupal.make.yml')
      );
      this.fs.copyTpl(
        this.templatePath('_example.config.yml'),
        this.destinationPath('config.yml'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_example.config.yml'),
        this.destinationPath('example.config.yml'),
        this.props
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        this.props
      );
      this.fs.copy(
        this.templatePath('Vagrantfile'),
        this.destinationPath('Vagrantfile')
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('gitattributes'),
        this.destinationPath('.gitattributes')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    },
    projectFolders: function () {
      this.fs.copy(
        this.templatePath('artifacts/gitkeep'),
        this.destinationPath('artifacts/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('build/gitkeep'),
        this.destinationPath('build/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('files/gitkeep'),
        this.destinationPath('files/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('html/gitkeep'),
        this.destinationPath('html/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('patches/gitkeep'),
        this.destinationPath('patches/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('root/gitkeep'),
        this.destinationPath('root/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('root/htaccess'),
        this.destinationPath('root/.htaccess')
      );
      this.fs.copy(
        this.templatePath('root/gitignore'),
        this.destinationPath('root/.gitignore')
      );
      this.fs.copy(
        this.templatePath('modules/custom/gitkeep'),
        this.destinationPath('modules/custom/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('modules/features/gitkeep'),
        this.destinationPath('modules/features/.gitkeep')
      );
      this.fs.copy(
        this.templatePath('circle'),
        this.destinationPath('circle')
      );
      this.fs.copy(
        this.templatePath('drush'),
        this.destinationPath('drush')
      );
      this.fs.copyTpl(
        this.templatePath('wercker'),
        this.destinationPath('wercker'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('docs'),
        this.destinationPath('docs'),
        this.props
      );
      this.fs.copy(
        this.templatePath('files'),
        this.destinationPath('files')
      );
      this.fs.copy(
        this.templatePath('gulp-tasks'),
        this.destinationPath('gulp-tasks')
      );
      this.fs.copy(
        this.templatePath('html'),
        this.destinationPath('html')
      );
      this.fs.copy(
        this.templatePath('modules'),
        this.destinationPath('modules')
      );
      this.fs.copyTpl(
        this.templatePath('profiles/manati'),
        this.destinationPath('profiles/' + this.props.appName),
        this.props
      );
      this.fs.copy(
        this.templatePath('provisioning'),
        this.destinationPath('provisioning')
      );
      this.fs.copyTpl(
        this.templatePath('scripts'),
        this.destinationPath('scripts'),
        this.props
      );
      this.fs.copy(
        this.templatePath('settings'),
        this.destinationPath('settings')
      );
      this.fs.copy(
        this.templatePath('tests'),
        this.destinationPath('tests')
      );
      this.fs.copy(
        this.templatePath('themes'),
        this.destinationPath('themes')
      );
      this.fs.copy(
        this.templatePath('themes/custom/gitkeep'),
        this.destinationPath('themes/custom/.gitkeep')
      );
    },
    renameFilesAndFolders: function () {
      this.fs.move('circle/_manati', 'circle/' + this.props.appName);
      this.fs.move('circle/_manati.aliases.drushrc.php', 'circle/' + this.props.appName+'.aliases.drushrc.php');

      this.fs.move('wercker/_manati.dev.conf', 'wercker/' + this.props.appName+'.dev.conf');
      this.fs.move('wercker/_manati.aliases.drushrc.php', 'wercker/' + this.props.appName + '.aliases.drushrc.php');

      this.fs.move('docs/_build.md', 'docs/build.md');

      this.fs.move('profiles/' + this.props.appName + '/_manati.info', 'profiles/' + this.props.appName+'/' + this.props.appName + '.info');
      this.fs.move('profiles/' + this.props.appName + '/_manati.install', 'profiles/' + this.props.appName + '/' + this.props.appName + '.install');
      this.fs.move('profiles/' + this.props.appName + '/_manati.profile', 'profiles/' + this.props.appName + '/' + this.props.appName + '.profile');

      this.fs.move('scripts/_manati_local_features_test.sh', 'scripts/' + this.props.appName + '_local_features_test.sh');
      this.fs.move('scripts/_manati_local_install.sh', 'scripts/' + this.props.appName + '_local_install.sh');
    }

  },

  install: function () {
    if (!this.options.skipInstall) {
      this.npmInstall();
      this.spawnCommand('composer', ['install']);
    } else {
      this.log('Run npm install && composer install to start working');
    }
  }
});
