
 const express = require('express');

 const router = express.Router();

// Get repos for a user
 router.get('https://api.github.com/users/:id/repos', {"id": ""});

 // Get issues
 router.get('https://api.github.com/repos/:owner/:repo/issues/', {"owner": "", "repo": ""});

 // Get comments from a specific issue
 router.get('https://api.github.com/repos/:owner/:repo/issues/:number/comments', {"owner": "", "repo": "", "number": ""});

 // Get Collaborators
 router.get('https://api.github.com/repos/:owner/:repo/collaborators', {"owner": "", "repo": ""});

 // Get a branch
 router.get('https://api.github.com/repos/:owner/:repo/branches/:branch', {"owner": "", "repo": "", "branch": ""});

 // Get all pull requests
 router.get('https://api.github.com/repos/:owner/:repo/pulls', {"owner": "", "repo": ""});

 module.exports = router;
