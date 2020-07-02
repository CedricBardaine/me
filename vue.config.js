module.exports = {
    // publicPath: '/Me/'
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Me/'
    : '/'
}