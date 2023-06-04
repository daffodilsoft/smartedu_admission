// function  for showing and hiding fields in admission form based on checkbox selection
function diu_emp_click() {
    let diu_emp_checkbox = document.getElementById("diu_emp");
    let emp_id = document.getElementById("emp_id");
    let emp_name = document.getElementById("emp_name");

    if (diu_emp_checkbox.checked == true) {
        emp_id.classList.remove("d-none");
        emp_name.classList.remove("d-none");
    } else {
        emp_id.classList.add("d-none");
        emp_name.classList.add("d-none");
    }
    // console.log("HEy are you there");
}

// Function for showing and hiding fields in admission form based on program type and applicant type selection 
function Program_type_click() {
    let Program_type_selected = document.getElementById("program_type_id");
    let Program_type = document.getElementById("vanish_field");


    if (Program_type_selected.value != "") {
        Program_type.classList.remove("d-none");

    } else {
        Program_type.classList.add("d-none");

    }
}

// Function for showing and hiding fields in admission form based on applicant type selection
function applicant_type_click() {
    let applicant_type_selected = document.getElementById("applicant_type_id");
    let showing_fields = document.getElementsByClassName("field_show");
    let showing_fields2 = document.getElementsByClassName("field_show2");
    for (let i = 0; i < showing_fields.length; i++) {
        if (applicant_type_selected.value == "international_student") {
            showing_fields[i].classList.remove("d-none");
        } else {
            showing_fields[i].classList.add("d-none");
        }
    }
    for (let i = 0; i < showing_fields2.length; i++) {
        if (applicant_type_selected.value == "local_student") {
            showing_fields2[i].classList.remove("d-none");
        } else {
            showing_fields2[i].classList.add("d-none");
        }
    }
}

// Get Applicant Profile Photo
// $("#profile_picture").change(function () {
//     var input_profile_picture = document.getElementById('profile_picture');
//     var input_preview_profile_picture = document.getElementById('preview_profile_picture');
//     var preview_profile_picture_modal = document.getElementById('preview_profile_picture_modal');
//     var input_preview_profile_picture_details = document.getElementById('preview_profile_picture_details');

//     input_preview_profile_picture.innerHTML = "";
//     input_preview_profile_picture_details.innerHTML = "";

//     var input_file = this.files[0];
//     if (typeof input_file !== 'undefined') {
//         if (!(/^image\/(png|jpe?g|jpg)$/).test(input_file.type)) {
//             input_profile_picture.value = "";
//             return input_preview_profile_picture_details.insertAdjacentHTML('beforeend', `<br/>Unsupported format. File Type: ${input_file.type};<br/>File Name: ${input_file.name}`);
//         } else if (input_file.size / 1024 > 1025) {
//             input_profile_picture.value = "";
//             return input_preview_profile_picture_details.insertAdjacentHTML('beforeend', `<br/>File Too Large. File Type: ${input_file.size / 1024} KB;`);
//         } else {
//             var img_profile_picture = new Image();
//             img_profile_picture.src = window.URL.createObjectURL(input_file);
//             input_preview_profile_picture.appendChild(img_profile_picture);
//             input_preview_profile_picture_details.insertAdjacentHTML('beforeend',
//                 `<br/>File Size: ${img_profile_picture.width}×${img_profile_picture.height} px, ${Math.round(input_file.size / 1024)} KB; File Type: ${input_file.type};<br/>File Name: ${input_file.name}`);
//         }
//         var modal_picture = new Image();
//         modal_picture.src = window.URL.createObjectURL(input_file);
//         preview_profile_picture_modal.appendChild(modal_picture);

//     }
// });file



