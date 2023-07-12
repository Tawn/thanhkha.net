var mainframe;

document.addEventListener("DOMContentLoaded", function() {
    // Initialize Frames
    mainframe = document.getElementById('content-frame'); 

    // Start Content
    var element = document.getElementById('about');
    element.classList.replace('navbar-item', 'navbar-item-selected')
    
    // Restore Session
    const data = sessionStorage.getItem('selection');
    if (data != null) 
        navbarSelect(data)
    else
        displayAbout();
});

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
    sessionStorage.setItem('selection', 'about');

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
    p1.textContent = "I am currently employed at Lockheed Martin, Space, where I have the opportunity to work on cutting-edge technology. "
        + "I have always had a passion for working with technology, and I feel incredibly grateful to be part of the team involved in developing new breakthroughs. "
        + "I've been in Japan since early 2022, working on delivering the first LTE-Over-Space Satellite system. "
        + "It's an amazing feeling to see many years of dedicated work prior to now seeing the system in action that will "
        + "serve a whole country and save lives. ";

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
        desc1.textContent = "I'm currently in Japan, leading the test plans and executions for the delivery of our product. "
            + "Every day is always a challenge to satisfy the customer and execute the plan as quickly and efficiently as possible. "
            + "The team I lead consists mostly of new members whom I train to operate the system and guide in executing tasks. "
            + "I am considered the SME (Subject-Matter Expert) on the UE (User Equipment) and the overall system, "
            + "so I directly handle the customers' daily technical questions. "
            + " The best part of all this is being able to travel all around Japan sharing this experience with others. "
        var desc2 = document.createElement('p');
        desc2.textContent = "I automate many of the repetitive tasks I encounter on a daily basis by creating software tools. "
            + "Since our system is Linux-based, automating system operations is typically accomplished through bash or Python scripts. "
            + "Another tool I developed, called 'directors_tool,' is specifically designed for automating daily tasks and generating summaries. "
            + "I have shared this tool on my Projects page. "
            + "'directors_tool' saves me a significant amount of time when documenting tasks and allows me to easily track their statuses. "
            + "Building various tools has become essential to manage the numerous moving parts involved in my everyday responsibilities." 
        
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
            + "A significant portion of my time was dedicated to analyzing packet flows using tools like Wireshark and manipulating signals on the RFE (Radio Frequency Equipment). "
        var desc4 = document.createElement('p');
        desc4.textContent = "Furthermore, I took on the role of GUI developer, responsible for creating the monitoring and control interface for the system. "
            + "Leveraging the SCRUM methodology for development, our team followed a structured approach with weekly sprints that included daily status meetings, code reviews, and code deliveries. "
            + "We utilized the VUE framework for our projects, enabling efficient development and seamless integration. "
       
        // Append description 
        descDiv2.appendChild(desc3);
        descDiv2.appendChild(desc4);
        centerDiv.appendChild(descDiv2);

        // (EXP-4 - USMC) Header Div
        var headerDiv3 = document.createElement('div');
        headerDiv3.classList.add('experiences_header_div');

        // (EXP-4 - USMC) Header
        var h1 = document.createElement('h1');
        h1.textContent = "United States Marine Corps";
        var h3 = document.createElement('h3');
        h3.textContent = "0612 - Field Wireman (2011 - 2015)";

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
        var desc6 = document.createElement('p');
        desc6.textContent = "After completing high school, I had a strong desire to serve my country alongside my older brother. "
            + "We both come from a family of second-generation immigrants from South Korea. "
            + "In our military service, my brother served as a radio operator while I took on the role of a switchboard operator in the field of telecommunications. "

        var desc7 = document.createElement('p');
        desc7.textContent = "As a switchboard operator, my team and I honed our skills with the equipment, conducted inventory checks, and remained prepared for rapid deployment as part of the Quick-Reaction Force. "
            + "Additionally, I was selected to serve as a Marksmanship Coach, where I had the privilege of coaching Marines and Sailors of all ranks for their annual marksmanship qualifications. "
            + "This experience filled me with immense pride as an American, and I was genuinely happy to build strong bonds with my brothers and sisters in arms."
 
        // Append description 
        descDiv4.appendChild(desc6);
        descDiv4.appendChild(desc7);
        centerDiv.appendChild(descDiv4);


        // Append Center Div
        mainDiv.appendChild(centerDiv)
        // Append Main Div
        mainframe.appendChild(mainDiv);
        
}
function displayProjects() {
    var header = document.createElement('h1');
    header.textContent = "Projects";
    mainframe.appendChild(header)
}
function displayContact() {
    var header = document.createElement('h1');
    header.textContent = "Contact";
    mainframe.appendChild(header)
}