function myChallenge() {
  var body = document.body;

  if (body.classList.contains('clicked')) {
    body.classList.remove('clicked');
  } else {
    body.classList.add('clicked');
  }
}

