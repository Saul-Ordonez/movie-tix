function Ticket(movieName, movieTime, userAge, ticketPrice) {
  this.movieName = movieName,
  this.movieTime = movieTime,
  this.userAge = userAge,
  this.ticketPrice = 10
}

// function generateTicket() {
  Ticket.prototype.changeValue = function() {
    if (this.movieName === 'spiderman') {
      this.ticketPrice += 2;
    }
    if (this.movieTime === 'matinee') {
      this.ticketPrice -= 2;
    }
    if (this.userAge === 'young' || this.userAge === 'senior') {
      this.ticketPrice -= 2;
    }
    return this.ticketPrice;
  }


  //   return this.ticketPrice;
  //   console.log(this.ticketPrice);
  // }
  //
  // Ticket.prototype.minusValue = function() {
  //   this.ticketPrice -= 2;
  //   return this.ticketPrice.minusValue;
  // }
  //
  //
    // if (this.movieTime === 'matinee') {
    //   return this.ticketPrice.minusValue();
    // }
  //   if (this.userAge === 'young' || this.userAge === 'senior') {
  //     return this.ticketPrice.minusValue();
  //   }
  // // }


$(document).ready(function() {
  $("form#movie-input").submit(function(event) {
    event.preventDefault();
    var movie = $('input[name=movie-name]:checked').val();
    var time = $('input[name=movie-time]:checked').val();
    var age = $('input[name=age]:checked').val();

    var newTicket = new Ticket (movie, time, age);
    newTicket.changeValue();
    console.log(newTicket);
  });
});
