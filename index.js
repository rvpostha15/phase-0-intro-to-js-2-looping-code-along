// Code your solutions in this file

/*

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

*/



/*
function writeCards(cards, occasion) {
  const newArray=[];
  for (let i=0; i<cards.length; i++) {
    newArray.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`)
    debugger;
  }

  return newArray;
}

*/

function writeCards(cards, occasion) {
  const newArray=[];
  for (const card of cards) {
    newArray.push(`Thank you, ${card}, for the wonderful ${occasion} gift!`)
    debugger;
  }

  return newArray;
}

function countDown(numbas) {
  for (let i = numbas; i >= 0; i--) {
    console.log(i)
  }

}


/*
function countDown(numbas) {
  let i = numbas
  while (i >= 0) {
    console.log(i);
    i--;
  }

}
*/




/*

describe( 'countDown()', () => {
    afterEach( () => {
      spy.restore();
    } );

    it( 'invokes console.log once for each number, counting down from the number provided to zero', () => {
      countDown( 10 );
      expect( spy.callCount, "Expected countDown(10) to invoke 11 console.logs" )
        .to.eq( 11 );
    } );

    it( 'logs each number when counting down, starting from the number provided', () => {
      countDown( 4 );
      expect( spy.calledWithExactly( 4 ), "Expected countDown(4) to log 4 first" )
        .to.be.true;
      expect( spy.calledWithExactly( 3 ), "Expected countDown(4) to log 3 after 4" )
        .to.be.true;
      expect( spy.calledWithExactly( 2 ), "Expected countDown(4) to log 2 after 3" )
        .to.be.true;
      expect( spy.calledWithExactly( 1 ), "Expected countDown(4) to log 1 after 2" )
        .to.be.true;
      expect( spy.calledWithExactly( 0 ), "Expected countDown(4) to log 0 after 1" )
        .to.be.true;
    } );
  } );
} );


*/