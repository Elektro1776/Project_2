$(document).ready(()=>{
  
$(function(){
  $('#edit').on('froalaEditor.contentChanged froalaEditor.initialized', function (e, editor) {
    $('#preview').text(editor.codeBeautifier.run(editor.html.get()))
  }).froalaEditor();
});
});
