var SemanticUIColors = "red orange yellow olive green teal blue violet purple pink brown".split(" ");

function randomInt(a, b) {
    a = Math.ceil(a);
    b = Math.floor(b);
    return random = Math.floor(Math.random() * (b - a)) + a;
  }
  
function setSemanticUIColor() {
    for (var a = [$(".dream-tags")], b = 0; b < a.length; b++) {
        a[b].children().map(function() {
            $(this).addClass(SemanticUIColors[randomInt(0, SemanticUIColors.length)]);
        });
    }
}