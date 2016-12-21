# Standalone Patternlab w/ F1 Gesso

### Gesso
Gesso is a [Sass](http://sass-lang.com/)-based starter theme that outputs
accessible HTML5 markup. It uses a mobile-first responsive approach and
leverages [SMACSS](https://smacss.com/) for style organization. This
encourages a component-based approach to theming through the creation of
discrete, reusable UI elements.

# Getting Started
1. Clone this repository
2. run 'npm install'
3. run 'grunt'


### Pattern Lab installation

For now I've installed the [Gesso Twig starter kit](https://github.com/forumone/starterkit-twig-drupal-gesso), and ripped out a bunch of the Drupal platform related JS.

But you should be able to replace this with any [PHP Patternlab Starter Kit](http://patternlab.io/download.html) you want here, and long as you put it in a directory named 'pattern-lab', so that the grunt tasks will work.

<!-- The included Grunt tasks look for an instance of the Drupal standard edition of
Pattern Lab and [the Gesso Twig starter kit](https://github.com/forumone/starterkit-twig-drupal-gesso)
in a subdirectory of the theme called 'pattern-lab'.  The Grunt build task will
skip building Pattern Lab if this directory is not found.

To install Pattern Lab, run the following Composer command in
the theme directory.

```
$ composer create-project pattern-lab/edition-drupal-standard pattern-lab
```

When prompted, select /forumone/starterkit-twig-drupal-gesso as the starterkit.

If prompted, select 'r' to overwrite existing /source/ files. -->


### Compiling Sass

[LibSass](http://sass-lang.com/libsass) is required to compile the Sass into
CSS. Gesso includes Grunt tasks to compile the CSS/Pattern Lab files and to
watch them for changes.  To use these tasks, run the following NPM command in
the theme folder (Windows users may need to include the `--no-bin-links` flag at
the end of the command).

```
npm install
```

To run the Grunt build task, run

```
grunt
```


### Build Artifacts

By default, the compiled Pattern Lab and Sass files (e.g., /pattern-lab/public/
and /css/) are ignored by Git as these files are built during deployment.
To change this, edit the included .gitignore file.


### Sass/Grunt dependencies

* [Breakpoint](http://breakpoint-sass.com): Easy to write media queries.

* [Sass](http://sass-lang.com): CSS on steroids. Adds nested rules, variables,
mixins, selector inheritance, and more.

* [Sass Globbing](https://github.com/DennisBecker/grunt-sass-globbing): Adds glob-
based imports to Sass.

* [Singularity](http://singularity.gs): Grid-based layout system.

* [SVG2PNG](https://github.com/dbushell/grunt-svg2png): Rasterizes SVG to PNG images using PhantomJS.

* [Autoprefixer](https://github.com/postcss/autoprefixer): Adds necessary browser CSS property prefixes during Sass compilation.
