



// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card, .hero-content').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Simple Typewriter Effect Simulation
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
    const text = typewriter.innerText;
    typewriter.innerText = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.innerText += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
}











// get in touch form


const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Stop page reload
    
    const data = new FormData(form);
    const submitBtn = document.getElementById("submitBtn");
    
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.innerHTML = "Thanks! Your message has been sent.";
            status.className = "success";
            form.reset();
        } else {
            status.innerHTML = "Oops! There was a problem submitting your form.";
            status.className = "error";
        }
    } catch (error) {
        status.innerHTML = "Oops! Connectivity issue.";
        status.className = "error";
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText = "Send Message";
    }

});
