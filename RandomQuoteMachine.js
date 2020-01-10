<style>
  * {
    margin: 0;
    padding: 0;
    font-family: "Arial Black", Gadget, sans-serif;
  }
  
  body {
    height: 100vh; /*The height of the body should be equal to the height of the viewport.*/
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #container-fluid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: beige;
    }
    //border: 1px solid black; /*helps during coding to visually see the borders of the div element*/
  }
  
  #quote-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: beige;
    padding: 20px 50px;
    width: 600px;
    //height: auto;
    border-radius: 5px;
    //border: 5px solid black;
    #text {
      padding: 15px;
      text-align: center;
    }
    #author {
      font-style: italic;
    }
  }
  
  #clickable {
    width: 600px;
    //border: 1px solid black;
  
  }
  
  #clickable {
    #new-quote {
      float: right;
      font-size: 18px;
      margin: 5px;
      padding: 5px;
  
    }
    #tweet-quote i {
      font-size: 1.7em;
      padding: 5px;
      color: black;
    }
  }
  
  #creator {
    color: beige;
    font-size: 14px;
    padding: 1em;
    a {
      color: beige;
    }
    a:hover {
      color: blue;
    }
  }
</style>

<head>
  <!--to access icons from https://fontawesome.com/icons/-->
  <script src="https://kit.fontawesome.com/e6e6da4e04.js" crossorigin="anonymous"></script>
</head>

<body>
  <div id="container-fluid">
    <h1>Quote of the Day</h1>
    <div id="quote-box">
      <span id="text"></span>
      <span id="author"></span>
      <div id="clickable">
        <button class="btn btn-default" id="new-quote">New Quote</button>
        <a href="twitter.com/intent/tweet" id="tweet-quote" title="Tweet this!" target="_blank">
          <i class="fab fa-twitter-square"></i>
        </a>
        <!--<a class="button" id="instagram-quote" title="Instagram this!" target="_blank">
          <i class="fab fa-instagram"></i>
        </a> -->
      </div>
    </div>
    <div id="creator"> 
      Created by <a href="https://codepen.io/antonwang/" target="_blank">Anton</a>
    </div>
  </div>
  <script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js'></script>
</body>

/* Requirements: Completed

User Story #1: I can see a wrapper element with a corresponding id="quote-box".

User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized. 
 */


/*
Colors: https://www.w3schools.com/cssref/css_colors.asp

quotes are gathered from the following sites:
https://pakwired.com/100-best-quotes-time/
https://www.toolshero.com/toolsheroes/elon-musk/

More info on tweet button:
https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
*/

$(document).ready(function() {
    var color;
    var quote;
    var author;
    randomQuote();
    function randomQuote() {
      var colorArray = ["#000000","#8A2BE2", "#A52A2A", "#5F9EA0", "#D2691E", "#6495ED", "#DC143C", "#008B8B", "#8B0000", "#9400D3", "#FF1493", "#DAA520", "#008000", "#4B0082"];
      var quoteArray = ["Live as if you were to die tomorrow. Learn as if you were to live forever.", "That which does not kill us makes us stronger.", "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.", "If you cannot do great things, do small things in a great way.", "If opportunity doesn’t knock, build a door.", "Wise men speak because they have something to say; fools because they have to say something.", "Strive not to be a success, but rather to be of value.", "Do not let what you cannot do interfere with what you can do.", "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "Either you run the day, or the day runs you.", "Life shrinks or expands in proportion to one’s courage.", "You must be the change you wish to see in the world.", "The best way to predict the future is to invent it.", "Everything has beauty, but not everyone can see.", "Believe you can and you’re halfway there.", "Imagination is everything. It is the preview of life’s coming attractions.", "Happiness is not something ready made. It comes from your own actions.", "Too many of us are not living our dreams because we are living our fears.", "It is never too late to be what you might have been.", "A person who never made a mistake never tried anything new.", "Great minds discuss ideas; average minds discuss events; small minds discuss people.", "The only thing worse than being blind is having sight but no vision.", "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", "The only thing we have to fear is fear itself.", "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", "When something is important enough, you do it even if the odds are not in your favor.", "If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it’s not.", "Failure is an option here. If things are not failing, you are not innovating enough.", "Starting and growing a business is as much about the innovation, drive and determination of the people who do it as it is about the product they sell.", "The first step is to establish that something is possible; then probability will occur.", "I could either watch it happen or be a part of it.", "Life is like riding a bicycle. To keep your balance you must keep moving."];
      var authorArray = ["Mahatma Gandhi", "Friedrich Nietzsche", "Bernard M. Baruch", "Napoleon Hill", "Milton Berle", "Plato", "Albert Einstein", "John Wooden", "Mark Twain", "Maya Angelou", "Jim Rohn", "Anais Nin", "Mahatma Gandhi", "Alan Kay", "Confucius", "Theodore Roosevelt", "Albert Einstein", "Dalai Lama", "Les Brown", "George Eliot", "Albert Einstein", "Eleanor Roosevelt", "Helen Keller", "Martin Luther King Jr.", "Franklin D. Roosevelt", "Oprah Winfrey", "Elon Musk", "Elon Musk", "Elon Musk", "Elon Musk", "Elon Musk", "Elon Musk", "Albert Einstein"];
      var randomNumGenerator = Math.floor(Math.random()*quoteArray.length);
      quote = quoteArray[randomNumGenerator];
      author = authorArray[randomNumGenerator];
      $('#text').text("\"" + quote + "\"");
      $('#author').text("- " + author);
      
      color = colorArray[Math.floor(Math.random()*colorArray.length)];
      $('body').css("background-color", color);
      $('span').css("color", color);
      $('button').css("color", color);
      $('i').css("color", color);    
    }
     
    $('#new-quote').click(function() {
      randomQuote();
    });
    
    $('#tweet-quote').click(function() {
      window.open("https://twitter.com/intent/tweet?text=\"" + quote + "\" - " + author );
    })
});