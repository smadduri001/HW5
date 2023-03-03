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

    document.getElementById("confirmButton").addEventListener("click", function() {
        outputBox.innerHTML = ``;
        setTimeout(() => {
            let confirmDialog = document.getElementById("confirmDialog");
            confirmDialog.showModal();
            document.getElementById("confirmCancelButton").addEventListener("click", function() {
                confirmDialog.close();
                outputBox.innerHTML = `The value returned by the confirm method is : false`;
            });
            document.getElementById("confirmOkButton").addEventListener("click", function() {
                confirmDialog.close();
                outputBox.innerHTML = `The value returned by the confirm method is : true`;
            });
        }, 0);
    });

    document.getElementById("promptButton").addEventListener("click", function() {
        outputBox.innerHTML = ``;
        setTimeout(() => {
            let promptDialog = document.getElementById("promptDialog");
            promptDialog.showModal();
            document.getElementById("promptCancelButton").addEventListener("click", function() {
                outputBox.innerHTML = `User didn't enter anything`;
                promptDialog.close();
            });
            document.getElementById("promptOkButton").addEventListener("click", function() {
                let userInput = document.getElementById("promptInput");
                if(userInput.value == null) {
                    outputBox.innerHTML = `User didn't enter anything`;
                }
                else {
                    let purified = DOMPurify.sanitize(userInput.value);
                    outputBox.innerHTML = `Prompt result: ${purified}`;
                }
                promptDialog.close();
            });
        }, 0);
    });

}