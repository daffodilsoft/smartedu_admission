// Next
function nextSection() {
  console.log("next");
  var currentSection = document.querySelector(
    'section[style*="display: block"]'
  );

  if (currentSection.getAttribute("id") === "section1") {
    document.getElementById("section2").style.display = "block";
    document.querySelector(".color2").style.backgroundColor = "lightblue";
  }
  else if (currentSection.getAttribute("id") === "section2") {
    document.getElementById("section3").style.display = "block";
    document.querySelector(".color3").style.backgroundColor = "lightblue";
  } else if (currentSection.getAttribute("id") === "section3") {
    document.getElementById("section4").style.display = "block";
    document.querySelector(".color4").style.backgroundColor = "lightblue";
  } else if (currentSection.getAttribute("id") === "section4") {
    document.getElementById("section4").style.display = "none";
    document.getElementById("section5").style.display = "block";
    document.querySelector("button:last-child").style.display = "none";
    document.querySelector(".color5").style.backgroundColor = "lightblue"; // hide "next" button on last section

  }

  currentSection.style.display = "none";
  document.querySelector("button:first-child").style.display = "block"; // show "previous" button when moving forward
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
// Previous
function prevSection() {
  console.log("pre");

  var currentSection = document.querySelector(
    'section[style*="display: block"]'
  );

  if (currentSection.getAttribute("id") === "section2") {
    document.querySelector(".color2").style.backgroundColor =
      "rgb(194, 225, 177)";
    document.getElementById("section1").style.display = "block";
    document.querySelector("button:first-child").style.display = "none"; // hide "previous" button on first section
  } else if (currentSection.getAttribute("id") === "section3") {
    document.querySelector(".color3").style.backgroundColor =
      "rgb(194, 225, 177)";
    document.getElementById("section2").style.display = "block";

  } else if (currentSection.getAttribute("id") === "section4") {
    document.querySelector(".color4").style.backgroundColor =
      "rgb(194, 225, 177)";
    document.getElementById("section3").style.display = "block";

  } else if (currentSection.getAttribute("id") === "section5") {
    document.querySelector(".color5").style.backgroundColor =
      "rgb(194, 225, 177)";
    document.getElementById("section4").style.display = "block";
    document.getElementById("section5").style.display = "none";
    document.querySelector("button:last-child").style.display = "block"; // show "next" button when moving back from last section
  }

  currentSection.style.display = "none";
  document.querySelector("button:last-child").style.display = "block"; // show "next" button when moving backward
  document.body.scrollTop = document.documentElement.scrollTop = 0;

}

// Address
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

