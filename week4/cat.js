document.addEventListener('mousemove', function(e) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(function(eye) {
      let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
      let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
      let radian = Math.atan2(e.pageX - x, e.pageY - y);
      let distance = Math.min(Math.sqrt(Math.pow(e.pageX - x, 2) + Math.pow(e.pageY - y, 2)), 25);
      let rotation = (radian * (180 / Math.PI) * -1) + 270;
      eye.style.transform = 'translate(' + (distance * Math.sin(radian)) + 'px, ' + (distance * Math.cos(radian)) + 'px) rotate(' + rotation + 'deg)';
    });
  });
  
  