function Die() {

};

Die.prototype.roll = function() {
  $('.die').each(function(k, die) {
    var value = Math.floor((Math.random()*6)+1);
    $(die).text(value);
  });
};

Die.prototype.add = function() {
  $('.dice').append('<div class="die">0</div>');
}

$(document).ready(function() {
  die = new Die()
  $('#roller button.add').on('click', function() {
     die.add()
  });

  $('#roller button.roll').on('click', function() {
     die.roll()
  });
});

