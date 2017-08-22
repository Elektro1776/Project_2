// GET route
'https://api.github.com/repos/:owner/:repo/issues/:number/comments'
body[0].html_url = "Link to actual comment"
body[0].user.login = "User who posted comment"
body[0].body = "body of comment"

var body = [
    {
        "url": "https://api.github.com/repos/901david/Flashcard-Fun/issues/comments/323921766",
        "html_url": "https://github.com/901david/Flashcard-Fun/issues/26#issuecomment-323921766",
        "issue_url": "https://api.github.com/repos/901david/Flashcard-Fun/issues/26",
        "id": 323921766,
        "user": {
            "login": "901david",
            "id": 26396882,
            "avatar_url": "https://avatars1.githubusercontent.com/u/26396882?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/901david",
            "html_url": "https://github.com/901david",
            "followers_url": "https://api.github.com/users/901david/followers",
            "following_url": "https://api.github.com/users/901david/following{/other_user}",
            "gists_url": "https://api.github.com/users/901david/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/901david/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/901david/subscriptions",
            "organizations_url": "https://api.github.com/users/901david/orgs",
            "repos_url": "https://api.github.com/users/901david/repos",
            "events_url": "https://api.github.com/users/901david/events{/privacy}",
            "received_events_url": "https://api.github.com/users/901david/received_events",
            "type": "User",
            "site_admin": false
        },
        "created_at": "2017-08-22T05:19:04Z",
        "updated_at": "2017-08-22T05:19:04Z",
        "body": "this is a comment"
    },
    {
        "url": "https://api.github.com/repos/901david/Flashcard-Fun/issues/comments/323921789",
        "html_url": "https://github.com/901david/Flashcard-Fun/issues/26#issuecomment-323921789",
        "issue_url": "https://api.github.com/repos/901david/Flashcard-Fun/issues/26",
        "id": 323921789,
        "user": {
            "login": "901david",
            "id": 26396882,
            "avatar_url": "https://avatars1.githubusercontent.com/u/26396882?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/901david",
            "html_url": "https://github.com/901david",
            "followers_url": "https://api.github.com/users/901david/followers",
            "following_url": "https://api.github.com/users/901david/following{/other_user}",
            "gists_url": "https://api.github.com/users/901david/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/901david/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/901david/subscriptions",
            "organizations_url": "https://api.github.com/users/901david/orgs",
            "repos_url": "https://api.github.com/users/901david/repos",
            "events_url": "https://api.github.com/users/901david/events{/privacy}",
            "received_events_url": "https://api.github.com/users/901david/received_events",
            "type": "User",
            "site_admin": false
        },
        "created_at": "2017-08-22T05:19:13Z",
        "updated_at": "2017-08-22T05:19:13Z",
        "body": "this is another comment"
    },
    {
        "url": "https://api.github.com/repos/901david/Flashcard-Fun/issues/comments/323921814",
        "html_url": "https://github.com/901david/Flashcard-Fun/issues/26#issuecomment-323921814",
        "issue_url": "https://api.github.com/repos/901david/Flashcard-Fun/issues/26",
        "id": 323921814,
        "user": {
            "login": "901david",
            "id": 26396882,
            "avatar_url": "https://avatars1.githubusercontent.com/u/26396882?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/901david",
            "html_url": "https://github.com/901david",
            "followers_url": "https://api.github.com/users/901david/followers",
            "following_url": "https://api.github.com/users/901david/following{/other_user}",
            "gists_url": "https://api.github.com/users/901david/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/901david/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/901david/subscriptions",
            "organizations_url": "https://api.github.com/users/901david/orgs",
            "repos_url": "https://api.github.com/users/901david/repos",
            "events_url": "https://api.github.com/users/901david/events{/privacy}",
            "received_events_url": "https://api.github.com/users/901david/received_events",
            "type": "User",
            "site_admin": false
        },
        "created_at": "2017-08-22T05:19:22Z",
        "updated_at": "2017-08-22T05:19:22Z",
        "body": "even another comment"
    }
];
