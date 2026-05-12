import { initWebflowBadge } from 'https://webflow-badge.netlify.app/js/initWebflowBadge.js';

// runner function
function run(label, functionToTun) {
    try {
        functionToTun();
    } catch (error) {
        console.error(`Ooopsi 👹 ${label} failed:`, error);
    }
}

async function initApp() {
    run('initWebflowBadge', initWebflowBadge);
}

document.addEventListener('DOMContentLoaded', initApp);