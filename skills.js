function calculateSkillLevel(experience) {
    if (experience < 0) {
        throw new Error("Experience cannot be negative");
    }
    return Math.floor(experience / 1000);
}

function addExperience(currentExperience, additionalExperience) {
    if (additionalExperience < 0) {
        throw new Error("Additional experience cannot be negative");
    }
    return currentExperience + additionalExperience;
}

module.exports = {
    calculateSkillLevel,
    addExperience
};  