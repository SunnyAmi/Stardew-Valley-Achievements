// script.js

function toggleAchievementDetails(id) {
    const details = document.getElementById(id + '-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function toggleCategoryDetails(id) {
    const details = document.getElementById(id + '-details');
    if (details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

function toggleItemCompletion(itemElement) {
    itemElement.classList.toggle('completed');
    checkAchievementCompletion('artisan');
}

function checkAchievementCompletion(achievementId) {
    const details = document.getElementById(achievementId + '-details');
    const items = details.getElementsByClassName('item');
    let allCompleted = true;

    for (let i = 0; i < items.length; i++) {
        if (!items[i].classList.contains('completed')) {
            allCompleted = false;
            break;
        }
    }

    const achievementIcon = document.getElementById(achievementId + '-achievement').getElementsByClassName('achievement-icon')[0].getElementsByTagName('img')[0];
    if (allCompleted) {
        achievementIcon.src = 'icons/colored_artisan_icon.png';
    } else {
        achievementIcon.src = 'icons/greyed_artisan_icon.png';
    }
}
