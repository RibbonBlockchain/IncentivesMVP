// TODO: Replace with:
// https://aws-amplify.github.io/docs/js/api#using-the-configuration-file-in-your-code
// https://aws-amplify.github.io/docs/js/vue

// import Vue from "vue";
// import AWSAppSyncClient from "aws-appsync";
// import VueApollo from "vue-apollo";
//
// import appSyncConfig from "./config";
//
// const config = {
//   url: appSyncConfig.graphqlEndpoint,
//   region: appSyncConfig.region,
//   auth: {
//     type: appSyncConfig.authenticationType,
//     apiKey: appSyncConfig.apiKey
//   }
// };
//
// const options = {
//   defaultOptions: {
//     watchQuery: {
//       fetchPolicy: "cache-and-network"
//     }
//   }
// };
//
// const client = new AWSAppSyncClient(config, options);
// const Provider = new VueApollo({
//   defaultClient: client
// });
//
// Vue.use(VueApollo);
//
// export default Provider;
