const products = [
    {
        id: 1,
        name: "Sonic Minimal Headphones",
        price: 2490000,
        image: "assets/images/headphones.png",
        description: "Experience pure sound with our minimalist wireless headphones. Studio quality audio with 40h battery life.",
        category: "Audio"
    },
    {
        id: 2,
        name: "Nova Smartwatch Pro",
        price: 1850000,
        image: "assets/images/smartwatch.png",
        description: "Stay connected in style. Health tracking, notifications, and a stunning OLED display.",
        category: "Wearables"
    },
    {
        id: 3,
        name: "Tactile RGB Keyboard",
        price: 1200000,
        image: "assets/images/keyboard.png",
        description: "Premium mechanical switches with customizable RGB lighting and a minimalist design.",
        category: "Accessories"
    },
    {
        id: 4,
        name: "Urban Explorer Backpack",
        price: 850000,
        image: "assets/images/backpack.png",
        description: "The perfect companion for your daily commute. Water-resistant and packed with smart compartments.",
        category: "Lifestyle"
    }
];
// Global access for non-module script
window.products = products;
