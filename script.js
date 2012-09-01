$.ajax({
  url: 'http://yandex.st/highlightjs/7.1/highlight.min.js',
  dataType: 'text',
  success: function(d){
    $(function() {
      eval(d);
      $('pre:not(:has(code)), pre code').each(function(i, e) {
        hljs.highlightBlock(e);
      });
    });
  }
});
