
 const express = require('express');

 const router = express.Router();

 // Remove a Collaborator
 router.delete('https://api.github.com/repos/:owner/:repo/collaborators/:username', {"owner": "", "repo": "", "username": ""});

 // Delete the file
router.delete('https://api.github.com/repos/:owner/:repo/contents/:path'
{"owner": "", "repo": "", "path": "", "message": "", "sha": ""});

module.exports = router;
