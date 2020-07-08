const pdftk = require('node-pdftk');
const fs = require('fs');

var sourcePDF = "test/test.pdf";
var destinationPDF =  "test/test_complete_pdftk.pdf";
var myFormData = {
    "last_name" : "John3 1",
    "first_name" : "Doe",
    "date" : "Jan 1, 2013",
    "football" : "Off",
    "baseball" : "Yes",
    "basketball" : "Off",
    "hockey" : "Yes",
    "nascar" : "Off"
};

pdftk
    .input(sourcePDF)
    .fillForm(myFormData)
    .flatten()
    .output()
    .then(buffer => {
        // Do stuff with the output buffer
        console.log(buffer)
        fs.writeFileSync(destinationPDF, buffer);

    })
    .catch(err => {
        // handle errors
        console.log(err)
    });

