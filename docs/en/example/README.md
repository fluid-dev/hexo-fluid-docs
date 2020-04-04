---
metaTitle: Example | Hexo Fluid
meta:
  - name: description
    content: Fluid Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,docs,doc,documentation,document,guide,blog,post,article
---

# Example

## Construct

1. Install Hexo

```bash
npm install -g hexo
```

Input `hexo -v`in Command line terminal after installation.Appearing information of Hexo stands for successful installation.

Next initialize hexo, Execute the command `hexo init` in an empty folder (no files, including hidden files).

Successful catelogue structure:

```text
│  .gitignore
│  package.json
│  yarn.lock
│  _config.yml
├─node_modules
├─scaffolds
│     draft.md
│     page.md
│     post.md
├─source
│  └─_posts
│       hello-world.md
└─themes
```

2. Install fluid theme

Download [the latest release](https://github.com/fluid-dev/hexo-theme-fluid/releases)and unzip it in the themes directory, rename it fluid, then set it as follows in blog `_config.yml`: 

```yml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: fluid
```

## Config (Critical)

[Override-Configuration](/en/guide/#override-configuration) is recommended, you can You can customize config outside of the theme directory without worrying about losing configuration when updating the theme.

create `_data` directory in the source directory of blog (not source in the theme directory), then create another two config documents:

```
fluid_config.yml    # The theme configuration is modified here
fluid_static_prefix.yml # The static resource configuration is modified here
```

so there appear two config documents in the theme :

1. `/source/_data/fluid_config.yml`
2. `/themes/fluid/_config.yml`

1 Has a higher priority than 2, so the config in 1 will cover the config with the same name in 2

## Local debugging

The first time you run an application, you need install the dependencies:

```yml
# Choose one over two 
npm install

yarn install
```

(the example will use yarn as the installation tool, which can be replaced by NPM) to start the service for debugging

```bash
# choose one over three
npm run server
yarn run server
hexo s # abbreviation of hexo server.
```

## Generating

```bash
hexo clean && hexo g
```

## Minify (Alternative)

You can use [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) to minify the generated files and images

## Deployment

Here's how to deploy to GitHub Pages

Configure in the blog directory 'config.yml', refer to the following:

```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  - type: git
    repo: git@github.com:username/username.github.io.git
    branch: master
```

Upload your SSH key to the remote repository. If not, enter the username and password manually.On the terminal command line:

```bash
hexo d
```

## Theme Upgrading

### Method One

:::tip
Applicable if no code has been modified by yourself (except for configuration file)
:::

1. Backup your config files. We recommend you to use [Override-Configuration](/en/guide/#override-configuration)

2. Download the [latest release](https://github.com/fluid-dev/hexo-theme-fluid/releases), then replace the fluid directory.

### Method Two

:::tip
Applicable to cases where some codes are customized or you want to pull the master branch
:::

1. Make sure your fluid directory has git and all changes have been committed

2. Pull the master branch of fluid repo to your branch

```bash
git pull https://github.com/fluid-dev/hexo-theme-fluid.git master
```

3. Resolve code conflicts and keep your modified parts
