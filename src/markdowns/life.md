---
title: "生活"
author: "侯治涛"
date: "2019-05-22"
---

# 这是我的生活 这是一级标题
## 这是二级标题
### 这是三级标题
#### 只是四级标题
##### 只是五级标题
###### 这是六级标题

==
分级标题
==

** 
加粗体 
**
* 斜体 *

> 引用一
>> 引用二

- [x] 选项选中
- [ ] 没有选中

---
分割线
***

# 图片引用
![blockchain](https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=702257389,1274025419&fm=27&gp=0.jpg "区块链")

# 引用
![logo](/src/images/logo.png "logo")

# 超链接
[百度](http://baidu.com)

# 视频
<iframe height=498 width=510 src='http://player.youku.com/embed/XMjgzNzM0NTYxNg==' frameborder=0 'allowfullscreen'></iframe>

# 无序列表
- 列表
+ 列表
* 列表

# 有序列表
1.列表
2.列表
3.列表

# 表格
|    a    |       b       |      c     |
|:-------:|:------------- | ----------:|
|   居中  |     左对齐    |   右对齐   |
|=========|===============|============|

# 脚注
Markdown[^1]


# 代码
```
  exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions;
    return graphql(`
       {
         allMarkdownRemark {
            totalCount
            edges {
             node {
              id
              fields {
                mkd
              }
              }
            }
          } 
        }
    `).then(res => {
      res.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.mkd,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            mkd: node.fields.mkd
          }
        })
      })
    })
  }
```

# 流程图
```flow
    st=>start: 开始
    op=>operation: My Operation
    cond=>condition: Yes or No?
    e=>end
    st->op->cond
    cond(yes)->e
    cond(no)->op
&```

```flow                     
st=>start: 开始|past:> http://www.baidu.com 
e=>end: 结束              
c1=>condition: 条件1:>http://www.baidu.com[_parent]   
c2=>condition: 条件2      
c3=>condition: 条件3      
io=>inputoutput: 输出     
st->c1(yes,right)->c2(yes,right)->c3(yes,right)->io->e
c1(no)->e                   
c3(no)->e                  
```
