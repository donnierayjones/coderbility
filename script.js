$('pre:not(:has(code)), pre code').each(function(i, e) {
  hljs.highlightBlock(e);
});
