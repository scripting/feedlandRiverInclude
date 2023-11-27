# feedlandRiverInclude

The minimum you need to be able to include a timeline from FeedLand in a browser-based app.

### What is this?

We wanted to try displaying FeedLand timelines in WordPress. 

The idea is that people, organizations, news outlets, might want to include new items from other people who cover areas of interest. 

And many of them have WordPress sites. So we wanted to see if we could get this to happen.

### Maximal factoring

The first step was to factor the code repeatedly until it was simple enough to be turned into a WordPress plugin. 

Now I'm going to ask people I work with to take a look, and see if this can be included in a plugin, and if not, what needs to change?

### What to look at?

First try running the app, <a href="http://scripting.com/code/includeFeedlandTimeline/index.html">here</a>. 

Look at <a href="https://github.com/scripting/feedlandRiverInclude/blob/main/code.js">code.js</a> and see how it works. Not much there! 

Then look at the head section of <a href="https://github.com/scripting/feedlandRiverInclude/blob/main/index.html">index.html</a>. There are quite a few script and css files included. 

