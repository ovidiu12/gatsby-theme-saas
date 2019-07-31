const path = require(`path`);
const fs = require("fs");
const defaultPagesPath = `content/pages`;
const defaultBasePath = `/`;

exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();

  const pagesPath = themeOptions.pagesPath || defaultPagesPath;

  //create the pages directory if it doesn't exist
  const dir = path.join(program.directory, pagesPath);

  if (!fs.existsSync(dir)) {
    reporter.info(`Creating the "${dir}" directory`);
    mkdirp.sync(dir);
  }
};

const mdxResolver = fieldName => async (source, args, context, info) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName
  });
  return result;
};

exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    schema.buildObjectType({
      name: `Page`,
      fields: {
        slug: { type: `String` },
        title: { type: `String` },
        cover: { type: `File`, extensions: { fileByRelativePath: {} } },
        excerpt: {
          type: `String`,
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 160
            }
          },
          resolve: mdxResolver(`excerpt`)
        },
        body: {
          type: `String`,
          resolve: mdxResolver(`body`)
        }
      },
      interfaces: [`Node`],
      extensions: {
        infer: false
      }
    })
  ];

  createTypes(typeDefs);
};

exports.onCreateNode = (
  { node, actions, getNode, createNodeId, createContentDigest },
  themeOptions
) => {
  const { createNode, createParentChildLink } = actions;

  const pagesPath = themeOptions.pagesPath || defaultPagesPath;

  if (node.internal.type !== `Mdx`) {
    return;
  }

  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
      cover: node.frontmatter.cover
    };

    createNode({
      ...fieldData,
      id: createNodeId(`${node.id} >>> Page`),
      parent: node.id,
      children: [],
      internal: {
        type: `Page`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Pages`
      }
    });

    createParentChildLink({ parent: fileNode, child: node });
  }
};

exports.createPages = async ({ actions, graphql, reporter }, themeOptions) => {
  const { createPage } = actions;

  // const basePath = themeOptions.basePath || defaultBasePath;

  // createPage({
  //   path: basePath,
  //   component: require.resolve(`./src/templates/home.js`)
  // });

  const result = await graphql(`
    query {
      allPage {
        nodes {
          slug
        }
      }
    }
  `);

  const pages = result.data.allPage.nodes;

  if (pages.length > 0) {
    pages.forEach(page => {
      createPage({
        path: page.slug,
        component: require.resolve(`./src/templates/page.js`),
        context: {
          slug: page.slug
        }
      });
    });
  }
};
