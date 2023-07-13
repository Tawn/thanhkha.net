var mainframe;

// Update JST every second (1000 milliseconds)
setInterval(getJST, 1000);

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Frames
    mainframe = document.getElementById('content-frame'); 

    // Start Content
    var element = document.getElementById('about');
    element.classList.replace('navbar-item', 'navbar-item-selected')
    
    // Restore Session
    const data = sessionStorage.getItem('selection');
    if (data != null) 
        navbarSelect(data);
    else
        displayAbout();
});

async function getJST() {
    fetch("http://worldtimeapi.org/api/timezone/Japan")
    .then(response => response.json())
    .then(data => {
        const now = data.datetime;
        const date = new Date(Date.parse(now));
        const time = date.toLocaleTimeString('en-US', { hour12: true });
        
        var displayTime = document.getElementById('navbar-center');
        displayTime.textContent = "Current Time (JST): " + time;
    })
    .catch(error => {
        console.log('Error:', error);
    });
}

function navbarSelect(selection) {
    // Get all navbar items
    var navItems = document.querySelectorAll('nav ul li a');
    // Clear Selection
    navItems.forEach(function(item) {
        if(item.textContent.toLocaleLowerCase() == selection) 
            item.classList.replace('navbar-item', 'navbar-item-selected');
        else 
            item.classList.replace('navbar-item-selected', 'navbar-item');
    });
    display(selection);
}

function display(selection) {
    // Clear Main Frame
    mainframe.innerHTML = '';

    // Store session selection
    sessionStorage.setItem('selection', selection);

    // Display Selected Content
    switch (selection) {
        case 'about':
            displayAbout();
            break;
        case 'experiences':
            displayExperiences();
            break;
        case 'projects':
            displayProjects();
            break;
        case 'contact':
            displayContact();
            break;
        default:
            break;
    }
}

