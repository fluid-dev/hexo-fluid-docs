---
metaTitle: Advance | Hexo Fluid
meta:
  - name: description
    content: Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,docs,doc,documentation,document,guide,blog,post,article
---

# Advance

## Minify

You can use [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier) to minify the generated files and images

## Deployment

Here's how to deploy to GitHub Pages

Configure in the blog directory 'config.yml', refer to the following:

```yaml
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

### Faster Loading

1. For all the users, it is the effective way to use public CDN for the third-party lib, you can add it into `static_prefix` in **theme config**；

2. You can use OSS and bind your domain, then upload the files in the folder `public` to your OSS.

3. For your custom images, especially the big banner picture, you can use [tinypng](https://tinypng.com) to compress them, and upload them to your private CDN.
