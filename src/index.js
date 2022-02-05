import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/age.js';

$(document).ready(function() {
  $('#ageForm').submit(function(event) {
    event.preventDefault();
    const ageInput = parseInt($('#ageInput').val())
    const userAge = new Age(ageInput);
    userAge.mercuryCalc();
    userAge.venusCalc();
    userAge.marsCalc();
    userAge.jupiterCalc();
    userAge.earthYearsLeft();
    userAge.mercuryYearsLeft();
    userAge.venusYearsLeft();
    userAge.marsYearsLeft();
    userAge.jupiterYearsLeft();
    $('#mercuryAge').text(userAge.mercury);
    $('#venusAge').text(userAge.venus);
    $('#marsAge').text(userAge.mars);
    $('#jupiterAge').text(userAge.jupiter);
    $('.mercuryExpect').text(userAge.mercuryExpect);
    $('.venusExpect').text(userAge.venusExpect);
    $('.marsExpect').text(userAge.marsExpect);
    $('.jupiterExpect').text(userAge.jupiterExpect);
    $('#results').fadeIn();
    if (ageInput <= 72) {
      $('#results3').hide();
      $('#results2').fadeIn();
    }
    else if (ageInput >= 72) {
      $('#results2').hide();
      $('#results3').show();
    }
  });
});