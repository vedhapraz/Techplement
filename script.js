const quotes = [
  { q: "The important thing is not to stop questioning.", a: "Albert Einstein" },
  { q: "Science is a way of thinking much more than it is a body of knowledge.", a: "Carl Sagan" },
  { q: "The unexamined life is not worth living.", a: "Socrates" },
  { q: "I think, therefore I am.", a: "René Descartes" },
  { q: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", a: "Aristotle" },
  { q: "All truths are easy to understand once they are discovered; the point is to discover them.", a: "Galileo Galilei" },
  { q: "He who opens a school door, closes a prison.", a: "Victor Hugo" },
  { q: "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", a: "Stephen Hawking" },
  { q: "The good life is one inspired by love and guided by knowledge.", a: "Bertrand Russell" },
  { q: "If I have seen further, it is by standing on the shoulders of giants.", a: "Isaac Newton" },
  { q: "Happiness is not an ideal of reason but of imagination.", a: "Immanuel Kant" },
  { q: "Doubt is not a pleasant condition, but certainty is absurd.", a: "Voltaire" },
  { q: "Nothing in life is to be feared, it is only to be understood.", a: "Marie Curie" },
  { q: "The whole of science is nothing more than a refinement of everyday thinking.", a: "Albert Einstein" },
  { q: "The greatest wealth is to live content with little.", a: "Plato" },
  { q: "Man is the measure of all things.", a: "Protagoras" },
  { q: "The only true wisdom is in knowing you know nothing.", a: "Socrates" },
  { q: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.", a: "Edwin Hubble" },
  { q: "To know what you know and what you do not know, that is true knowledge.", a: "Confucius" },
  { q: "What we know is a drop, what we don't know is an ocean.", a: "Isaac Newton" },
  { q: "Philosophy begins in wonder.", a: "Plato" },
  { q: "Injustice anywhere is a threat to justice everywhere.", a: "Martin Luther King Jr." },
  { q: "We are all now connected by the Internet, like neurons in a giant brain.", a: "Stephen Hawking" },
  { q: "The mind is everything. What you think you become.", a: "Buddha" },
  { q: "Every man takes the limits of his own field of vision for the limits of the world.", a: "Arthur Schopenhauer" },
  { q: "Wonder is the beginning of wisdom.", a: "Socrates" },
  { q: "You cannot teach a man anything; you can only help him find it within himself.", a: "Galileo Galilei" },
  { q: "Life must be understood backward. But it must be lived forward.", a: "Søren Kierkegaard" },
  { q: "Liberty consists in doing what one desires.", a: "John Stuart Mill" },
  { q: "It is not length of life, but depth of life.", a: "Ralph Waldo Emerson" },
  { q: "Everything should be made as simple as possible, but not simpler.", a: "Albert Einstein" },
  { q: "Education is what remains after one has forgotten what one has learned in school.", a: "Albert Einstein" },
  { q: "Time is a flat circle.", a: "Friedrich Nietzsche" },
  { q: "He who thinks great thoughts, often makes great errors.", a: "Martin Heidegger" },
  { q: "The cosmos is within us. We are made of star stuff.", a: "Carl Sagan" },
  { q: "Wherever the art of medicine is loved, there is also a love of humanity.", a: "Hippocrates" },
  { q: "The measure of intelligence is the ability to change.", a: "Albert Einstein" },
  { q: "Freedom is nothing else but a chance to be better.", a: "Albert Camus" },
  { q: "The true sign of intelligence is not knowledge but imagination.", a: "Albert Einstein" },
  { q: "All men by nature desire to know.", a: "Aristotle" },
  { q: "We are like butterflies who flutter for a day and think it's forever.", a: "Carl Sagan" },
  { q: "A wise man can learn more from a foolish question than a fool can learn from a wise answer.", a: "Bruce Lee" },
  { q: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", a: "Aristotle" },
  { q: "Science without religion is lame, religion without science is blind.", a: "Albert Einstein" },
  { q: "To be is to be perceived.", a: "George Berkeley" },
  { q: "Nature is pleased with simplicity.", a: "Isaac Newton" },
  { q: "There is no wealth like knowledge, and no poverty like ignorance.", a: "Buddha" },
  { q: "Chance favors only the prepared mind.", a: "Louis Pasteur" },
  { q: "Truth is ever to be found in simplicity.", a: "Isaac Newton" }
];


function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];
  document.getElementById("quote").innerText = `"${quote.q}"`;
  document.getElementById("author").innerText = `— ${quote.a}`;
}

function searchByAuthor() {
  const author = document.getElementById("authorName").value.trim().toLowerCase();
  const found = quotes.find(q => q.a.toLowerCase().includes(author));

  if (found) {
    document.getElementById("quote").innerText = `"${found.q}"`;
    document.getElementById("author").innerText = `— ${found.a}`;
  } else {
    document.getElementById("quote").innerText = "No quotes found.";
    document.getElementById("author").innerText = "";
  }
}
