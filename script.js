document.addEventListener('DOMContentLoaded', () => {
    createStarfield();
    renderFeatures();
    renderBots();
    renderTestimonials();
    renderCtaCards();
    setupRedirectButtons();
});

function createStarfield() {
    const starfield = document.getElementById('starfield');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'absolute rounded-full bg-white';
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animation = `twinkle ${Math.random() * 5 + 5}s linear infinite`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starfield.appendChild(star);
    }
}

function renderFeatures() {
    const features = [
        { icon: 'zap', title: 'Lightning Fast', description: 'Our bots are optimized for speed and efficiency, ensuring quick response times.' },
        { icon: 'shield', title: 'Secure & Reliable', description: 'Built with top-notch security practices to keep your server safe.' },
        { icon: 'settings', title: 'Fully Customizable', description: 'Tailor your bot to fit your server\'s unique needs with our powerful customization tools.' },
        { icon: 'code', title: 'Easy Integration', description: 'Seamlessly integrate with popular APIs and services to extend your bot\'s capabilities.' },
        { icon: 'users', title: 'Community Support', description: 'Join our thriving community of bot developers for support and collaboration.' },
        { icon: 'star', title: 'Regular Updates', description: 'Enjoy frequent updates and new features to keep your bots ahead of the curve.' }
    ];

    const featuresContainer = document.getElementById('features');
    features.forEach(feature => {
        featuresContainer.innerHTML += `
            <div class="card p-6">
                <div class="flex justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-${getIconColor(feature.icon)}-400">
                        ${getIconPath(feature.icon)}
                    </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">${feature.title}</h3>
                <p class="text-gray-300">${feature.description}</p>
            </div>
        `;
    });
}

function renderBots() {
    const bots = [
        { name: 'Moderation', description: 'Keep your server clean and friendly with advanced moderation tools.', icon: 'sword', features: ['Auto-moderation of chat', 'Customizable warning system', 'Temporary and permanent bans', 'Detailed moderation logs'] },
        { name: 'Music', description: 'Bring the party to your server with high-quality music streaming.', icon: 'music', features: ['Supports multiple music sources', 'Create and manage playlists', 'Lyrics display', 'DJ role management'] },
        { name: 'Game', description: 'Enhance your gaming experience with stats tracking and matchmaking.', icon: 'gamepad', features: ['Player stats for popular games', 'Custom tournament creation', 'Team management', 'Game night scheduling'] }
    ];

    const botsContainer = document.getElementById('bots');
    bots.forEach(bot => {
        botsContainer.innerHTML += `
            <div class="card bot-card p-4">
                <div class="flex items-center mb-4">
                    <div class="bot-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            ${getIconPath(bot.icon)}
                        </svg>
                    </div>
                    <h3 class="text-2xl font-semibold">${bot.name}</h3>
                </div>
                <p class="text-gray-300 mb-4 text-sm">${bot.description}</p>
                <ul class="space-y-2">
                    ${bot.features.map(feature => `
                        <li class="flex items-center text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
}

function renderTestimonials() {
    const testimonials = [
        { quote: 'Brave has revolutionized how I manage my gaming community. The bots are incredibly easy to set up and customize!', author: 'Alex Johnson', role: 'Gaming Server Admin' },
        { quote: 'As a developer, I appreciate the robust API and excellent documentation. It\'s never been easier to create complex Discord bots.', author: 'Samantha Lee', role: 'Software Engineer' },
        { quote: 'The Music bot has taken our server\'s music experience to the next level. Our members love it!', author: 'Michael Chen', role: 'Music Server Owner' },
        { quote: 'The customer support team is fantastic. They helped me set up a custom bot for my education server in no time.', author: 'Emily Rodriguez', role: 'Educational Community Manager' }
    ];

    const testimonialsContainer = document.getElementById('testimonials');
    testimonials.forEach(testimonial => {
        testimonialsContainer.innerHTML += `
            <div class="card p-4">
                <p class="text-base mb-4">${testimonial.quote}</p>
                <div class="flex items-center">
                    <div class="w-10 h-10 bg-purple-500 rounded-full mr-4"></div>
                    <div>
                        <p class="font-semibold">${testimonial.author}</p>
                        <p class="text-sm text-gray-300">${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;
    });
}

function renderCtaCards() {
    const ctaCards = [
        { title: 'Easy Setup', description: 'Get your bot up and running in minutes with our intuitive interface.' },
        { title: 'Powerful Features', description: 'Access a wide range of customizable features to enhance your server.' },
        { title: '24/7 Support', description: 'Our dedicated team is always here to help you with any questions  or issues.' }
    ];

    const ctaCardsContainer = document.getElementById('cta-cards');
    ctaCards.forEach(card => {
        ctaCardsContainer.innerHTML += `
            <div class="card p-4 rounded-lg">
                <h3 class="text-lg font-semibold mb-2">${card.title}</h3>
                <p class="text-sm">${card.description}</p>
            </div>
        `;
    });
}

function getIconColor(icon) {
    const colors = {
        zap: 'yellow',
        shield: 'blue',
        settings: 'pink',
        code: 'green',
        users: 'purple',
        star: 'orange'
    };
    return colors[icon] || 'gray';
}

function getIconPath(icon) {
    const paths = {
        zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
        shield: '<path d="M12 22s8-4  8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
        code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
        users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        sword: '<path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path><path d="M13 19l6-6"></path><path d="M16 16l4 4"></path><path d="M19 21l2-2"></path>',
        music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
        gamepad: '<line x1="6" y1="12" x2="18" y2="12"></line><line x1="12" y1="6" x2="12" y2="18"></line><line x1="7" y1="7" x2="17" y2="17"></line><line x1="17" y1="7" x2="7" y2="17"></line>'
    };
    return paths[icon] || '';
}

function setupRedirectButtons() {
    const startBuildingButton = document.getElementById('start-building');
    const getStartedButton = document.getElementById('get-started');

    const redirectToDiscord = () => {
        window.location.href = 'https://discord.gg/invite/plusenode';
    };

    startBuildingButton.addEventListener('click', redirectToDiscord);
    getStartedButton.addEventListener('click', redirectToDiscord);
}
