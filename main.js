
/**
* TODO: Implement a function that clears all the content
* prior to generating new random content
*/
// const container = document.querySelector('.meme-content');
// const newElement = document.createElement('img');
// newElement.setAttribute('src', 'images\memai\Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(2).png');
// container.appendChild(newElement);

function clearAll() {

}

/**
* TODO: 
* - Show a random Meme in the correct location
* - Never show more than 1 meme at a time
*/
function showMeme() {
  // Value is a string representing image URL
  const randomMemeUrl = getRandomData('memes');
  const container = document.querySelector('.meme-content');
  const newImg = document.createElement('img');
  newImg.setAttribute('src', randomMemeUrl);

  const isImg = container.querySelector('img');

  if (isImg) {
      container.innerHTML = '';
  }

  container.appendChild(newImg);
}


// * Valid arguments:
// *
// * 'memes', 'jokes', 'quotes', 'riddles'
// *
// * Return values:
// * 
// * For meme data: 
// * A string representing an image url
// * 
// * For joke data: 
// * A string representing the joke
// * 
// * For quote data:
// * An object - { quote: '', author: '' }
// * 
// * For riddle data:
// * An object - { question: '', answer: '' }
// *
// * Example usage: getRandomData('quotes');
// */
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

// ----------------------------------------------------
// NO NEED TO CHANGE ANYTHING BELOW but...
// feel free to add/remove items from these lists to customize
// your results
// ----------------------------------------------------

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = ['https://i.redd.it/a0v87gwzoge61.jpg', 'https://i.redd.it/q29egav34ee61.jpg', 'https://i.redd.it/iij16swxjie61.jpg', 'https://i.redd.it/vek7dm2hrge61.jpg', 'https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png', 'https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png', 'https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg', 'https://code-love.com/wp-content/uploads/2019/03/download.jpeg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg', 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg'];


// const memes = [
// '/images/memai/Screenshot_2021-02-21 Instagram photo by Support Local Memes • May 9, 2019 at 12 09 PM.png', 

// '/images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(1).png', 

// '/images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(2).png', 

// '/images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(3).png', 

// '/images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(4).png', 

// '/images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(5).png', 

// 'images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(6).png',
// 'images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(7).png',
// 'images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos(8).png',
// '/images/memai/Screenshot_2021-02-21 Support Local Memes ( support_local_memes) • Instagram photos and videos.png'
// ];

// Just a little helper function
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  photos
};

