// References to the popup elements
const popup = document.getElementById('course-details-popup');
const popupCourseName = document.getElementById('popup-course-name');
const popupCourseDescription = document.getElementById('popup-course-description');
const popupCourseDetails = document.getElementById('popup-course-details');

// Function to show the popup
function showPopup(courseData) {
    popupCourseName.textContent = courseData.name;
    popupCourseDescription.textContent = courseData.description;

    // Clear existing details
    popupCourseDetails.innerHTML = '';
    courseData.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        popupCourseDetails.appendChild(li);
    });

    popup.classList.remove('hidden');
}

// Function to hide the popup
function hidePopup() {
    popup.classList.add('hidden');
}

// Attach event listener to close the popup when the "Close" button inside the popup is clicked
document.getElementById('close-popup-btn').addEventListener('click', hidePopup);

// Add event listeners to all "Show Details" buttons
document.querySelectorAll('.details-btn').forEach(button => {
    button.addEventListener('click', () => {
        const courseName = button.getAttribute('data-course');

        // Use the course data object
        const selectedCourse = coursesData[courseName];
        if (selectedCourse) {
            showPopup(selectedCourse);
        }
    });
});

// Course data
const coursesData = {
    'Beginner Sculpture Course': {
        name: 'Beginner Sculpture Course',
        description: 'A hands-on introduction to sculpture for absolute beginners.',
        details: [
            'Learn foundational sculpting techniques, including shaping and detailing.',
            'Understand basic concepts of form, texture, and balance in sculpture.',
            'Work with beginner-friendly materials such as basic clay and essential tools.',
            'Focus on safety and proper handling of sculpting equipment.'
        ]
    },
    'Advanced Sculpture Techniques': {
        name: 'Advanced Sculpture Techniques',
        description: 'Enhance your expertise with advanced sculpting methods.',
        details: [
            'Master complex sculpting techniques, including fine detailing and dynamic structures.',
            'Explore the use of advanced tools and premium materials for intricate work.',
            'Gain insights from guest artists on professional sculpting practices.',
            'Develop and refine your personal artistic style.'
        ]
    },
    'One-on-One Training': {
        name: 'One-on-One Training',
        description: 'Personalized mentorship tailored to your sculpting journey.',
        details: [
            'Receive individualized feedback and guidance from Pam England.',
            'Work on custom projects designed to enhance your unique skills and goals.',
            'Experiment with various materials and techniques suited to your needs.',
            'Ideal for focused skill development and overcoming specific challenges.'
        ]
    },
    'Sculpture for Kids': {
        name: 'Sculpture for Kids',
        description: 'Creative and engaging classes for young aspiring sculptors.',
        details: [
            'Introduce children to the basics of sculpture in a fun and safe environment.',
            'Projects include creating playful and imaginative sculptures like animals or toys.',
            'Use child-safe tools and colorful, easy-to-handle materials.',
            'Encourage creativity and problem-solving skills through hands-on activities.'
        ]
    }
};

// Function to handle color changes
function changeBodyColor(event) {
    
    document.body.style.backgroundColor = event.target.value
}

function changeNavColor(event) {
    const header = document.querySelector('header'); // Correctly select the header
    header.style.backgroundColor = event.target.value
}

// Function to change text style of course description
function changeTableTextStyle(){
    const table=document.getElementById('CourseTable');
    table.classList.add('changed-style');
}

function resetTableTextStyle(){
    const table=document.getElementById('CourseTable');
    table.classList.remove('changed-style');
}
