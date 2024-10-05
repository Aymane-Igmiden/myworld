# My world

This is a indie game based project; I'm trying to build what I'm considering my safe place.

### Tools 

This is built using `Kaboom JS` library as a game enginer. This will be hosted on S3, and deployed to Cloudfront or something basic

### Code organization

I'm using dialog module as a modular component; Currently I'm chaining lines until I build a holistic class to handle the whole interaction.
For example: 
    ->  dialog.say("Welcome to my sanctuary!");
    ->  dialog.say("Continue!");
    ->  dialog.say("Continue #2!");