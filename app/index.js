// require('./main.css');
require('./main.scss');
var sub = require('./sub');
var app  = document.createElement('div');
var back = document.createElement('div');
back.setAttribute('class','back');
app.innerHTML = '<h1>Hello webpack</h1>';
app.appendChild(sub());
document.body.appendChild(app);
document.body.appendChild(back);
