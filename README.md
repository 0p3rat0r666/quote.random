# quote.random
*☆* *♡* *☆* *♡* *☆* *♡* *☆* *♡* *☆* *♡* *☆* *♡*

![*☆*](https://xaoiui.neocities.org/Limestar.gif) Inspired by the linux CLI fortune. ![*☆*](https://xaoiui.neocities.org/Limestar.gif)

![*☆*](https://xaoiui.neocities.org/Limestar.gif) When ran a random quote is generated to console using ``Math.random``. ![*☆*](https://xaoiui.neocities.org/Limestar.gif)

![*☆*](https://xaoiui.neocities.org/Limestar.gif) All current quotes gethered from [Atera](https://www.atera.com/blog/best-it-quotes/), [Forbes](https://www.forbes.com/sites/robertszczerba/2015/02/09/20-great-technology-quotes-to-inspire-amaze-and-amuse/), [liveabout](https://www.liveabout.com/funny-technology-quotes-2892767), and [digitaldefynd](https://digitaldefynd.com/IQ/technology-jokes/). ![*☆*](https://xaoiui.neocities.org/Limestar.gif)

# How does it work?

![*☆*](https://xaoiui.neocities.org/Limestar.gif) Simple! It starts by defining a variable, *quotes*, that is an array with a list of quotes in it. ![*☆*](https://xaoiui.neocities.org/Limestar.gif)

![*☆*](https://xaoiui.neocities.org/Limestar.gif) Next it executes a math equation, ``Math.floor(Math.random()*(31-0+1))+0;``, and stores the value as a variable called *index*. ![*☆*](https://xaoiui.neocities.org/Limestar.gif)

![*☆*](https://xaoiui.neocities.org/Limestar.gif) Using the value of *index* the function *genquote* will run ``console.log(quotes[index]);``. ![*☆*](https://xaoiui.neocities.org/Limestar.gif)

*As of writing the current highest index is 31 but this is expected to change.*

***UPDATE!** Updated where 31 was to be ``quotes.length`` so that the max value wouldn't have to be manually updated.*

*☆* *♡* *☆* *♡* *☆* *♡* *☆* *♡* *☆* *♡* *☆* *♡*
