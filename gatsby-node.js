const axios = require('axios');
const { createRemoteFileNode } = require("gatsby-source-filesystem");
const config = require('./gatsby-config');

const WpURL = 'http://localhost/wordpress/';

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type Site implements Node {
      siteMetadata: SiteMetadata
    }
    type SiteMetadata {
      menuLinks: [MenuLinks]!
    }
    type MenuLinks {
      name: String!
      link: String
      hasCta: Boolean
    hasWhiteHeader: Boolean
      subMenu: [SubMenu]
    }
    type SubMenu {
      name: String
      link: String
      hasCta: Boolean
    hasWhiteHeader: Boolean
    }
  `;
    createTypes(typeDefs);
};

exports.onCreatePage = ({ page }) => {
    if(page.path.startsWith('/404')) {
        page.context = { ...page.context, pageName: '404' }
    }
}

    exports.sourceNodes = async ({
        actions: { createNode },
        createContentDigest
      }) => {
      
        const fetchPosts = () => axios.get(`${WpURL}wp-json/wp/v2/posts?orderby=date&order=desc&_embed`);
        const resPosts = await fetchPosts();

        if(!resPosts || resPosts.status !== 200) throw new Error('Unable to fetch posts');

        const posts = resPosts.data;
        const fetchCategories = () => axios.get(`${WpURL}wp-json/wp/v2/categories?order=asc`);
        const resCategories = await fetchCategories();

        if(!resCategories || resCategories.status !== 200) throw new Error('Unable to fetch categories');

        const categories = resCategories.data;
      
        posts.forEach((item) => {
        // eslint-disable-next-line no-underscore-dangle
        const image = item._embedded['wp:featuredmedia'];
          createNode({
            ...item,
            id: item.id.toString(10),
            internal: {
              type: 'WpPosts',
              contentDigest: createContentDigest(item)
            },
            image_url: image[0].source_url
          });
        });

        categories.forEach((item) => {
            createNode({
                ...item,
                id: item.id.toString(10),
                internal: {
                  type: 'WpCategories',
                  contentDigest: createContentDigest(item)
                }
            });
        });
    };

    exports.createSchemaCustomization = ({ actions }) => {
      const { createTypes } = actions
    
      createTypes(`
        type WpPosts implements Node {
          featuredImage: File @link(from: "fields.localFile")
        }
      `)
    }
    
    exports.onCreateNode = async ({
      node,
      actions: { createNode, createNodeField },
      createNodeId,
      getCache,
    }) => {
      // For all WpPosts nodes that have a featured image url, call createRemoteFileNode
      if (
        node.internal.type === "WpPosts" &&
        node.image_url !== null
      ) {
        const fileNode = await createRemoteFileNode({
          url: node.image_url, // string that points to the URL of the image
          parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
          createNode, // helper function in gatsby-node to generate the node
          createNodeId, // helper function in gatsby-node to generate the node id
          getCache,
        })
    
        // if the file was created, extend the node with "localFile"
        if (fileNode) {
          createNodeField({ node, name: "localFile", value: fileNode.id })
        }
      }
    }
