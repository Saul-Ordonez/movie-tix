function Ticket(movieName, movieTime, userAge, ticketPrice) {
  this.movieName = movieName,
  this.movieTime = movieTime,
  this.userAge = userAge,
  this.ticketPrice = 10
}

// function generateTicket() {
  Ticket.prototype.changeValue = function() {
    if (this.movieName === 'Spiderman') {
      this.ticketPrice += 2;
    }
    if (this.movieTime === '12:30 PM') {
      this.ticketPrice -= 2;
    }
    if (this.userAge === 'Youth' || this.userAge === 'Senior') {
      this.ticketPrice -= 2;
    }
    return this.ticketPrice;
  }



$(document).ready(function() {
  $("form#movie-input").submit(function(event) {
    event.preventDefault();
    var movie = $('input[name=movie-name]:checked').val();
    var time = $('input[name=movie-time]:checked').val();
    var age = $('input[name=age]:checked').val();

    var newTicket = new Ticket (movie, time, age);
    newTicket.changeValue();

    $('.userMovie').html(newTicket.movieName);
    $('.userShowtime').html(newTicket.movieTime);
    $('.userTicket').html(newTicket.userAge);
    $('.userPrice').html(newTicket.ticketPrice);

    $('#show-ticket').show();

    console.log(newTicket);
  });
});
