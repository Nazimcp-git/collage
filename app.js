document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.remove('fa-times');
            hamburger.querySelector('i').classList.add('fa-bars');
        });
    });

    // 2. Scroll Animation Observer (Fade In Up)
    const observerOptions = {
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 3. Render Programs (Hardcoded Data based on source)
    // No Admin Panel needed. Just edit this array to add events.
    const programsData = [
        {
            title: "Hippocampus State Championship",
            date: "November 2024",
            desc: "കേരളത്തിലെ ഏറ്റവും പ്രതിഭാധനനായ മുസ്ലിം വിദ്യാർത്ഥിയെ കണ്ടെത്താനുള്ള നാദിയയുടെ വിജ്ഞാന മത്സരം.",
            tag: "Completed"
        },
        {
            title: "Common Admission Test 2025",
            date: "April 2025",
            desc: "സമസ്‌ത അഞ്ചാം തരം പൊതു പരീക്ഷ വിജയിച്ച വിദ്യാർത്ഥികൾക്കുള്ള പ്രവേശന പരീക്ഷ.",
            tag: "Upcoming"
        },
        {
            title: "Kite Rohingya Project",
            date: "Ongoing",
            desc: "ഹൈദരാബാദ് കേന്ദ്രീകരിച്ച് റോഹിങ്ക്യൻ അഭയാർത്ഥികൾക്കായി നാദിയ നടത്തുന്ന വിദ്യാഭ്യാസ പദ്ധതി.",
            tag: "Social Service"
        },
        {
            title: "Nishan Student Fellowship",
            date: "Yearly",
            desc: "സർഗാത്മക രംഗങ്ങളിൽ മികവ് പുലർത്തുന്ന വിദ്യാർത്ഥികൾക്കുള്ള സ്കോളർഷിപ്പ്.",
            tag: "Award"
        }
    ];

    const programsContainer = document.getElementById('programs-container');

    programsData.forEach(prog => {
        const card = document.createElement('div');
        card.className = 'program-card hidden'; // Added hidden class for animation
        
        // Determine color for tag
        let tagColor = '#c5a059';
        if(prog.tag === 'Upcoming') tagColor = '#28a745';
        if(prog.tag === 'Completed') tagColor = '#6c757d';

        card.innerHTML = `
            <div style="height: 150px; background: var(--navy); display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.2);">
                <i class="fas fa-calendar-check" style="font-size: 3rem;"></i>
            </div>
            <div class="p-content">
                <span class="p-date" style="background:${tagColor}">${prog.tag}</span>
                <h3 class="p-title">${prog.title}</h3>
                <p style="font-size: 0.9rem; margin-bottom: 10px; color:#888;"><i class="far fa-clock"></i> ${prog.date}</p>
                <p class="malayalam-text" style="font-size: 0.95rem;">${prog.desc}</p>
            </div>
        `;
        programsContainer.appendChild(card);
        observer.observe(card); // Add animation to dynamic elements
    });

});