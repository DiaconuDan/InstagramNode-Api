module.exports = {
    port: process.env.PORT || 8000 ,
    instagram: {
        client_id: '31e1540fdbba40d491f7816943e46691',
        client_secret: '047d8107c2784af5afe9d48f94217433',
        auth_url: 'https://api.instagram.com/oauth/authorize/?client_id=' + this.client_id + '&redirect_uri=' + this.redirect_uri + '&response_type=code ',
        redirect_uri: 'http://localhost:8000/handleAuth',
        auth_uri: 'http://localhost:8000/authorize_user'
    }
}