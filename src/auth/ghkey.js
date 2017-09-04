let github;
if (process.env.NODE_ENV === 'development') {
  github = {
    id: '2844a39a5f2a7df1d0cb',
    secret: '4df0e84829ae01145786f13f6a226e9bc0ac619a',

  }
} else {
  github = {
    id: "aa0e1ffd700b6c7da343",
    secret: "603ca65e926fab6b6e629e5d8d940dbcf170da08",

  }
}
module.exports = github;
