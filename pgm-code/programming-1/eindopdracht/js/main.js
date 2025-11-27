document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCountdown();
    initFilter();
    renderEvents(eventsData);
    initModal();
});

function initNavigation() {
    const navContainer = document.getElementById('main-nav');
    if (!navContainer) return;
    const ul = document.createElement('ul');
    navigationData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = item.name;
        a.href = item.link;
        if (item.type === 'external') {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        li.appendChild(a);
        ul.appendChild(li);
    });
    navContainer.appendChild(ul);
}

function initCountdown() {
    const targetDate = 1787731200000; 
    function updateTimer() {
        const timerElement = document.getElementById('timer'); 
        if (!timerElement) return;
        const now = new Date().getTime();
        const distance = targetDate - now;
        if (distance < 0) {
            timerElement.textContent = "Gamescom is LIVE!";
            if(window.countdownInterval) clearInterval(window.countdownInterval);
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        timerElement.innerHTML = `${days}<span>days</span> ${hours}<span>h</span> ${minutes}<span>m</span> ${seconds}<span>s</span>`;
    }
    
    updateTimer(); 
    window.countdownInterval = setInterval(updateTimer, 1000); 
}

function renderEvents(events) {
    const eventsContainer = document.getElementById('events-container');
    if (!eventsContainer) return;
    eventsContainer.innerHTML = '';
    for (let i = 0; i < events.length; i++) {
        const eventItem = events[i];
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.dataset.eventId = eventItem.id; 
        const timeString = formatEventTime(eventItem.event.from, eventItem.event.to);
        const cardImage = document.createElement('img');
        cardImage.src = eventItem.event.image;
        cardImage.alt = eventItem.event.name;
        cardImage.className = 'event-card-image';
        cardImage.onerror = function() { 
            this.src='images/placeholder.jpg'; 
            this.onerror=null;
        };
        const cardContent = document.createElement('div');
        cardContent.className = 'event-card-content';
        const title = document.createElement('h3');
        title.textContent = eventItem.event.name;
        const meta = document.createElement('p');
        meta.textContent = `${eventItem.stage} | ${timeString}`;
        cardContent.appendChild(title);
        cardContent.appendChild(meta);
        eventCard.appendChild(cardImage);
        eventCard.appendChild(cardContent);
        eventCard.addEventListener('click', () => {
            showEventDetail(eventItem);
        });
        eventsContainer.appendChild(eventCard);
    }
}

function formatEventTime(fromTimestamp, toTimestamp) {
    const from = new Date(fromTimestamp);
    const to = new Date(toTimestamp);

    // Hier gevonden: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
    const options = { hour: '2-digit', minute: '2-digit', hour12: false };
    const fromDay = String(from.getDate()).padStart(2, '0');
    const fromMonth = String(from.getMonth() + 1).padStart(2, '0');
    const fromTime = from.toLocaleTimeString('nl-BE', options).replace(':', '.');
    const toTime = to.toLocaleTimeString('nl-BE', options).replace(':', '.');
    return `${fromDay}/${fromMonth} ${fromTime}-${toTime}`;
}

const modalOverlay = document.getElementById('modal-overlay');
const modalBody = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close-btn');

function initModal() {
    if (!modalOverlay || !modalBody || !modalCloseBtn) return;
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    modalCloseBtn.addEventListener('click', closeModal);
}

function showEventDetail(eventObject) {
    const event = eventObject.event;
    modalBody.innerHTML = `
        <img src="${event.image}" alt="${event.name}" onerror="this.src='images/placeholder.jpg'; this.onerror=null;">
        <h2>${event.name}</h2>
        <p><strong>${eventObject.stage} | ${formatEventTime(event.from, event.to)}</strong></p>
        <p>${event.description}</p>
        <div id="modal-socials"></div>
    `;

    const socialsContainer = modalBody.querySelector('#modal-socials');
    const socials = event.socials;
    
    // Hier gevonden: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    if (socials && Object.keys(socials).length > 0) {
        const socialList = document.createElement('ul');
        
        // Hier gevonden: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        for (const [platform, url] of Object.entries(socials)) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            li.appendChild(a);
            socialList.appendChild(li);
        }
        
        if (socialList.hasChildNodes()) {
            const socialHeader = document.createElement('h4');
            socialHeader.textContent = 'Socials & Links:';
            socialsContainer.appendChild(socialHeader);
            socialsContainer.appendChild(socialList);
        }
    }

    modalOverlay.classList.remove('hidden');
}

function closeModal() {
    modalOverlay.classList.add('hidden');
    modalBody.innerHTML = ''; 
}

function initFilter() {
    const filterSelect = document.getElementById('stage-filter');
    if (!filterSelect) return;
    const allStages = eventsData.map(item => item.stage);
    const stages = [];
    for (let i = 0; i < allStages.length; i++) {
        if (!stages.includes(allStages[i])) {
            stages.push(allStages[i]);
        }
    }
    
    // Hier gevonden: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    stages.sort().forEach(stage => {
        const option = document.createElement('option');
        option.value = stage;
        option.textContent = stage;
        filterSelect.appendChild(option);
    });
    
    filterSelect.addEventListener('change', (e) => {
        const selectedStage = e.target.value;
        if (selectedStage === 'all') {
            renderEvents(eventsData); 
        } else {
            const filteredEvents = eventsData.filter(item => item.stage === selectedStage);
            renderEvents(filteredEvents);
        }
    });
}