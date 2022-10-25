

const color= document.getElementById("darkmood");
const body= document.querySelector("body");
// add eventlistener on button here
   color.addEventListener('click', function() {
         this.classList.toggle('bi-moon');
   if (this.classList.toggle('bi-brightness-high')) {
    // agr ye icon dark ho to color change krod body color
    body.style.background='white';
    body.style.color='#1e1f21';
    body.style.transition='2s';

   }
   else{
    body.style.background='#1e1f21';
    body.style.color='white';
    body.style.transition='2s';
   }
   })


