---
metaTitle: 插件推荐 | Hexo Fluid
meta:
  - name: description
    content: Fluid 是一款 Material-Design 风格的 Hexo 博客主题。Fluid is an elegant Material-Design theme for Hexo. https://github.com/fluid-dev/hexo-theme-fluid
  - name: keywords
    content: hexo,theme,fluid,hexo主题,fluid文档,用户文档,博客,文档,博客,文章
---

# 插件推荐

:::warning
所有插件仅作为推荐，请仔细阅读它们的文档，以免造成不良后果。
:::

## 压缩生成文件

[hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier)

## 生成文章短链接

[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)

## 置顶文章

[hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)

## 插入视频

[hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer)

## 看板娘

[hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)

## RSS Feed

[hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed)

## 可视化编辑页面与文档

[hexo-admin](https://github.com/jaredly/hexo-admin)

## 更多常见博客功能

:::tip
部分功能需要使用到自定义 CSS 或 JS ，请根据自己需求使用，并检查是否有冲突，建议测试前做好备份
:::

### 网站运行时间统计

本段代码来源于[网络](http://www.liangz.org/245.html)。在主题目录 `fluid/layout/_partial/footer.ejs` 文件中对应位置添加相关代码。

```html
<div>
  <span id="timeDate">载入天数...</span>
  <span id="times">载入时分秒...</span>
  <script>
  var now = new Date();
  function createtime(){
      var grt= new Date("02/14/2017 00:00:00");//此处修改你的建站时间或者网站上线时间
      now.setTime(now.getTime()+250);
      days = (now - grt ) / 1000 / 60 / 60 / 24;
      dnum = Math.floor(days);
      hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
      hnum = Math.floor(hours);
      if(String(hnum).length ==1 ){
          hnum = "0" + hnum;
      }
      minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
      mnum = Math.floor(minutes);
      if(String(mnum).length ==1 ){
                mnum = "0" + mnum;
      }
      seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
      snum = Math.round(seconds);
      if(String(snum).length ==1 ){
                snum = "0" + snum;
      }
      document.getElementById("timeDate").innerHTML = "本站安全运行&nbsp"+dnum+"&nbsp天";
      document.getElementById("times").innerHTML = hnum + "&nbsp小时&nbsp" + mnum + "&nbsp分&nbsp" + snum + "&nbsp秒";
  }
  setInterval("createtime()",250);
  </script>
</div>
```

### 一言

一言在博客网站中非常常见，正如它所说，用代码表达言语的魅力。在页面中，使用直接添加添加如下代码即可。在主题目录 `fluid/layout/_partial/footer.ejs` 文件中对应位置添加相关代码。以下代码为默认使用示例，如需要定制，请到 [hitokoto developer](https://developer.hitokoto.cn/) 中查看详情。

```html
<p id="hitokoto">:D 获取中...</p>
<script>
  fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto')
      hitokoto.innerText = data.hitokoto
      })
      .catch(console.error)
</script>
```

### 在新建页面添加评论

目前，主题配置文件只能在文章页面添加评论，如果需要在新建的页面添加评论插件，请在打开评论插件的情况下，在文章页面查看评论插件对应的 HTML 代码，并添加到页面的 Markdown 文件中。
