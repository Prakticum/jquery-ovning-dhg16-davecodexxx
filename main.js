//Javscript kommentar
/***
LAYOUT
************/

.flex-grid {
  display: flex;
}
.flex-grid .col {
  flex: 1;
}
.flex-grid-thirds {
  display: flex;
  justify-content: space-between;
}
.flex-grid-thirds .col {
  width: 32%;
}

@media (max-width: 400px) {
  .flex-grid,
  .flex-grid-thirds {
    display: block;
    
  }
.flex-grid .col,
  .flex-grid-thirds .col {
      width: 100%;
      margin: 0 0 10px 0;
    }
}


* {
  box-sizing: border-box;
}
body {
  padding: 20px;
}
.flex-grid { 
  margin: 0 0 20px 0;
}
.col {
  background: salmon;
  padding: 20px;
}
var ready = require('document-ready')

ready(function () {
  //=> DOM is ready
})

/***
TYPE
********/

header, footer {
    text-align: center;
}
footer { padding-top: 20px;}
