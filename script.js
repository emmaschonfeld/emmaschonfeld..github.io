* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'DM Sans', sans-serif;
    color: #20201e;
    background: #f4f1eb;
    line-height: 1.6;
}

/* Navigation */

.nav {
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7vw;
    border-bottom: 1px solid #d9d4ca;
    position: sticky;
    top: 0;
    background: rgba(244, 241, 235, 0.94);
    backdrop-filter: blur(12px);
    z-index: 100;
}

.brand {
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: -1px;
    color: #20201e;
    text-decoration: none;
}

.brand span {
    color: #9a5b38;
}

nav {
    display: flex;
    gap: 32px;
}

nav a,
.resume-link,
.text-link {
    color: #55524d;
    text-decoration: none;
    font-size: 0.88rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

nav a:hover,
.text-link:hover {
    color: #9a5b38;
}

.resume-link {
    border: 1px solid #bdb6aa;
    padding: 10px 17px;
    border-radius: 100px;
}

/* Typography */

.eyebrow,
.section-label {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 2px;
    color: #9a5b38;
}

/* Hero */

.hero {
    min-height: calc(100vh - 86px);
    padding: 13vh 7vw 9vh;
    max-width: 1200px;
}

.hero h1 {
    font-size: clamp(3.2rem, 7vw, 6.7rem);
    line-height: 1.04;
    letter-spacing: -4px;
    max-width: 950px;
    margin: 28px 0;
}

.hero h1 em,
h2 em {
    font-family: 'Playfair Display', serif;
    font-weight: 500;
    color: #9a5b38;
}

.hero-copy {
    max-width: 580px;
    font-size: 1.1rem;
    color: #67635c;
}

.hero-actions {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 38px;
}

.button {
    display: inline-block;
    background: #20201e;
    color: #fff;
    text-decoration: none;
    padding: 14px 22px;
    border-radius: 100px;
    font-size: 0.9rem;
    transition: transform 0.3s ease, background 0.3s ease;
}

.button:hover {
    transform: translateY(-3px);
    background: #9a5b38;
}

.button span {
    margin-left: 18px;
}

.hero-note {
    margin-top: 90px;
    color: #888178;
    font-size: 0.8rem;
}

.hero-note span {
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #9a5b38;
    margin-right: 8px;
}

/* General Sections */

.intro-grid,
.timeline-section,
.split-section,
.skills,
.contact {
    padding: 110px 7vw;
    border-top: 1px solid #d9d4ca;
    display: grid;
    grid-template-columns: 25% 1fr;
    gap: 5vw;
}

.intro-grid h2,
.section-heading h2,
.contact h2 {
    font-size: clamp(2.3rem, 4vw, 4.4rem);
    line-height: 1.1;
    letter-spacing: -2px;
    margin-bottom: 30px;
}

.intro-grid p {
    max-width: 650px;
    color: #68645d;
    margin-bottom: 18px;
}

/* Experience */

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 55px;
}

.section-heading p {
    max-width: 240px;
    color: #77736b;
    font-size: 0.9rem;
}

.timeline {
    grid-column: 2;
}

.timeline-item {
    display: grid;
    grid-template-columns: 180px 1fr;
    gap: 35px;
    padding: 34px 0;
    border-top: 1px solid #d9d4ca;
}

.date {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #9a5b38;
}

.timeline-item h3 {
    font-size: 1.5rem;
    letter-spacing: -0.5px;
}

.timeline-item h3 span {
    font-size: 1rem;
    color: #9a5b38;
}

.timeline-item h4 {
    font-size: 0.85rem;
    color: #8b867d;
    font-weight: 500;
    margin: 5px 0 16px;
}

.timeline-item p,
.card p {
    color: #6c6861;
    font-size: 0.94rem;
    max-width: 620px;
}

.tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.tags span {
    font-size: 0.72rem;
    border: 1px solid #cbc4b8;
    border-radius: 100px;
    padding: 5px 11px;
}

/* Leadership Cards */

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.card {
    background: #e9e4da;
    padding: 28px;
    min-height: 230px;
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-8px);
}

.card-number {
    font-size: 0.72rem;
    color: #9a5b38;
    margin-bottom: 55px;
}

.card h3 {
    font-size: 1.2rem;
    margin-bottom: 12px;
}

/* Skills */

.skills {
    align-items: start;
}

.skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
}

.skill-list span {
    font-family: 'Playfair Display', serif;
    font-size: 1.7rem;
    border-bottom: 1px solid #bcb4a8;
    padding-bottom: 4px;
    margin-right: 15px;
}

/* Contact */

.contact {
    background: #e9e4da;
}

.contact h2 {
    margin-bottom: 20px;
}

.contact p {
    color: #6c6861;
    margin-bottom: 30px;
    max-width: 450px;
}

.contact-details {
    grid-column: 2;
    display: flex;
    gap: 35px;
    margin-top: 65px;
    font-size: 0.82rem;
    color: #77736b;
}

.contact-details a {
    color: #77736b;
}

/* Footer */

footer {
    display: flex;
    justify-content: space-between;
    padding: 25px 7vw;
    font-size: 0.72rem;
    color: #8d887e;
}

/* Mobile */

@media (max-width: 700px) {

    .nav {
        padding: 0 5vw;
    }

    .nav nav {
        display: none;
    }

    .hero,
    .intro-grid,
    .timeline-section,
    .split-section,
    .skills,
    .contact {
        padding-left: 5vw;
        padding-right: 5vw;
    }

    .hero h1 {
        letter-spacing: -2px;
    }

    .intro-grid,
    .timeline-section,
    .split-section,
    .skills,
    .contact {
        display: block;
    }

    .section-label {
        margin-bottom: 40px;
    }

    .section-heading {
        display: block;
    }

    .section-heading p {
        margin-top: 20px;
    }

    .timeline {
        margin-top: 30px;
    }

    .timeline-item {
        grid-template-columns: 1fr;
        gap: 10px;
    }

    .cards {
        grid-template-columns: 1fr;
    }

    .contact-details {
        margin-top: 45px;
        display: block;
    }

    .contact-details > * {
        display: block;
        margin-bottom: 10px;
    }

    .skill-list span {
        font-size: 1.35rem;
    }

    footer {
        padding: 25px 5vw;
        gap: 10px;
        flex-direction: column;
    }
}
