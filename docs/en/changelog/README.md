---
metaTitle: Changelog | Hexo Fluid
meta:
  - name: description
    content: Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fulid,docs,doc,documentation,document,guide,blog,post,article
---

# Changelog

### 2020/2/12

- Rewrite the parallax scroll

### 2019/12/19

- Add mandatory HTTPS functionality
- Fix BUG of searching function 

### 2019/12/14

- Thanks to the Japanese configuration for theme from [@KiritoXF](https://github.com/KiritoXF)
- Thanks to the Public security record icon from [@ss-xiong](https://github.com/ss-xiong) 

### 2019/12/08

- Thanks to the following function codes from [@juukee](https://github.com/juukee)
- Add (free) comment plugin
- Add (Livere) commment plugin
- Add (daovoice）online chat function

### 2019/12/05

- Toc increasing scrolling effect
- fixe problem that clicking on the category tags leads to no changes on pages.
- temporarily hides the count of category tag 
- fix several known bugs


### 2019/11/03

- Thanks to a lot of advices from [@julydate](https://github.com/julydate)
  The following functions are realized by her codes 

- increase the page number for turning pages
- support more website statistics
- optimize the loading of the （disqus） comment area
- increase the word count/reading time


### 2019/10/29

- Add support for LaTeX syntax formulas

### 2019/10/26

- Add WeChat QR code hover box
- Add a smooth scrolling effect
- Increase PV and UV statistics

### 2019/10/20

- Increase Google statistics configuration
- Line Numbers can be turned off by a Hexo configuration

### 2019/10/14

- Fixed banners do not work in iOS and Safari environments anymore
- Adjusting the interval between the title and the date

### 2019/9/17

- Replace favicon with a new one 
- Add new function of picture lazy loading
- Optimize abstract on home page
### 2019/9/13

- Fix loading problem of valine
- Remove the top progress bar
- Unified default banner img 
- Translate README into English

### 2019/9/11

- Add `_static_prefix.yml` as (URL source) individual config 
- Remove `source_base_path` config items
- Add config item `about.md_path` to specify the path to about.md

### 2019/9/10

- Add scroll down and top buttons
- Optimize navigation bar configuration


### 2019/9/9

- Change name to Fluid and migrate to Fluid-dev organization
- Add a set of configuration items' post_meta 'to configure the visibility of some elements in the home page


### 2019/9/3

- Add a configuration item `source_base_path` to configure the parent path of the resource file
- Add overwrite configuration function to completely resolve configuration conflicts during upgrade
- `zh_cn.yml` is changed to `zh-cn.yml`
- Fixed about. Md path reference problem

### 2019/8/30

- Support i18n (zh-hans,en)
- Repair #63

### 2019/8/22

- New Utterances and Gitalk comment system
- New local search function

### 2019/8/17

- Add the loading progress bar in the upper right corner of the page
- Add a configuration item to adjust the theme color
- Optimize some styles


### 2019/8/15

- Refactor all custom CSS using stylus
- Add label archive, categorize archive, and reconstruct archive page


### 2019/8/9

- Mobile adaption, adjust the left and right sides of the article and TOC
- Add shadow effect to article images
- Split page attribute
- Add 404 page

### 2019/8/2

- Add new custom features on about page 
- Adjust the configuration of the about page icon
- Increase baidu statistics
- Adjust slogan and title
- Adjust the priority of code highlighting styles
- Mobile optimization


### 2019/8/1

- Add subtitle typewriter effect
- Optimize the anchor effect in the article page
- At the bottom of the article page, add HTML support for the custom area, you can customize the display appreciation code and other contents
- Optimize the configuration file and directory structure
- Package upgraded and moved locally
### 2019/7/31

Combined with @zkqiang's optimization recommendations:
- Article page style is changed as  Github style
- Add footer filing information
- Optimize the configuration file structure
- Page detail optimization
### 2019/6/6

- Improve archive rendering logic

### 2019/3/15

- The redesign is basically completed. a lot of thanks to [@zhugaoqi](https://github.com/zhugaoqi) for the design guidance;
- Replace all third-party libraries and pictures with CDN references to greatly reduce the size of the warehouse;
- Redesign archive rendering logic;
- Unified article page layout, new article copyright statement;
- Streamlined pages, configuration items;
- The old version gradually gives up maintenance, and the code is archived in the 'v0.9' branch;

### 2019/1/28

1. `_config.yml` structure has been greatly changed, and the image path has been unified relative to the root directory
2. The height of the top image of the index, archive, post, about page can be customized (0-100)
3. The top image of the article page can be set uniformly or set separately in the article.Priority: banner_img property > topic configuration within the article
4. Add a new article page layout, optional in the configuration file (post.layout)
5. New default summary function, can be configured to open, default word count.Priority: <!-- more --> sets the > theme configuration
6. you can customize whether to display the date and tags of the first page articles (@for those who like the first page to list only the title of the article)
7. Optimize toc and font size, fixed line breaking errors and image width problems
8. Optimize rendering logic and remove redundant js
9. Add multiple bugs
