function displayContact() {
    // Contacts Main Div
    var contactDiv = document.createElement('div');
    contactDiv.classList.add('contact_main_div');

    // Title Header
    var header = document.createElement('h1');
    header.textContent = "Contact";

    // Append Title Header
    contactDiv.appendChild(header);

    // Email
    var email_div = document.createElement('div');
    email_div.classList.add('contact_email_div');
    var email_h4 = document.createElement('h4');
    email_h4.textContent = "Email:"
    var email_a = document.createElement('a');
    email_a.href = "mailto:tkha@live.com";
    email_a.textContent = "Tkha@live.com";

    // Append Email
    email_div.appendChild(email_h4);
    email_div.appendChild(email_a);
    contactDiv.appendChild(email_div);

    // Phone
    var phone_div = document.createElement('div');
    phone_div.classList.add('contact_phone_div');
    var phone_h4 = document.createElement('h4');
    phone_h4.textContent = "Tel:"
    var phone_a = document.createElement('a');
    phone_a.href = "tel:+17742725064";
    phone_a.textContent = "+1 (774) 272-5064";

    // Append Phone
    phone_div.appendChild(phone_h4);
    phone_div.appendChild(phone_a);
    contactDiv.appendChild(phone_div);

    // LinkedIn
    var linkedin_div = document.createElement('div');
    linkedin_div.classList.add('contact_linkedin_div');
    var linkedin_h4 = document.createElement('h4');
    linkedin_h4.textContent = "LinkedIn:"
    var linkedIn_a = document.createElement('a');
    linkedIn_a.href = "https://www.linkedin.com/in/thanhkha/";
    linkedIn_a.textContent = "https://www.LinkedIn.com/in/ThanhKha/";

    // Append LinkedIn
    linkedin_div.appendChild(linkedin_h4);
    linkedin_div.appendChild(linkedIn_a);
    contactDiv.appendChild(linkedin_div);

    // Append Contact Div
    mainframe.appendChild(contactDiv);

}