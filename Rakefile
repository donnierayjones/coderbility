task :package do
  files = [
    'manifest.json',
    'highlight.pack.js',
    'jquery.js',
    'script.js',
    'options.css',
    'options.js',
    'options.html',
    'icon16.png',
    'icon48.png',
    'icon128.png',
    'styles/*'
  ]
  filelist = files.join(" ")
  %x[zip package.zip #{filelist}]
end

task :default => :package
