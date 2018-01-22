
  function Coordinates(x, y) {
    this.x = x;
    this.y = y;
  }
  function showCoords(event) {
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var coor = "Start: X coords: " + x + ", Y coords: " + y
    var startingPoint = new Coordinates(x,y);
    alert(coor);
    var nodes = createArray();
  //  DrawPath(nodes);
    Draw(startingPoint);
//    startingPoint = rounding(nodes, startingPoint);
//   alert("hi" + startingPoint.x);
    Draw(startingPoint);
  }
//change this later
  function endPoint() {
    var x = 101;     // Get the horizontal coordinate
    var y = 142;     // Get the vertical coordinate
    var coor = "End: X coords: " + x + ", Y coords: " + y;
    var endPoint = new Coordinates(x, y);
    return endPoint;
  }
/*
   function rounding(nodes, input) {
     var larger = false;
     var temp = 0;
     for(i = 0; i < nodes.length; i++) {
       if (input.x > nodes[i].x) {
         temp = nodes[i].x;
         larger = true;
       } else if (input.x < nodes[i].x && larger == true) {
          if (input.x < (temp + nodes[i].x)/2) {
            input.x = temp;
          } else {
            input.x = node[i].x;
          }
        } else  if (i + 1 == nodes.length){
        input.x = temp;
        }
       }
       larger = false;
       for(i = 0; i < nodes.length; i++) {
         if (input.y > nodes[i].y) {
           temp = nodes[i].y;
           larger = true;
         } else if (input.y < nodes[i].y && larger == true) {
            if (input.y < (temp + nodes[i].y)/2) {
              input.y = temp;
            } else {
              input.y = node[i].y;
            }
          } else  if (i + 1 == nodes.length){
            input.y = temp;
          }
        } else {
        }
//    alert(input.x);
     return input;
   }*/
  function createArray() {
     //create array that stores Coordinates object
     //alert("test");
     var coords = [];
     //store coordinates of each node
     var first = new Coordinates(213, 200);
     for (i = 0; i < 4; i++) {
         var temp = new Coordinates(first.x + i * 40, first.y);
         coords.push(temp);
     }
     first = new Coordinates(54, 200);
     for (j = 0; j < 2; j++) {
          for(i = 0; i < 8; i++) {
            var temp = new Coordinates(first.x + i * 40, first.y - (j+1) * 30);
            coords.push(temp);
          }
     }
     return coords;
   }
   function DrawPath(coords) {
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      for(i = 0; i < coords.length; i++) {
        ctx.rect(coords[i].x ,coords[i].y,5,5);
        ctx.stroke();
      }
    }
    function Draw(input) {
      var c=document.getElementById("myCanvas");
      var ctx=c.getContext("2d");
      ctx.rect(input.x ,input.y,5,5);
      ctx.stroke();
    }

