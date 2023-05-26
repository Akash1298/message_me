# You can install Semantic-UI with below procedure for rails 7.

### first make sure that you have :-

- gem "importmap-rails" #it's available by default on rails 7
- gem "semantic-ui-sass"
- gem "sassc-rails" #uncomment this line since it should be commented out by default on rails 7
- in your Gemfile. (and obviously don't forget to do bundle install if you haven't yet)

### and then add these lines to config/importmap.rb

- pin "jquery", to: "https://code.jquery.com/jquery-3.6.0.min.js"
- pin "semantic-ui", to: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js"

### and also add these to javascript/application.js

- import \* as jquery from "jquery"
- import "semantic-ui"

### finally, add below line to app/assets/stylesheets/custom.css.scss

- @import "semantic-ui";

That's it! Now Semantic-UI should be fully functional in rails 7.
