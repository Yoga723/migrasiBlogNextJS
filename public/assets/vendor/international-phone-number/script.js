var iti;
var subFooterIti; //varibel untuk number di subscribe/connect now footer
const input = document.querySelector("#whatsapp-number");
if (input) {
  iti = window.intlTelInput(input, {
    initialCountry: "id",
    utilsScript: "./utils.js",
  });
}

// varibel untuk number di subscribe/connect now footer
const inputSubFooterWhatsapp = document.querySelector("#inputSubFooterWhatsapp");
if (inputSubFooterWhatsapp) {
  subFooterIti = window.intlTelInput(inputSubFooterWhatsapp, {
    initialCountry: "id",
    utilsScript: "./utils.js",
  });
}
