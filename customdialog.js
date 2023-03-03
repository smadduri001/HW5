window.addEventListener('DOMContentLoaded', init);

function init() {
    let outputBox = document.getElementById("outputBox");

    document.getElementById("alertButton").addEventListener("click", function() {
        let alertDialog = document.getElementById("alertDialog");
        alertDialog.showModal();
        document.getElementById("alertPressedButton").addEventListener("click", function() {
            alertDialog.close();
        })
    });

}