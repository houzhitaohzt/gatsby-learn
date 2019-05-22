/**
 * @author: houzhitao
 * @since: 2019-05-22 11:29
 * @desc: node
 */

const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

// onCreateNode 无论何时创建一个新的节点
// createNodeField 通过其它方法创建另外的fields

exports.onCreateNode = ({node, getNode, actions}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`){
    const mkd = createFilePath({ node, getNode, basePath: `markdowns`})
    createNodeField({
      node,
      name: `mkd`,
      value: mkd
    })
  }
}

// createPages 创建分页
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
