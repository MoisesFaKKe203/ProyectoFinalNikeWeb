export function showMessage(message, type) {
    Toastify({
        text: message,
        duration: 3000,
        destination: 'http://127.0.0.1:5501/index.html',
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "green" : "red"
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

