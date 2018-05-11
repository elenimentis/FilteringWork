//random image on load

let imageLoad = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'];
let randomImageLoad = imageLoad[Math.floor(Math.random() * imageLoad.length)];
$('#imageLoadContainer').append(
  '<img id="loadImage" src=img/' + randomImageLoad + '>'
);


//random image on click


let image = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.jpg', 'image9.jpg'];

function changeImage() {
  $('#theImage').remove();

  let randomImage = image[Math.floor(Math.random() * image.length)];

  $('#imageContainer').append(
    '<img id="theImage" src=img/' + randomImage + '>'
  );
}

$('.buttonChangeImage').click(function() {
  changeImage();
});



// random text on click


let myArray = ['January', 'February', 'March'];

function showquote() {
  $('#quote').remove();
  let rand = Math.floor(Math.random() * myArray.length);
  $('#textContainer').append('<div id="quote">' + myArray[rand] + '</div>');
}

$('#randomText').click(function() {
  showquote();
});

// add random text on mouseenter


let words = [
  'First piece of text, ',
  'second chunk of letters, ',
  'the third cluster, ',
  'and a fourth set of words, '
];

for (let myText = 0; myText < 5; myText++) {
  $('.text').append(words[Math.floor(Math.random() * words.length)] + ' ');
}

function randomText() {
  for (let myText = 0; myText < 5; myText++) {
    $('.text').append(words[Math.floor(Math.random() * words.length)] + ' ');
  }
}

$('.text').mouseenter(function() {
  randomText();
});

// random css
for (let increment = 0; increment < 100; increment++) {
  $('#boxContainer').append('<div class="box"></div>');
}

function makePattern() {
  $('.box').each(function() {
    let topPosition =
      Math.floor(Math.random() * ($(window).height() - 100)) + 'px';
    let leftPosition =
      Math.floor(Math.random() * ($(window).width() - 100)) + 'px';
    $(this).css('top', topPosition).css('left', leftPosition);
    let newColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $(this).css('background-color', newColor);
    let newSize = Math.floor(Math.random() * 600) + 'px';
    $(this).css('width', newSize).css('height', newSize);
    let randomImage = image[Math.floor(Math.random() * image.length)];
    $(this).css('background-image', 'url(' + 'img/' + randomImage + ')');
  });
}

$(window).resize(function() {
  makePattern();
});
