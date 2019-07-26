# JS Framework Comparative Analysis

## Ember.js

### Research Conducted By: Chloie Parsons, Jeffy Lawrence, Felipe Delatorre

### Overall Score and Comments
##### Score (Out of 10): 7

##### General Comments
Ember.js is a front-end JavaScript framework for building web applications. In reading, we came across an article that said Ember has been a highly opinionated framework that was built to be very flexible. In exploring Ember, we began to understand how it can be both opinionated and flexible. 

Usability and learnability was poor. Once React came on the scene,Ember began dying so documentation starts strong and ends up paltry due to it being ignored. YouTube videos are current as of 2015. Ember was a fad that is losing (or has lost?) its flare.


##### Pros
* Convention over configuration:

  - Instead of writing a lot of boilerplate code, Ember can automatically deduce much of the configuration itself.

  - Creates an .hbs file for the Handlebars web template system
    - always includes an ```{{outlet}}```, an Ember helper that lets you specify where a child route will render in your template

  - Creates a JS component file
    - includes some but not always all import statements and export statements

  - Creates a test file
    - includes necessary import statements
    - includes a basic 'exists' test 
    - imports `setupTest` from Qunit


* Ember CLI Tool
  
  - Ember-CLI's easy command line commands quickly scaffolds the project, installs dependencies, and compiles everything itself.

##### Cons
* Steep Learning Curve! 
  - Compounded by a lack of documentation

* Complex file system makes it impractical for small projects

### Ratings and Reviews

* Ember has 95k weekly downloads on npm
* Angular-CLI has 550k weekly downloads
* Vue has 330k weekly downloads
* React has 2.3m this week alone
* Ember is rated 4.8 out of 5 stars, which may be reviews by people who had more time to dive into Ember

### Post-Mortem
At the end of the day it was a good learning experience to explore and play with a new framework. However, if we had known some of Ember's deficiencies ahead of time, we likely would have taken a different route. Unbeknownst to us, about 4.5 - 5 years ago, when React began its meteoric rise in popularity, Ember's brief reign came to an abrupt end. As it stands today, Ember is still used occasionally but almost always it is a case of legacy software being updated. When it comes to new site creation, choosing Ember would be highly unlikely, a poor business decision, and not evident of a corporate growth-mindset.

When Ember was made publicly available in 2011, the design and functionality of Ember was cutting edge in that it removed all the boilerplate code that we have to write (for example many of those 'import' statements in route files, an initial 'exists' test in a test file, and initializing a component file, template file, and a route file). 

However, as its popularity declined so did the amount of dev community buy-in.  This resulted in a massive decrease in documentation. For instance, when searching for YouTube tutorial videos, there was virtually nothing created post-2015. When searching StackOverflow, any Ember related posts vanish after 2015-2016. The only documentation that is current is the actual Ember documentation which would be fine if it was actually addressed real-time, in-use issues, especially for newer users. The learning curve is extremely high when dealing with out-of-date documentation, poor documentation, and basically no support. 

### Systems Requirements

Ember uses ```node.js``` and ```npm```. Ember does play on AWS, Heroku, Netlify, etc. It does not require a certain database

### Ramp-Up Projections
For a mid-junior developer to become productive it would take a week or two of doing tutorials and playing with Ember. Measureable proficiency would be expected after a month.

### Community Support and Adoption levels
Ember is still very prevalant, is declining in popularity as React, Angular, and Vue take more market share. Currently, companies using Ember include:

  * LinkedIn
  * Heroku
  * GoDaddy
  * iTunes
  * Playstation Stores
  * Square
  * Netflix

The JavaScript community is moving away from Ember. The quality and quantity of conversations are declining. Ember was releasing updates every 6 weeks now it is every 4 months. The stats show the decline, as of 2019:

* 475k websites are powered by React
* 64k websites are powered by Vue
* 350k websites are powered by Angular
* 7k websites are powered by Ember
* 100k websites are powered by Express.js

### Links and Resources
framework
docs
examples/tutorials
Code Demos
live/running application
code repository

### Operating Instructions
This resulted in a DOA. Please see the Post-Mortem above.
