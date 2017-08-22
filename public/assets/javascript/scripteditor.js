var wysiwyg = require('wysiwyg')

var editor = wysiwyg(document.querySelector('textarea'))

editor.selectAll()
editor.bold()
editor.color("pink")
editor.link("foobar.com")

editor.read()
// => <b><a href="foobar.com" style="color: pink">hello world</a></b>
