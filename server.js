var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one': {
    title:'Article One|Subham Mohapatra',
    heading:'Article One',
    date:'Aug 14,2016',
    content:'<p>Article One Content</p>'
},
'article-two': {
    title:'Article Two|Subham Mohapatra',
    heading:'Article Two',
    date:'Aug 14,2016',
    content:'<p>Article Two Content</p>'
},
'article-three': {
    title:'Article Three|Subham Mohapatra',
    heading:'Article Three',
    date:'Aug 14,2016',
    content:'<p>Article Three Content</p>'
}
}

function createHTML(data){
    var title=data.title
    var heading=data.heading
    var date=data.date
    var content=data.content
    var htmlTemplate=
    `<html>
       <head>
           <title>${title}</title>
       </head>
       <body>
           <div class=container>
               <div>
                   <a href='/'>Home</a>
               </div>
               <hr>
               <h3>${heading}</h3>
               <div>
                   ${date}
               </div>
               <div>
                   ${content}
               </div>
           </div>
       </body>
    </html>`
    return htmlTemplate
}

app.get('/:articleName',function(req,res){
   var articleName=req.params.articleName; 
   res.send(createHTML(articles[articleName])); 
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
