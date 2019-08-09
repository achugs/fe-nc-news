# React Project Checklist
Here's a guide to approaching any React project. It's not an absolutely strict set of rules, but you can use it to help you avoid getting distracted by things that are likely to be a waste of time if done too early.

# Planning
### ~~Copy this list into your project~~

~~Outline functionality of your app~~

~~Draw main views of app~~

~~Break out components from your views~~

~~Name your components~~

~~Draw component hierarchy~~

~~Plan routing~~

Label where you will require functions that change state

Label where you will require data

Determine from this where you will require state & hold functions

# ~~Setup~~

~~Create your app directory (e.g. with create-react-app~~

~~Run your app~~

~~Git init (unless cloned!), gitignore config, make an initial commit~~

~~Ensure you have React DevTools running~~

# Static

Make blank components (functional or class?) as per your plan

Create reuasable components e.g. buttons, inputs

Export and import components as per your hierarchy

Check everything is hooked up

you may want to add positional styling here to match your planned layout. DO NOT do any cosmetic styling yet!

Write static render methods with mock data

Add expected propTypes (adapt this as necessary)

# Dynamic (order may be a bit looser here!)

~~Create .api file~~

Construct componentDidMount functions

Create functions that setState

Add expected props to component instantiation

Add mapping / looping for creating multiple components

Deal with component lifecycle issues, e.g. making new api calls on componentDidUpdate

Add event handlers

# Style

Add classNames

Create and .css files

Write application CSS - sitewide styling choices like fonts, colour pallettes

Write component specific CSS

# As a user, I should be able to...

~~view a list of all articles~~

~~view a page for each topic with a list of related articles.~~

~~view an individual article.~~

~~view an individual article's comments.~~

~~sort articles by:~~
~~date created~~
~~comment_count~~
~~votes~~

~~post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').~~

delete my own comments (as a default logged in user. e.g. 'jessjelly').

~~vote on an article and immediately see the change~~

~~vote on a comment and immediately see the change.~~

# As a hiring partner, I should be able to...

use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).

follow the readme instructions to easily run the project locally.

find a link to the hosted version of the project in the readme.

find a link to the back-end repository of the project in the readme.

find a link to the hosted version of the back-end project in the readme.

# Error-handling: As a user, I should...

~~show a 404 error if I go on a non-existent path/a path for a non-existent article/topic.~~

~~show a 400 error if I go on a invalid article ID.~~

not be allowed to post a comment if I have not filled in all of the form boxes.
