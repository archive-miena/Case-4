const defaultSettings = {
    theme: 'pink',
    notificatiions: true,
};

const userSettings = {
    theme: "purple",
};

function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}

const result = mergeSettings(defaultSettings, userSettings);

console.log("Default Theme:", defaultSettings.theme);
console.log("User Theme:", userSettings.theme);
console.log("Final Theme:", result.theme);
console.log("Notifications", result.notifications);