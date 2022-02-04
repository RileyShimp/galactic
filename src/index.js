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
  });
});