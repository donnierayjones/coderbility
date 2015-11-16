(function() {
  var setTheme = function() {
    if(site.isLight()) {
      $link.attr('href', chrome.extension.getURL(themes.lightTheme));
    } else {
      $link.attr('href', chrome.extension.getURL(themes.darkTheme));
    }
  };

  var getSite = function() {
    if(window.location.hostname === 'www.instapaper.com')
      return sites.instapaper;
    if(window.location.hostname === 'www.readability.com')
      return sites.readability;
  };

  var setThemeFromStorage = function() {
    chrome.storage.sync.get(null, function(items) {
      if(items.lightTheme)
        themes.lightTheme = items.lightTheme;
      if(items.darkTheme)
        themes.darkTheme = items.darkTheme;
      setTheme();
    });
  };

  var themes = {
    lightTheme: 'styles/solarized_light.css',
    darkTheme: 'styles/solarized_dark.css'
  };

  var sites = {
    instapaper: {
      isLight: function() {
        return $('body').hasClass('lightmode') || $('body').hasClass('sepiamode');
      },
      registerModeChange: function() {
        // click event wasn't working here for some reason
        $('body').on('mouseup', '.swatch', function() {
          setTimeout(function() {
            setTheme();
          },10);
        });
      }
    },
    readability: {
      isLight: function() {
        return $('html').hasClass('mode-day');
      },
      registerModeChange: function() {
        $('input[name="mode"]').on('change', function() {
          setTimeout(function() {
            setTheme();
          },10);
        });
      }
    }
  };

  var link = document.createElement('link');
  link.type = 'text/css';
  link.rel = 'stylesheet';
  var $link = $(link)
  $link.appendTo('head');

  chrome.storage.onChanged.addListener(function() {
    setThemeFromStorage();
  });

  $('pre:not(:has(code)), pre code').each(function(i, e) {
    hljs.highlightBlock(e);
  });

  var site = getSite();

  site.registerModeChange();

  setThemeFromStorage();
  setTheme();
})();
