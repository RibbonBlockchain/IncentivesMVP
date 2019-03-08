// Solution from https://github.com/apollographql/apollo-link-state/issues/302#issuecomment-431219631

const config = {
  configureWebpack: {
    resolve: {
      extensions: ['*', '.mjs', '.js', '.vue', '.json', '.gql', '.graphql']
    },
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  }
 }
 
 module.exports = config