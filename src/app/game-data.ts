export const GAME_DATA = {
  'fox-and-geese': {
    id: 'fox-and-geese',
    name: 'Fox & Geese',
    instructions: {
      players: 2,
      description: "Fox and Geese is an asymmetrical game for 2 players. That is, each player has a different number of pieces, a different setup, and a different goal. The fox's goal is to capture all the geese, and the goal for the geese is to trap the fox.. This game dates back to the middle ages, and as with most ancient games, the rules have evolved over time and there are several variations. This is just one example of how to play, but feel free to experiment with other rules. Just make sure all the players agree on the rules before you start. ",
      setup: "<p> Decide who will play the fox, and who will play the geese. You can do this any way you'd like: coin toss, arm wrestle, a battle of wits... it doesn't really matter. The game is actually more fun if you take turns playing each side.</p> <p>There is 1 fox piece, and 13 geese. The Fox is placed in the center of the board on the middle intersection. The geese are placed on all of the intersections that are closest to the player who is playing the geese, as shown in the picture. </p> ",
      rules: "<p>The fox moves first:</p>" +
        "<ul>" +
        "<li>The fox must move along the lines on the board. You'll notice that on some intersections you will not be ableto move diagonally, but on others you can.</li>" +
        "<li>The fox can capture an adjacent goose by jumping over it if the spot on the other side of the goose is empty.</li>" +
        "<li>The fox is allowed to chain jumps together to capture multiple geese.</li>" +
        "<li>Captured geese are removed from the board. These geese are gone forever and can't be re-claimed by the gooseplayer.</li>" +
        "<li>The fox wins if it captures all the geese, but be careful not to get trapped!.</li>" +
        "</ul>" +
        "<p>On the goose's turn:</p>" +
        "<ul>" +
        "<li> The goose player moves one of their geese forward, diagonally forward, or sideways along the lines of theboard. You'll notice that on some intersections you will not be able to move diagonally, but on others you can.</li>" +
        "<li>Geese cannot jump over other pieces, but they can move multiple spaces in a straight line if there are no pieces in the way.</li>" +
        "<li>The geese win if they trap the fox so it has no more moves available, but be careful not to get eaten!</li>" +
        "</ul>",
      objective: "The fox player wins if they have captured all of the geese. The geese win if they can trap the fox so it is unable to move.",
      setupImgFile: 'fox-geese-setup.png'
    },
    history: {
      story: `<p>Fox and Geese is a very old game that dates back to the Middle Ages in Northern Europe, especially Scandinavia  and the British Isles. However, some believe it could be even older than that and may be the game referred to in the Norse "Grettis Saga."  From the 1400's onward it was a popular game amongst British royalty.
      </p>
      <p>
      An interesting side note: the fox symbolism did have some cultural significance in europe during the middle ages. Foxes and geese were depicted in stories such as "Reynard the Fox" as well as artwork of the time. The proverb "When the fox preaches, look to your geese" was born from one of these stories, and warns to be wary of hidden agendas in authority figures.
      </p>`,
      historyImg: {
        path: 'game-data-images/Reynard_the_Fox.png',
        alt: 'medieval painting of Reynard the Fox preaching to geese'
      }
    },
    purchase: {
      etsyURL: "https://www.etsy.com/shop/MarshBirdGames",
      productDescription: "Welcome to the circus of value...."
    }
  },
  'tablut': {
    id: 'tablut',
    name: 'Tablut',
    instructions: {
      players: 2,
      description: "Tablut is a two player war game that evolved from Hnefetafl and other Tafl family games. It's classified as a war game, but it's played assymentrically. Which means that each player has a different number of pieces and different objectives.",
      setup: ` <p>
      Each player has a different set of pieces. The player on the attacker side will have 16 matching pieces, and the defender will have 8 defenders and 1 king.
</p><p>
The board is set up with the king in the center square and the defenders 
in a cross shape surrounding him.
</p><p>
The attackers form 4 triangles, centered on each edge of the board 
as you see in the picture.
      </p>`,
      rules: `
        <ul>
        <li>The attacker moves first, and each player takes turns moving one piece at a time.</li>
        <li>All pieces (including the king) can only move orthogonally (not diagonally) in a straight line. They can move any number of squares as long as another piece is not in the way. They can't jump over other pieces (similar to a rook in chess)</li>
        <li>The central square is called the Throne, and no piece may occupy it except the King.</li>
        <li>The central square is called the Throne, and no piece may occupy it except the King.</li>
        <div>example:</div>
        <img src="/assets/images/game-data-images/tablut-capture.png" alt="example of how to caputure a piece in Tablut">
        <img src="/assets/images/game-data-images/tablut-nocapture.png" alt="demonstration of a Tablut piece that does not get captured">
        <li>The king must be surrounded by all 4 sides in order to be captured. Or if the King is on the edge of the board or adjacent to the throne, he is captured if he is surrounded on the remaining 3 sides. </li>
        <li>If the king is captured, the attackers win!</li>
        <li>If the king reaches one of the 4 corners of the board, the defenders win!</li>
        </ul>` ,
      objective: "The object of the game for the defender player is to get his king to one of the 4 corners of the board. The goal for the attackers is to capture the king.",
      setupImgFile: 'tablut-setup.png'
    },
    history: {
      story: `<p>Tablut is one of many variations of the “tafl” family of games. Tafl games are played on a grid, and are characterized by asymmetrical game play, which means each player has a different number of pieces, a different setup, and a different goal. These games fall into the larger category of “war games” which include other popular games such as chess and checkers. Evidence of tafl games dates back to around 400 AD which puts them some of the oldest games we know about.      
      </p><p>
      This family of games includes Norse game Hnefetafl which was played by the ancient Vikings. As with many aspects of viking culture, Hnefetafl spread to other parts of Europe over the centuries and evolved as it was adopted by other cultures including the Saxons. 
      </p><p>
      The gameplay of Tablut is very similar to Hnefetafl, however the board is smaller, being only 9x9. Because the board is smaller, the setup is more compact, and the number of pieces is smaller as well. Tablut was first written about in 1732 by a Swedish botanist named Linnaeus. According to his description the theme of the game is of a Swedish King who is defended by his loyal guards. They attempt to get him to safety while they fend off an attack by the Muscovites. 
      </p>`,
            historyImg: {
        path: 'game-data-images/tafl_artifact.jpg',
        alt: 'Tafl board artifact from the 1100s'
      }
    
    },
    purchase: {
      etsyURL: "https://www.etsy.com/listing/1258841149/tablut-hnefatafl-board-game?click_key=75e277652c625ceffed144f93cce20fbdd606cb0%3A1258841149&click_sum=9000dd4f&ref=shop_home_active_1&frs=1",
      imageList: [
        {
        path: 'product-images/tablut/setup.jpg',
        alt: 'handmade tafl game with pieces in starting position'
        },
        {
          path: 'product-images/tablut/box.jpg',
          alt: 'handmade tafl game board on an ornately decorated box'
          },
          {
            path: 'product-images/tablut/interior.jpg',
            alt: 'interior of tafl box with game pieces stored inside'
            },
            {
              path: 'product-images/tablut/closeup.jpg',
              alt: 'closeup of the hand made tablut game pieces'
              }
      ],
      productDescription: "Welcome to the circus of value...."
    }
  },
  'senet': {
    id: 'senet',
    name: 'Senet',
    instructions: {
      players: 2,
      description: `
      <ul>
      <li>The board: The game board is made up of 30 squares laid out in 3 rows of 10. The symbols on the board have meanings that we'll talk about later. Different boards from different eras have different symbols on them, so we'll just talk about the ones on this board.
      </li>
      <li>
      The game pieces: Each player had 7 pieces.</li>
      <li>
      The dice: This game is traditionally played with throwing sticks, but in the handmade version from MarshBird Games I include custom dice designed to give similar combinations to the traditional set of 3 throwing sticks. The reason I prefer dice is that it’s more random and harder to cheat. </li>
      <ul>
      `,
      setup: ` <p>Each player has 7 pieces, which are placed on the first 14 squares in an alternating pattern starting with the top left square.

      Game play will follow the direction of the arrows, starting with the top left, moving from left to right, then the middle row changing direction from right to left, then the bottom row left to right again. (essentially in in a zig-zag pattern)
      </p>`,
      rules: `<p>
      The player whos piece is on the first square (top left) goes first. (You can decide who gets that honor however you want.) The goal is to be the 1st player to get all your pieces through the path and off the board.
      </p>
      <p><strong>Roll the Dice:</strong></p>
      <p>Throw the dice to determine how many spaces to move. If you roll a 0 you get to move 5 spaces, otherwise move the number that you rolled.
          If you get a 0 or 4, you get an extra turn
          </p>
      
      <p><strong>Moving Your Pieces:</strong></p>
      <p>
          On each turn you must move a piece forward along the path if you are able to. If  none of your pieces can move forward, you have to move a piece backwards. If you can't move any pieces in either direction, your turn is over.
          </p>
          <p>
              Only one piece can occupy a space at a time. You can't land on your own space. If you land on an opponent's space you trade places with them, unless they are “safe”. There are 2 ways to be considered “safe” 
              </p>
              <ol>
                  <li>If a player has 2 or more pieces adjacent to each other on the game path, those pieces are safe.
                  </li>
                  <li>Any piece occupying the following squares is also safe:</li>
              </ol>
              <div style="display: flex; justify-content: space-around;">
                  <img class="game-square" src="/assets/images/game-data-images/ankh.png">
                  <img class="game-square" src="/assets/images/game-data-images/house-3-truths.png">
                  <img class="game-square" src="/assets/images/game-data-images/house-re-atoum.png">
                  <img class="game-square" src="/assets/images/game-data-images/house-re-horakty.png">
              </div>
              <p>As you can imagine, with so many sqares being considered "safe," you'll inevitably encounter a traffic jam, which adds an interesting element to the game </p>
              <p><strong>Special Squares:</strong></p>
              <div style="display: flex;">
                  <img class="game-square" src="/assets/images/game-data-images/ankh.png">
                  <p>The ankh is the symbol of rebirth. This is the start of the journey through life. <strong> This is one of the safe squares.</strong> Your opponent can't switch places with you while you rest here.  
                  </p>
              </div>
              <div style="display: flex;">
                  <img class="game-square" src="/assets/images/game-data-images/house-happiness.png">
                  <p> The House of Happiness is the first stage of the afterlife.  <strong> You must land on this square by exact count on this square before proceeding past it.</strong> This square is thought to represent the place where mummification rituals are performed. 
                  </p>
              </div>
              <div style="display: flex;">
                  <img class="game-square" src="/assets/images/game-data-images/house-waters.png">
                  <p> The House of Waters is the first trial. <strong> If you land here, you are sent back to the ankh. </strong> This square represents the believe that the dead must gain passage across the waters of the underworld. In some versions, a piece landing here is removed from the board entirely.  
                  </p>
              </div>
              <div style="display: flex;">
                  <img class="game-square" src="/assets/images/game-data-images/house-3-truths.png">
                  <p> The House of Three Truths <strong>is a safe square. You must roll exactly 3 to leave this square and subsequently remove your piece from the board. </strong> Many senet boards uncovered use 3 birds or 3 feathers to decorate this square. This has led Eqyptologists to believe that it represents the stage in the afterlife where the deceased's heart is weighed against a feather. If the heart is lighter than the feather, they are ready to move on. 
                  </p>
              </div>
              <div style="display: flex;">
                  <img class="game-square" src="/assets/images/game-data-images/house-re-atoum.png">
                  <p> The House of Re-Atoum is <strong>another safe square. You must roll exactly a 2 to leave this square. </strong> Re-Atoum (also known as Atum-Re) is a manifestation of the creator got Atum, and the sun god Re, and often represents the setting sun.
                  </p>
              </div>
              <div style="display: flex;">
                  <img class="game-square" src="/assets/images/game-data-images/house-re-horakty.png">
                  <p> The House of Re-Horakty is the last square, and is <strong>another safe square. You must roll exactly a 1 to leave this square. </strong> Re-Horakty is another manifestation of the sun god Re, and this time, represents the rising of the sun into the dawn.  
                  </p>
              </div>` ,
      objective: "The first to remove all of their pieces from the end of the board is the winner",
      setupImgFile: 'senet-setup.png'
    },
    history: {
      story: `<p>Senet is one of the oldest known board games and was played by the ancient Egyptians over 5000 years ago. Folks of all walks of life enjoyed this game, from the common workers to the pharaohs themselves. Several versions of this game have been discovered that spanned the various dynasties, and it evolved along with the culture. 
</p>
      <p>The theme of the game, much like many other aspects of Egyptian life, revolves around the cycle of life and death. Senet translates to “passing” and the movement of the pieces along the board represents a souls journey though the afterlife as they attempt to unite with Re-Horakhty, the god of the rising sun.
      </p>
      <p> Unfortunately, the rules of the game have not survived, so historians and game experts have had to speculate on how to play based on the clues. Because of this, there are several variations out there, and the instructions on this site are just one of many versions you can choose from. Just make sure that if you're playing with someone who already knows the game, that you agree on the rules ahead of time.
      </p><p>If you're interested in trying other versions, there are several videos and articles on the internet that describe different rules for the game.</p>`,
      historyImg: {
        path: 'game-data-images/Nefertari_playing_senet.jpg',
        alt: 'Painting from the tomb of Queen Nefertari, depicting the queen playing Senet'
      }
    
    },
    purchase: {
      etsyURL: "https://www.etsy.com/shop/MarshBirdGames",
      productDescription: "Welcome to the circus of value...."
    }
  }
}
