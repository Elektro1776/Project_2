

 const express = require('express');

 const router = express.Router();
// Create a file
 router.put('https://api.github.com/repos/:owner/:repo/contents/:path', {"owner":, "", "repo": "", "path": "", "message": "", "content": ""});

// Create an issue
router.post('https://api.github.com/repos/:owner/:repo/issues',
 {"owner": "", "repo": ""; "title": "", "body": "", "assignees": [""]});

 // Create a pull request
 router.post('https://api.github.com/repos/:owner/:repo/pulls',
  {"owner": "", "repo": "", "title": "", "head": "", "base": "", "body": ""});

// Create pull request comment
router.post('https://api.github.com/repos/:owner/:repo/pulls/:number/comments', {"owner": "", "repo": "", "number": "", "body": "", "commit_id": "", "path": "", "position": ""});

// Create a new repo
router.post('https://api.github.com/user/repos', {"name": "", "allow_rebase_merge": "", "description": "", "auto-init": true, "gitignore_template": ""});

// Add assignees to issues
router.post('https://api.github.com/repos/:owner/:repo/issues/:number/assignees', {"owner": "", "repo": "", "number": "", "assignees": ["", ""]});

// Add collaborator
router.put('https://api.github.com/repos/:owner/:repo/collaborators/:username', {"owner": "", "repo": "", "username": ""});

// Edit a comment
router.patch('https://api.github.com/repos/:owner/:repo/issues/comments/:id', {"owner": "", "repo": "", "id": "", "body": ""});

// Fork repo
router.post('https://api.github.com/repos/:owner/:repo/', {"owner": "", "repo": ""});

// Creater comment on issue
router.post('https://api.github.com/repos/:owner/:repo/issues/:number/comments', {"owner": "", "repo": "", "number": "", "body": ""});

// Edit an issue
router.patch('https://api.github.com/repos/:owner/:repo/issues/:number', {"owner": "", "repo": "", "number": "", "title": "", "body": "", "assignees": [""]});

// Render markdown
router.post('https://api.github.com/markdown/raw', {"body": ""});

// Update a file - need to figure out why SHA number not working
router.put('https://api.github.com/repos/:owner/:repo/contents/:path', {"owner": "", "repo": "", "path": "", "message": "", "content": "", "sha": ""});

module.exports = router;
