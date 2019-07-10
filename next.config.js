const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');

// Add this after your declarations 
module.exports = withTypescript(withSass({
    sassLoaderOptions: {}
}))