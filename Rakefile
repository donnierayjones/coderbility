task :package do
  files = [
    'manifest.json',
    'highlight.pack.js',
    'jquery.js',
    'script.js',
    'icon16.png',
    'icon48.png',
    'icon128.png',
    'solarized_light.css',
    'styles.css'
  ]
  filelist = files.join(" ")
  %x[zip package.zip #{filelist}]
end

task :default => :package
