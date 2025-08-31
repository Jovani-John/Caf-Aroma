const navLinks = [
    {
        id: "cocktails",
        title: "Cocktails",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "art",
        title: "The Art",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const cocktailLists = [
    {
        name: "Tropical Sunset",
        country: "EG",
        detail: "Mango, Pineapple, Guava - 400 ml",
        price: "120LE",
    },
    {
        name: "Berry Blast",
        country: "EG",
        detail: "Strawberry, Blueberry, Pomegranate, Fresh Mint - 350 ml",
        price: "150LE",
    },
    {
        name: "Citrus Cooler",
        country: "EG",
        detail: "Orange, Lemon, Honey, Sprite - 500 ml",
        price: "100LE",
    },
    {
        name: "Nile Breeze",
        country: "EG",
        detail: "Guava, Kiwi, Mint, Crushed Ice - 450 ml",
        price: "130LE",
    },
    {
        name: "Pineapple Mojito (Virgin)",
        country: "EG",
        detail: "Pineapple, Lemon, Mint, Soda - 400 ml",
        price: "140LE",
    },
    {
        name: "Chocolate Banana Shake",
        country: "EG",
        detail: "Banana, Chocolate, Milk - 500 ml",
        price: "160LE",
    },
];


const mockTailLists = [
    {
        name: "Sunrise Cooler",
        country: "EG",
        detail: "Orange, Mango, Grenadine - 400 ml",
        price: "120LE",
    },
    {
        name: "Minty Watermelon",
        country: "EG",
        detail: "Fresh Watermelon, Mint, Lime - 450 ml",
        price: "130LE",
    },
    {
        name: "Lemon Basil Spark",
        country: "EG",
        detail: "Lemon, Basil, Soda - 350 ml",
        price: "110LE",
    },
    {
        name: "Peach Paradise",
        country: "EG",
        detail: "Peach, Pineapple, Coconut Water - 500 ml",
        price: "150LE",
    },
    {
        name: "Berry Lemonade",
        country: "EG",
        detail: "Strawberry, Raspberry, Lemon - 400 ml",
        price: "140LE",
    },
];


const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const featureLists = [
    "Perfectly balanced blends",
    "Garnished to perfection",
    "Ice-cold every time",
    "Expertly shaken & stirred",
];

const goodLists = [
    "Handpicked ingredients",
    "Signature techniques",
    "Bartending artistry in action",
    "Freshly muddled flavors",
];

const storeInfo = {
    heading: "Where to Find Us",
    address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
    contact: {
        phone: "(555) 987-6543",
        email: "hello@jsmcocktail.com",
    },
};

const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 12am" },
    { day: "Fri", time: "11:00am – 2am" },
    { day: "Sat", time: "9:00am – 2am" },
    { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
    {
        name: "Instagram",
        icon: "/images/insta.png",
        url: "#",
    },
    {
        name: "X (Twitter)",
        icon: "/images/x.png",
        url: "#",
    },
    {
        name: "Facebook",
        icon: "/images/fb.png",
        url: "#",
    },
];

const allCocktails = [
    {
        id: 1,
        name: "Tropical Sunset",
        image: "/images/drink1.png",
        title: "Fresh & Exotic Blend",
        description:
            "A vibrant mix of mango, pineapple, and guava that brings a taste of the tropics in every sip. Perfect for a sunny day in Cairo.",
    },
    {
        id: 2,
        name: "Berry Blast",
        image: "/images/drink2.png",
        title: "Rich in Flavor, Full of Life",
        description:
            "Strawberries, blueberries, and pomegranate come together with fresh mint leaves for a refreshing and antioxidant-rich delight.",
    },
    {
        id: 3,
        name: "Citrus Glow",
        image: "/images/drink3.png",
        title: "Zesty & Refreshing",
        description:
            "A cooling combo of orange, lemon, and a hint of honey with sparkling soda for a perfect energizing boost.",
    },
    {
        id: 4,
        name: "Nile Breeze",
        image: "/images/drink4.png",
        title: "Cool Like the River",
        description:
            "Guava and kiwi blended with mint and crushed ice for a refreshing mocktail inspired by the Nile’s calming breeze.",
    },
    {
        id: 5,
        name: "Peach Paradise",
        image: "/images/drink2.png",
        title: "Smooth & Fruity",
        description:
            "A dreamy blend of peach, pineapple, and coconut water that tastes like a summer getaway in a glass.",
    },
        {
        id: 3,
        name: "Citrus Glow",
        image: "/images/drink3.png",
        title: "Zesty & Refreshing",
        description:
            "A cooling combo of orange, lemon, and a hint of honey with sparkling soda for a perfect energizing boost.",
    },
];


export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    allCocktails,
};