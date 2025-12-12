document.addEventListener('DOMContentLoaded', function () {
    const enquiryForm = document.querySelector('.enquiry-form');

    if (enquiryForm) {
        enquiryForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            // Collect form data
            const studentName = document.getElementById('student-name').value;
            const parentName = document.getElementById('parent-name').value;
            const mobile = document.getElementById('mobile').value;
            const email = document.getElementById('email').value;
            const school = document.getElementById('school-select').value;
            const board = document.getElementById('board').value;
            const grade = document.getElementById('class-select').value;

            // Construct email body
            const subject = `New Admission Enquiry: ${studentName}`;
            const body = `
New Admission Enquiry Details:

Academic Year: 2026-2027
Student Name: ${studentName}
Parent Name: ${parentName}
Mobile Number: ${mobile}
Email Address: ${email}
School: ${school}
Board: ${board}
Class: ${grade}

--------------------------------------------------
Sent from Discovery National School Website
            `.trim();

            // Create mailto link
            const mailtoLink = `mailto:gowthamnagrajvb1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open default email client
            window.location.href = mailtoLink;
        });
    }

    // Virtual Campus Tour Video Logic
    const videoCover = document.getElementById('video-cover');
    const campusVideo = document.getElementById('campus-video');

    if (videoCover && campusVideo) {
        // Play video on cover click
        videoCover.addEventListener('click', function () {
            videoCover.style.display = 'none';
            campusVideo.play();
        });

        // Revert to cover when video ends
        campusVideo.addEventListener('ended', function () {
            campusVideo.pause();
            campusVideo.currentTime = 0;
            videoCover.style.display = 'flex';
        });
    }

    // Popup Enquiry Form Logic
    const popupOverlay = document.getElementById('enquiry-popup');
    const closePopupBtn = document.querySelector('.close-popup');
    const popupForm = document.getElementById('popup-enquiry-form');

    if (popupOverlay) {
        // Show popup after 5 seconds
        setTimeout(() => {
            popupOverlay.classList.add('show');
        }, 5000);

        // Close popup on close button click
        if (closePopupBtn) {
            closePopupBtn.addEventListener('click', () => {
                popupOverlay.classList.remove('show');
            });
        }

        // Close popup on clicking outside content
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });

        // Handle Popup Form Submission
        if (popupForm) {
            popupForm.addEventListener('submit', function (e) {
                e.preventDefault();

                // Collect form data
                const studentName = document.getElementById('popup-student-name').value;
                const parentName = document.getElementById('popup-parent-name').value;
                const mobile = document.getElementById('popup-mobile').value;
                const email = document.getElementById('popup-email').value;
                const school = document.getElementById('popup-school-select').value;
                const board = document.getElementById('popup-board').value;
                const grade = document.getElementById('popup-class-select').value;

                // Construct email body
                const subject = `New Admission Enquiry (Popup): ${studentName}`;
                const body = `
New Admission Enquiry Details (Popup):

Academic Year: 2026-2027
Student Name: ${studentName}
Parent Name: ${parentName}
Mobile Number: ${mobile}
Email Address: ${email}
School: ${school}
Board: ${board}
Class: ${grade}

--------------------------------------------------
Sent from Discovery National School Website
                `.trim();

                // Create mailto link
                const mailtoLink = `mailto:gowthamnagrajvb1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Open default email client
                window.location.href = mailtoLink;

                // Close popup after submission (optional)
                popupOverlay.classList.remove('show');
            });
        }
    }
});
