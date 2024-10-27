// achievements.js
var achievementSound = new Audio('music/achievement.mp3');

const achievements = [
    { id: 1, name: "First Visit", description: "Welcome to the site!" },
    { id: 2, name: "Explorer", description: "Visited 5 different pages." },
    { id: 3, name: "Button Clicker", description: "Clicked the special button." },
    { id: 4, name: "Time Spender", description: "Spent 30 seconds on the site." }
];

const userAchievements = JSON.parse(localStorage.getItem('userAchievements')) || [];

function awardAchievement(achievementId) {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !userAchievements.includes(achievementId)) {
        userAchievements.push(achievementId);
        localStorage.setItem('userAchievements', JSON.stringify(userAchievements));
        displayAchievement(achievement);
        achievementSound.play(); // Play sound on achievement unlock
    }
}

function displayAchievement(achievement) {
    const achievementsContainer = document.getElementById('achievements');
    const achievementElement = document.createElement('div');
    achievementElement.textContent = `${achievement.name}: ${achievement.description}`;
    achievementsContainer.appendChild(achievementElement);
}

// Trigger: Award "First Visit" achievement
if (!localStorage.getItem('hasVisited')) {
    awardAchievement(1);
    localStorage.setItem('hasVisited', 'true');
}

// Trigger: Page visit count
let pageVisits = JSON.parse(localStorage.getItem('pageVisits')) || 0;
pageVisits++;
localStorage.setItem('pageVisits', JSON.stringify(pageVisits));
if (pageVisits === 5) {
    awardAchievement(2); // Award "Explorer" achievement
}

// Trigger: Button click for achievement
document.getElementById('myButton').onclick = function() {
    awardAchievement(3); // Assuming this button awards the "Button Clicker" achievement
};

// Trigger: Time-based achievement
setTimeout(() => {
    awardAchievement(4); // Award "Time Spender" achievement after 30 seconds
}, 30000);

// Display existing achievements on load
userAchievements.forEach(id => {
    const achievement = achievements.find(a => a.id === id);
    if (achievement) {
        displayAchievement(achievement);
    }
});
