$(document).ready(()=>{
  $("#codeButt").click(()=>{
    alert("I work");
    $('#code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  });
$(function(){
  $('#edit').on('froalaEditor.contentChanged froalaEditor.initialized', function (e, editor) {
    $('#preview').text(editor.codeBeautifier.run(editor.html.get()))
  }).froalaEditor();
});
});
