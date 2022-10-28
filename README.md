# JS-Carousel-HW-Assignment
Here's an assignment from my client-side scripting class where I earned how to use callbacks in jQuery animations. I didn't do anything with the UI, but the animation and JS was my doing.

[Click this link](https://reecevela.github.io/JS-Carousel-HW-Assignment/) to be taken to my site!

Take a look below to see a snippet of my code as well!

In this portion specifically, I had an issue where multiple animations could be running at the same time if the user kept pressing the button before it was finished. I added the flag variable of `transitioning` so that the animation would only be able to be re-ran after it was reset at the very end of the second animation.


```
let transitioning = false;
$('a').click( (evt) => {
  if (!transitioning) {
    transitioning = true;
    const link = evt.currentTarget;
    const img = $('#image');
    
    img.animate(
      {opacity: 0, marginLeft: '-215px'},
      1000,
      () => {
        img.attr('src', $(link).attr('href'));
        img.attr('alt', $(link).children(':first').attr('alt'));
        img.animate(
          {opacity: 1, marginLeft: '105px'},
          1000,
          () => {
            transitioning = false;
          }); //end 2nd animation
      }); //end animation callback
  } //end if transitioning
  evt.preventDefault();
}); //end a click
```