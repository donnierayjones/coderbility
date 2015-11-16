(function() {
  var themes = {
    "Agate": "styles/agate.css",
    "Anroid Studio": "styles/androidstudio.css",
    "Arta": "styles/arta.css",
    "Ascetic": "styles/ascetic.css",
    "Atelier Cave (dark)": "styles/atelier-cave.dark.css",
    "Atelier Cave (light)": "styles/atelier-cave.light.css",
    "Atelier Dune (dark)": "styles/atelier-dune.dark.css",
    "Atelier Dune (light)": "styles/atelier-dune.light.css",
    "Atelier Estuary (dark)": "styles/atelier-estuary.dark.css",
    "Atelier Estuary (light)": "styles/atelier-estuary.light.css",
    "Atelier Forest (dark)": "styles/atelier-forest.dark.css",
    "Atelier Forest (light)": "styles/atelier-forest.light.css",
    "Atelier Heath (dark)": "styles/atelier-heath.dark.css",
    "Atelier Heath (light)": "styles/atelier-heath.light.css",
    "Atelier Lakeside (dark)": "styles/atelier-lakeside.dark.css",
    "Atelier Lakeside (light)": "styles/atelier-lakeside.light.css",
    "Atelier Plateau (dark)": "styles/atelier-plateau.dark.css",
    "Atelier Plateau (light)": "styles/atelier-plateau.light.css",
    "Atelier Savanna (dark)": "styles/atelier-savanna.dark.css",
    "Atelier Savanna (light)": "styles/atelier-savanna.light.css",
    "Atelier Seaside (dark)": "styles/atelier-seaside.dark.css",
    "Atelier Seaside (light)": "styles/atelier-seaside.light.css",
    "Atelier Sulphurpool (dark)": "styles/atelier-sulphurpool.dark.css",
    "Atelier Sulphurpool (light)": "styles/atelier-sulphurpool.light.css",
    "Brown Paper": "styles/brown_paper.css",
    "Codepen Embed": "styles/codepen-embed.css",
    "Color Brewer": "styles/color-brewer.css",
    "Dark": "styles/dark.css",
    "Darkula": "styles/darkula.css",
    "Docco": "styles/docco.css",
    "Far": "styles/far.css",
    "Foundation": "styles/foundation.css",
    "Github Gist": "styles/github-gist.css",
    "Github": "styles/github.css",
    "Googlecode": "styles/googlecode.css",
    "Grayscale": "styles/grayscale.css",
    "Hopscotch": "styles/hopscotch.css",
    "Hybrid": "styles/hybrid.css",
    "Idea": "styles/idea.css",
    "Ir_black": "styles/ir_black.css",
    "Kimbie.dark": "styles/kimbie.dark.css",
    "Kimbie.light": "styles/kimbie.light.css",
    "Magula": "styles/magula.css",
    "Mono Blue": "styles/mono-blue.css",
    "Monokai": "styles/monokai.css",
    "Monokai Sublime": "styles/monokai_sublime.css",
    "Obsidian": "styles/obsidian.css",
    "Paraiso.dark": "styles/paraiso.dark.css",
    "Paraiso.light": "styles/paraiso.light.css",
    "Pojoaque": "styles/pojoaque.css",
    "Railscasts": "styles/railscasts.css",
    "Rainbow": "styles/rainbow.css",
    "School Book": "styles/school_book.css",
    "Solarized (dark)": "styles/solarized_dark.css",
    "Solarized (light)": "styles/solarized_light.css",
    "Sunburst": "styles/sunburst.css",
    "Tomorrow Night Blue": "styles/tomorrow-night-blue.css",
    "Tomorrow Night Bright": "styles/tomorrow-night-bright.css",
    "Tomorrow Night Eighties": "styles/tomorrow-night-eighties.css",
    "Tomorrow Night": "styles/tomorrow-night.css",
    "Tomorrow": "styles/tomorrow.css",
    "Vs": "styles/vs.css",
    "Xcode": "styles/xcode.css",
    "Zenburn": "styles/zenburn.css"
  };
  $(function() {
    var $lightTheme = $('select[name="lightTheme"]');
    var $darkTheme = $('select[name="darkTheme"]');

    for(var key in themes) {
      if(themes.hasOwnProperty(key)) {
        $lightTheme.add($darkTheme)
          .append($("<option></option>")
          .attr("value",themes[key])
          .text(key));
      };
    }

    $lightTheme.add($darkTheme).on('change', function() {
      chrome.storage.sync.set({
        lightTheme: $lightTheme.val(),
        darkTheme: $darkTheme.val()
      });
    });

    chrome.storage.sync.get(null, function(items) {
      if(items.lightTheme)
        $lightTheme.val(items.lightTheme);
      if(items.darkTheme)
        $darkTheme.val(items.darkTheme);
    });

    $lightTheme.val('styles/tomorrow.css');
    $darkTheme.val('styles/tomorrow-night.css');
  });
})();
