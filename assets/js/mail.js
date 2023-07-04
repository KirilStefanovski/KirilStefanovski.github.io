function sendMail() {

    console.log("Button")
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("mailBody").value;

    // Construct mailto link
    let mailtoLink = "mailto:stefanovski.kiril@gmail.com";
    mailtoLink += "?subject=" + encodeURIComponent(subject);
    mailtoLink += "&body=" + encodeURIComponent(body);

    // Redirect to the mailto link
    window.location.href = mailtoLink;
}