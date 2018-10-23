const ghp = require('gh-pages');
const shell = require('shelljs');

shell.echo('Building the slides....');
const build = shell.exec(`yarn build`);

if (build.code === 0) {
  shell.echo('Finished Building');
  shell.echo('Publishing to gh-pages.....');
  ghp.publish('dist', () => {
    console.log('Finished Publishing....');
  });
} else {
  shell.echo(`Building Failed with code${build.code}`);
}
