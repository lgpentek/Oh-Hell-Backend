class Card {
  constructor(value, suit) {
    if (Card.suits.indexOf(suit) !== -1 && Card.values.indexOf(value) !== -1) {
      return {
        suit: suit,
        value: value,
        id: value + suit[0]
      };
    }
    return false;
  }

  static get suits() {
    return ["Clubs", "Diamonds", "Hearts", "Spades"];
  }

  static get values() {
    return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  }

  

  static max(cards, trump) {
    //assumes first card in array is card that was lead

    let largest = cards.shift();
    let lead = largest.suit;
//plg    console.log( "max() entry " + "current suit,value =" + card.suit + card.value + largest.suit + largest.value + "= largest suit,value" );
    for (let card of cards) {
      if (card.suit > largest.suit) {
//plg        console.log( "current suit=" + card.suit + " > " + largest.suit + "= largest suit");
        console.log( "current suit > largest suit        ");
        largest = card;
      } else if (card.suit < largest.suit) {
//plg        console.log( "current suit=" + card.suit + " < " + largest.suit + "= largest suit");
        console.log( "current suit < largest suit        ");

        continue;
      } else {
//plg        console.log( "current suit=" + card.suit + " = " + largest.suit + "= largest suit");
 //plg       console.log( "current suit,value =" + card.suit + card.value + " ? " + largest.suit + largest.value + "= largest suit,value" );
        console.log( "current suit = largest suit        ");
        largest = Card.values.indexOf(largest.value) < Card.values.indexOf(card.value) ? card : largest;
      }
    }
    return largest;

//plg    let largest = cards.shift();
//plg    let lead = largest.suit;
//plg    for (let card of cards) {
//plg      if (card.suit === trump && largest.suit !== trump) {
//plg        largest = card;
//plg      } else if (card.suit !== largest.suit) {
//plg        continue;
//plg      } else {
//plg        largest = largest.value < card.value ? card : largest;
//plg      }
//plg    }
//plg    return largest;
  }
}

module.exports = Card;
