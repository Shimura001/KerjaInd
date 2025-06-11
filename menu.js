document.addEventListener("DOMContentLoaded", () => {
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const observer = new IntersectionObserver(
    entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        navLinks.forEach(link => {
            link.classList.remove("active", "text-white");
            link.classList.add("text-gray-300");
            if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active", "text-white");
            link.classList.remove("text-gray-300");
            }
        });
        }
    });
    },
    {
    threshold: 0.5, // bagian tengah section terlihat minimal 50%
    }
);

sections.forEach(section => observer.observe(section));
});

tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#000000',
                secondary: '#6b21a8',
                accent: '#9333ea',
                highlight: '#a855f7'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }
    }
}