function displayAbout() {
    // Left Div
    var leftDiv = document.createElement('div');
    leftDiv.classList.add('about_div_left');

    // (Intro - Name) H1
    var h1 = document.createElement('h1');
    h1.textContent = "Hi, I'm Thanh Kha.";

    // (Intro - Title) H3
    var h3 = document.createElement('h3');
    h3.textContent = "Sr Software Engineer";

    // Append Intro - Name, Title
    leftDiv.appendChild(h1);
    leftDiv.appendChild(h3);

    // (Intro - Greeting Message) P
    var p1 = document.createElement('p');
    p1.textContent = "I was born and raised in Massachusetts and now living in Japan for my work. "
    + "I'm also a U.S. Marine Veteran, having served four years and stationed at Camp Lejeune, North Carolina. "
    + "Following my military service, I pursued a B.S. degree in Computer Science at the University of Rochester. "
	+ "Currently, I am employed as a Senior Software Engineer at Lockheed Martin, Space. "
    + "In my current role, I am leading a team in Japan to deliver our LTE-over-space satellite system. "
	+ "I have a passion for coding, working with various technologies, and working with others to accomplish the same goals and to learn from one another. "
    + "I wish to continue to grow in the technology industry and become an awesome Engineer. ";

    // (Intro - Greeting Contact) P
    var p2 = document.createElement('p');
    p2.textContent = "Please feel free to reach out to me with any questions.";

    // Append Intro - Greeting Message
    leftDiv.appendChild(p1);
    leftDiv.appendChild(p2);

    // Append Left Div
    mainframe.appendChild(leftDiv);
    
    // Right Div
    var rightDiv = document.createElement('div');
    rightDiv.classList.add('about_div_right');

    // (Profile Picture) IMG
    var image = document.createElement('img');
    image.src = "/images/profile.jpg"
    image.classList.add('about_image')

    // Append Image
    rightDiv.appendChild(image);

    // Append Right Div
    mainframe.appendChild(rightDiv);

}
function displayExperiences() {

        // Main Div
        var mainDiv = document.createElement('div');
        mainDiv.classList.add('experiences_main_div');

        // Center Div
        var centerDiv = document.createElement('div');
        centerDiv.classList.add('experiences_center_div');

        // (EXP-1 - Lockheed Martin) Header Div
        var headerDiv = document.createElement('div');
        headerDiv.classList.add('experiences_header_div');

        // (EXP-1 - Lockheed Martin) Header
        var h1 = document.createElement('h1');
        h1.textContent = "Lockheed Martin, Space";
        var h3 = document.createElement('h3');
        h3.textContent = "Sr Software Engineer (2019 - Current)";

        // Append Headers to Header Div  
        headerDiv.appendChild(h1);
        headerDiv.appendChild(h3);

        // Append Header Div to Center Div
        centerDiv.appendChild(headerDiv);

        // (EXP-1 - Lockheed Martin) Profile-Image
        var image = document.createElement('img');
        image.src = "/images/utsunomiya.jpg";
        image.classList.add('experiences_image');

        // Append image 
        centerDiv.appendChild(image);

        // (EXP-1 - Lockheed Martin) Description
        var descDiv = document.createElement('div');
        descDiv.classList.add('experiences_desc_div');
        var desc1 = document.createElement('p');
        desc1.textContent = "I started working at Lockheed Martin after graduating from college in 2019, initially as an Associate Software Engineer. "
        + "My role involved developing system web interfaces for monitoring and controlling the first LTE-over-space satellite system. "
        + "I was responsible for testing and integrating system features. Over time, I have advanced to the position of Senior Software Engineer and Test Lead here in Japan. "
        + "I am considered the Subject Matter Expert (SME) for the overall system and user equipment (UE).";
        var desc2 = document.createElement('p');
        desc2.textContent = "I have gained a wealth of experience in various aspects of the LTE-over-space satellite system. "
        + "This includes working with Network Equipment (NWE), Radio Frequency Equipment (RFE), and core algorithms such as the MAC scheduler. "
        + "Additionally, I have taken on the responsibility of Test Director, managing our customers and team on a daily basis."; 
        
        // Append description 
        descDiv.appendChild(desc1);
        descDiv.appendChild(desc2);
        centerDiv.appendChild(descDiv);

        // (EXP-2 - Lockheed Martin) SA-Image
        var image2 = document.createElement('img');
        image2.src = "/images/sa.jpg";
        image2.classList.add('experiences_image');

        // Append sa-image 
        centerDiv.appendChild(image2);

        // (EXP-2 - Lockheed Martin) Description
        var descDiv2 = document.createElement('div');
        descDiv2.classList.add('experiences_desc_div');
        var desc3 = document.createElement('p');
        desc3.textContent = "Prior to my time in Japan, I gained extensive experience in creating verification procedures and collaborating closely with developers to verify and debug various aspects of the system specifications and capabilities. "
            + "This involved possessing a broad knowledge and understanding of the LTE-Over-Space Satellite system. "
            + "A significant portion of my time was dedicated to testing capabilities, analyzing packet flows using tools like Wireshark, and manipulating signals on the RFE (Radio Frequency Equipment). "
        var desc4 = document.createElement('p');
        desc4.textContent = "I took on the role of GUI developer, responsible for creating the monitoring and control interface for the system. "
            + "Leveraging the SCRUM methodology for development, our team followed a structured approach with weekly sprints that included daily status meetings, code reviews, and code deliveries. "
            + "We utilized the VUE framework for our projects, enabling efficient development and seamless integration. "
       
        // Append description 
        descDiv2.appendChild(desc3);
        descDiv2.appendChild(desc4);
        centerDiv.appendChild(descDiv2);

        // (EXP-3 - UofR) Header Div
        var headerDiv3 = document.createElement('div');
        headerDiv3.classList.add('experiences_header_div');

        // (EXP-3 - UofR) Header
        var h1 = document.createElement('h1');
        h1.textContent = "Unversity of Rochester";
        var h3 = document.createElement('h3');
        h3.textContent = "B.S. Computer Science, TA Workshop Leader (2015 - 2019)";

        // Append Headers to Header Div  
        headerDiv3.appendChild(h1);
        headerDiv3.appendChild(h3);

        // Append Header Div to Center Div
        centerDiv.appendChild(headerDiv3);

        // (EXP-3 - UofR) SA-Image
        var image3 = document.createElement('img');
        image3.src = "/images/uofr.png";
        image3.classList.add('experiences_image');

        // Append sa-image 
        centerDiv.appendChild(image3);
    
        // (EXP-3 - UofR) Description
        var descDiv3 = document.createElement('div');
        descDiv3.classList.add('experiences_desc_div');
        var desc5 = document.createElement('p');
        desc5.textContent = "I have always had a knack for coding because I enjoy the creativity involved and have had a passion "
            + "for experimenting with existing code since my early years. "
            + "This passion led me to pursue a Bachelor of Science degree in Computer Science at the University of Rochester. "
            + "During my studies, I found great satisfaction in developing websites, applications, games, and solving complex problems, "
            + "which solidified my desire to pursue a career in this field."
        var desc6 = document.createElement('p');
        desc6.textContent = "I have always derived joy from helping others, which eventually led me to become a TA Workshop Leader. "
            + "As a Workshop Leader, my responsibilities included overseeing quizzes, exams, and conducting review sessions, "
            + "in addition to facilitating weekly workshops that formed an integral part of the Computer Science curriculum. "
            + "These workshops required me to guide students, fostering teamwork while imparting foundational knowledge of coding, data structures, and algorithms using the Java language. "

        // Append description 
        descDiv3.appendChild(desc5);
        descDiv3.appendChild(desc6);
        centerDiv.appendChild(descDiv3);

        // (EXP-3 - UofR) Header Div
        var headerDiv3 = document.createElement('div');
        headerDiv3.classList.add('experiences_header_div');

        // (EXP-3 - USMUofRC) Header
        var h1 = document.createElement('h1');
        h1.textContent = "United States Marine Corps";
        var h3 = document.createElement('h3');
        h3.textContent = "MOS: 0612 - Field Wireman (2011 - 2015)";

        // Append Headers to Header Div  
        headerDiv3.appendChild(h1);
        headerDiv3.appendChild(h3);

        // Append Header Div to Center Div
        centerDiv.appendChild(headerDiv3);

        // (EXP-4 - USMC) SA-Image
        var image4 = document.createElement('img');
        image4.src = "/images/usmc.jpg";
        image4.classList.add('experiences_image');

        // Append sa-image 
        centerDiv.appendChild(image4);
    
        // (EXP-4 - USMC) Description
        var descDiv4 = document.createElement('div');
        descDiv4.classList.add('experiences_desc_div');
        var desc7 = document.createElement('p');
        desc7.textContent = "After completing high school, I had a strong desire to serve my country alongside my older brother. "
            + "We both come from a family of second-generation immigrants from South Korea. "
            + "In our military service, my brother served as a radio operator while I took on the role of a switchboard operator in the field of telecommunications. "
        var desc8 = document.createElement('p');
        desc8.textContent = "As a switchboard operator, my team and I honed our skills with the equipment, conducted inventory checks, and remained prepared for rapid deployment as part of the Quick-Reaction Force. "
            + "Additionally, I was selected to serve as a Marksmanship Coach, where I had the privilege of coaching Marines and Sailors of all ranks for their annual marksmanship qualifications. "
            + "This experience filled me with immense pride as an American, and I was genuinely happy to build strong bonds with my brothers and sisters in arms."
 
        // Append description 
        descDiv4.appendChild(desc7);
        descDiv4.appendChild(desc8);
        centerDiv.appendChild(descDiv4);


        // Append Center Div
        mainDiv.appendChild(centerDiv)
        // Append Main Div
        mainframe.appendChild(mainDiv);
        
}
function displayProjects() {
    // Projects Main Div
    var projectstDiv = document.createElement('div');
    projectstDiv.classList.add('projects_main_div');

    // Title Header
    var header = document.createElement('h1');
    header.textContent = "Projects";

    // Append Title Header
    projectstDiv.appendChild(header);

    // GitHub
    var githubDiv = document.createElement('div');
    githubDiv.classList.add('contact_linkedin_div');
    var githubH4 = document.createElement('h4');
    githubH4.textContent = "GitHub:"
    var githubA = document.createElement('a');
    githubA.href = "https://github.com/Tawn";
    githubA.textContent = "https://Github.com/Tawn";

    // Append LinkedIn
    githubDiv.appendChild(githubH4);
    githubDiv.appendChild(githubA);
    projectstDiv.appendChild(githubDiv);

    // Append Projects Div
    mainframe.appendChild(projectstDiv);
}
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