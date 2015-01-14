dir = File.dirname(__FILE__)

load File.join(dir,'..','..','sdk','resources','themes')

sass_path = dir
css_path = File.join(dir,'..', 'css')
output_style = :compressed
environment = :production