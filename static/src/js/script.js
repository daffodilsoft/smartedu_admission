// Next
function nextSection() {
  var currentSection = document.querySelector(
    'section[style*="display: block"]'
  );
  let application_type = $('#applicant_type_id').val();
  let program_type = $('#program_type_id').val();
  let application_numb = $('#application_numb').val();
  let program = $('#program_id').val();


  let firstName = $('#member_first_name').val();
  let lastName = $('#member_last_name').val();
  let email = $('#email').val();


  if (currentSection.getAttribute("id") === "section1") {
    if (application_type == '') {
      $('#applicant_type_error').text('Please fill out this field');
    }
    if (program_type == '') {
      $('#program_type_error').text('Please fill out this field');
    }

    if (application_numb == '') {
      $('#application_numb_error').text('Please fill out this field');
    }

    if (program == '') {
      $('#program_error').text('Please fill out this field');
    }

    if (program_type != '' && program != '' && application_numb != '') {
      $('#applicant_type_error').text('');

      $('#program_type_error').text('');

      $('#application_numb_error').text('');

      $('#program_error').text('');

      currentSection.style.display = "none";
      document.getElementById("section2").style.display = "block";
      document.querySelector(".color2").style.backgroundColor = "rgba(178, 219, 233, 0.432)";
    } else {

      if (program_type != '') {
        
        $('#applicant_type_error').text('');
        $('#program_type_error').text('');
      }
      if (application_numb != '') {
        $('#application_numb_error').text('');
      }
      if (program != '') {
        $('#program_error').text('');
      }


      document.getElementById("section1").style.display = "block";
    }


  } else if (currentSection.getAttribute("id") === "section2") {

    if (firstName == '') {
      $('#member_first_name_error').text('Please fill out this field');
    }
    if (lastName == '') {
      $('#last_name_error').text('Please fill out this field');
    }
    if (email == '') {
      $('#member_email_error').text('Please fill out this field');
    }

    if (firstName != '' && lastName != '') {
      $('#member_first_name_error').text('');
      $('#last_name_error').text('');
      $('#member_email_error').text('');

      currentSection.style.display = "none";
      document.getElementById("section3").style.display = "block";
      document.querySelector(".color3").style.backgroundColor = "rgba(178, 219, 233, 0.432)";

    } else {
      if (firstName != '') {
        $('#member_first_name_error').text('');
      }
      if (lastName != '') {
        $('#last_name_error').text('');
      }
      if (email != '') {
        $('#member_email_error').text('');
      }

      document.getElementById("section2").style.display = "block";
      document.getElementById('section2').scrollIntoView({ behavior: 'smooth' });
    }


  }else if (currentSection.getAttribute("id") === "section3") {
    currentSection.style.display = "none";
    document.getElementById("section4").style.display = "block";
    document.querySelector(".color4").style.backgroundColor = "rgba(178, 219, 233, 0.432)";
  }
  else if (currentSection.getAttribute("id") === "section4") {

    currentSection.style.display = "none";
    document.getElementById("section5").style.display = "block";
    document.querySelector(".color5").style.backgroundColor = "rgba(178, 219, 233, 0.432)";
    document.querySelector("button:last-child").style.display = "none"; // hide "next" button on last section
  }
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
  

// Previous
function prevSection() {
  var currentSection = document.querySelector(
    'section[style*="display: block"]'
  );

  if (currentSection.getAttribute("id") === "section2") {
    document.querySelector(".color2").style.backgroundColor =
      "#d5caec57";
    document.getElementById("section1").style.display = "block";
    document.querySelector("button:first-child").style.display = "block"; // hide "previous" button on first section
  } else if (currentSection.getAttribute("id") === "section3") {
    document.querySelector(".color3").style.backgroundColor =
      "#d5caec57";
    document.getElementById("section2").style.display = "block";

  } else if (currentSection.getAttribute("id") === "section4") {
    document.querySelector(".color4").style.backgroundColor =
      "#d5caec57";
    document.getElementById("section3").style.display = "block";

  } else if (currentSection.getAttribute("id") === "section5") {
    document.querySelector(".color5").style.backgroundColor =
      "#d5caec57";
    document.getElementById("section4").style.display = "block";
    document.getElementById("section5").style.display = "none";
    //     document.querySelector("button:last-child").style.display = "block"; // show "next" button when moving back from last section
  }

  currentSection.style.display = "none";
  document.querySelector("button:last-child").style.display = "block"; // show "next" button when moving backward
  document.body.scrollTop = document.documentElement.scrollTop = 0;

}
// function for checkbox  (permanent address)  (present address)  
function changeSelect2() {
  console.log("add");


  let obj = {
    "checkbox": document.getElementById("permanent_address"),
    "permanent_country": document.getElementById("permanent-country").value,
    "permanent_state": document.getElementById("permanent-state").value,
    "permanent_district": document.getElementById("permanent-district").value,
    "permanent_city": document.getElementById("Permanent-city").value,
    "permanent_thana": document.getElementById("permanent-thana").value,
    "permanent_zip": document.getElementById("permanent-zip").value,
    "permanent_street1": document.getElementById("permanent-street1").value,
    "permanent_street2": document.getElementById("permanent-street2").value,
  }

  if (obj.checkbox.checked) {
    // country
    let present_country = document.getElementById("present-country")
    for (let i = 0; i < present_country.length; i++) {
      if (present_country[i].value == obj.permanent_country) {
        present_country[i].selected = true;
      }
    }
    // state
    let present_state = document.getElementById("present-state")
    for (let i = 0; i < present_state.length; i++) {
      if (present_state[i].value == obj.permanent_state) {
        present_state[i].selected = true;
      }
    }
    //district
    let present_district = document.getElementById("present-district")
    for (let i = 0; i < present_district.length; i++) {
      if (present_district[i].value == obj.permanent_district) {
        present_district[i].selected = true;
      }
    }

    //thana
    let present_thana = document.getElementById("present-thana")
    for (let i = 0; i < present_thana.length; i++) {
      if (present_thana[i].value == obj.permanent_thana) {
        present_thana[i].selected = true;
      }
    }

    // city
    if (obj.permanent_city != "") {
      document.getElementById("present-city").value = obj.permanent_city
    }
    // zip
    if (obj.permanent_zip != "") {
      document.getElementById("present-zip").value = obj.permanent_zip
    }
    //street
    if (obj.permanent_street1 != "") {
      document.getElementById("present-street1").value = obj.permanent_street1
    }
    //street2
    if (obj.permanent_street2 != "") {
      document.getElementById("present-street2").value = obj.permanent_street2
    }


  }
}


