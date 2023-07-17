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
    + "Additionally, I have taken on the responsibility of Test Director, managing our customer and team on a daily basis. "; 
    var desc3 = document.createElement('p');
    desc3.textContent = "Prior to Japan, I've delivered the Network Equipment (NWE) aspects of system. "
    + "My responsibilities included ensuring the implementations meets System Requirements Specification (SRS). "
    + "I conducted verification tests on various NWE features, such as the GUI Monitor and Control, backup functionality, and mesh structure. "
    + "I would also use Wireshark to assist with verification for analyzing packet information that are transported between components. "
    var desc4 = document.createElement('p');
    desc4.textContent = "I have also extensively worked on the Radio Frequency Equipment (RFE). "
    + "Our system requires being able to handle various scenarios, such as signal loss or degradation. "
    + "To simulate and test these scenarios, I used RF tools such as the Satellite-Link Emulator and Spectrum Analyzer. "
    + "I've also worked closely with the Scheduler (MAC) developers to ensure that the system is able to handle such cases effectively. ";

    // Append description 
    descDiv.appendChild(desc1);
    descDiv.appendChild(desc2);
    descDiv.appendChild(desc3);
    descDiv.appendChild(desc4);
    centerDiv.appendChild(descDiv);

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
    desc5.textContent = "I have always had a knack for coding from joy of creativeness that's involved "
        + "and experimenting with existing code since my early years. "
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