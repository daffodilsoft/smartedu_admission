function handleProfileUpload(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const imageDataUrl = reader.result;

        const image = document.createElement('img');
        // const image = document.querySelector('#preview_profile_picture');

        image.src = imageDataUrl;
        image.style.width = "100px";
        image.style.height = "100px";

        const imageContainer = document.querySelector('#preview_profile_picture');
        imageContainer.appendChild(image);
    };
}
// passport
function handlePassportUpload(event) {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const imageDataUrl = reader.result;

        const image = document.createElement('img');
        // const image = document.querySelector('#preview_profile_picture');

        image.src = imageDataUrl;
        image.style.width = "100px";
        image.style.height = "100px";

        const imageContainer = document.querySelector('#preview_passport');
        imageContainer.appendChild(image);
    };
}
// signature
function handleSignatureUpload(event) { 
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const imageDataUrl = reader.result;

        const image = document.createElement('img');
        // const image = document.querySelector('#preview_profile_picture');

        image.src = imageDataUrl;
        image.style.width = "100px";
        image.style.height = "100px";

        const imageContainer = document.querySelector('#preview_signature');
        imageContainer.appendChild(image);
    };
}