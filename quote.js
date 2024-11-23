var quotes = ["There's only two ways to write error-free programs; only the third one works. - Alan Perlis", "Any significantly advanced technology is indistinguishable from magic. - Arthur C. Clarke", "The best way to predict the future is to invent it. - Alan Kay", "The technology you use impresses no one. The experience you create with it is everything. - Sean Gerety", "You can focus on the things that are barriers or you can focus on scaling the wall or redefining the problem. - Tim Cook", "Dont be afraid to change the model. - Reed Hastings", "Never trust a computer you cant throw out a window. - Jeff Pesis", "Computers have lots of memory but no imagination. - Unknown", 'curiosity, obsession and dogged endurance, combined with self-criticism have brought me to my ideas. - Albert Enstine"];
// array of quotes the equation generates an index to
var index = Math.floor(Math.random()*(8-0+1))+0;
// random array index generator

function genquote (){
// funtion to print the quote and perhaps little guy to say it
  console.log(quotes[index]);
};

genquote();
