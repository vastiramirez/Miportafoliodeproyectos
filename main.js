let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#e69231;"> SOBREVIVO EN ESTA VIDA :V </span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
