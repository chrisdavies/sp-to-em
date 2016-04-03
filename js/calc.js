// Basic logic for driving the UI, converting between sp and em
(function () {
  'use strict'

  // sp * 0.0624 = em
  var ratio = 0.0624

  // Handle user input
  el('.sp-input').addEventListener('input', updateFromSp)
  el('.em-input').addEventListener('input', updateFromEm)

  // Converts from sp to em
  function spToEm(sp) {
    return sp * ratio
  }

  // Converts from em to sp
  function emToSp(em) {
    return em / ratio
  }

  // Updates the UI based on the sp input event
  function updateFromSp(e) {
    var sp = eventToNumber(e)
    var em = spToEm(sp)

    updateValues(sp, em)
  }

  // Updates the UI based on the em input event
  function updateFromEm(e) {
    var em = eventToNumber(e)
    var sp = emToSp(em)

    updateValues(sp, em)
  }

  // Grabs the input value and converts it to a number
  function eventToNumber(e) {
    return parseFloat(e.target.value) || 0
  }

  // Updates the UI to display the specified sp and em
  function updateValues(sp, em) {
    // Get the values without weird trailing zeros or huge decimals
    var spVal = parseFloat(sp.toFixed(3))
    var emVal = parseFloat(em.toFixed(3))

    // Update the actual font-size for previewing
    el('.sp-out').style.fontSize = emVal + 'em'

    // Update the sp/em input values
    updateValue('.sp-input', spVal)
    updateValue('.em-input', emVal)
  }

  // Updates the specified input if it does not have focus
  function updateValue(selector, value) {
    var $el = el(selector)
    if ($el !== document.activeElement) {
      $el.value = value
    }
  }

  // Shorthand for document.querySelector
  function el(selector) {
    return document.querySelector(selector)
  }

}())
