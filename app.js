const userData = [
    {
        text: "Ovu uslugu čišćenja koristim već više od godine dana i ne bih mogao biti zadovoljniji. Uvijek su točni, temeljiti i ostave moj dom besprijekorno čistim!",
        name: "John Doe",
        imeFirme: "Ime Firme"
    },
    {
        text: "Služba za čišćenje koju koristimo za naše poslovne prostore je izvanredna! Brzi, efikasni i vrlo pedantni, ostavili su naše kancelarije besprijekorno čistima. Radimo u vrlo dinamičnom okruženju i njima je uvijek bilo lako prilagoditi se našem rasporedu. Topla preporuka za sve poslovne subjekte!",
        name: "Marko Jovanović",
        imeFirme: "TechSolutions"
    },
    {
        text: "Nisam nikada naišla na tako posvećen tim koji se brine o svakom detalju. Njihova usluga čišćenja je uvijek na visokom nivou, bilo da se radi o privatnom prostoru ili komercijalnim objektima. Uvijek su profesionalni i pažljivi, a mi kao klijent uvek imamo osjećaj da smo u sigurnim rukama.",
        name: "Ivana Petrović",
        imeFirme: "GreenLife"
    },
    {
        text: "Zadovoljni smo uslugom čišćenja koju pružaju. Koristimo njihovu uslugu već nekoliko mjeseci i svaka usluga je bila izvršena bez greške. Tim je uvijek na vrijeme, vrlo korektan i ostavi prostor potpuno urednim. Sjajan partner za nas!",
        name: "Tomislav Milić",
        imeFirme: "Milić Transport"
    }
];

let currentIndex = 0;
let isInView = false; // Ova varijabla prati da li je sekcija u vidu

// Funkcija za ažuriranje sadržaja na stranici
function updateTestimonial() {
    const testimonial = userData[currentIndex];

    // Elements to animate
    const textElement = document.getElementById('testimonial-text');
    const nameElement = document.getElementById('client-name');
    const companyElement = document.getElementById('client-company');

    // Add animation class
    textElement.classList.add('fade-in-left');
    nameElement.classList.add('fade-in-left');
    companyElement.classList.add('fade-in-left');

    // Update content after a slight delay for animation effect
    setTimeout(() => {
        textElement.innerText = testimonial.text;
        nameElement.innerText = testimonial.name;
        companyElement.innerText = testimonial.imeFirme;

        // Remove animation class after the animation completes
        setTimeout(() => {
            textElement.classList.remove('fade-in-left');
            nameElement.classList.remove('fade-in-left');
            companyElement.classList.remove('fade-in-left');
        }, 500); // Match the duration of the animation
    }, 100); // Small delay to allow animation to trigger

    // Update the index for the next testimonial
    currentIndex = (currentIndex + 1) % userData.length;
}

// Intersection Observer funkcija koja prati kada sekcija postane vidljiva
const options = {
    root: null, // Koristimo viewport kao root
    rootMargin: '0px',
    threshold: 0.5 // Sekcija treba biti 50% u vidu da bi se pokrenula funkcija
};

// Callback funkcija za Intersection Observer
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Sekcija je u vidu, pokrećemo izmjenu teksta
            isInView = true;
            updateTestimonial(); // Pozivamo odmah da bismo prikazali prvi testimonial
            setInterval(() => {
                if (isInView) {
                    updateTestimonial();
                }
            }, 6000); // Ažuriramo svakih 6 sekundi
        } else {
            // Sekcija nije u vidu, zaustavljamo izmjenu teksta
            isInView = false;
        }
    });
}

// Stvaramo Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Ciljamo sekciju
const section = document.querySelector('.clients-say');
observer.observe(section);


const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('.menu');
const closeMenu = document.getElementById("close-button");

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    sidebar.classList.remove('active');
});