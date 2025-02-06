import type { Product } from '~/@types/product';

export const products: Product[] = [
    {
        id: 1,
        title: 'Loveseat Sofa',
        description: 'Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.',
        is_new: true,
        additional_info: {
            details: 'You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.',
            packaging: [
                'Width: 20 " Height: 1 ½ " Length: 21 ½ "',
                'Weight: 7 lb 8 oz',
                'Package(s): 1',
            ],
        },
        questions: [
            { title: "Can I choose a different color?", answer: "Yes, several color options are available." },
            { title: "What is the weight of the sofa?", answer: "The weight of the sofa is 50 kg." }
        ],
        price: 100.02,
        old_price: 200.034,
        rating: 3,
        picture: '/_nuxt/public/images/products/bamboo-basket.png',
        discount: {
            value: 50,
            expires: '2025-06-07T02:00:35',
        },
        measurements: '17 1/2x20 5/8 "',
        available_colors: [
            {
                color: 'black',
                image: '/_nuxt/public/images/product-mocks/black.png',
                available: true,
            },
            {
                color: 'red',
                image: '/_nuxt/public/images/product-mocks/red.png',
                available: true,
            },
            {
                color: 'brown',
                image: '/_nuxt/public/images/product-mocks/brown.png',
                available: true,
            },
            {
                color: 'grey',
                image: '/_nuxt/public/images/product-mocks/grey.png',
                available: false,
            },
        ],
        balance: 2,
        sku: 1221,
        category: ['Living Room', 'Bedroom'],
        review_count: 1,
        reviews: [
            {
                id: 1,
                rating: 5,
                description: "Very comfortable sofa, perfect for the living room.",
                user: { img: "https://example.com/images/user1.jpg", name: "Killian" },
                stat: { timestamp: "2025-01-10", likes: 20, dislikes: 1 }
            },
        ],
    },
    {
        id: 2,
        title: 'Bamboo basket',
        description: '',
        is_new: false,
        additional_info: {
            details: '',
            packaging: [
                'Width: 20 " Height: 1 ½ " Length: 21 ½ "',
                'Weight: 7 lb 8 oz',
                'Package(s): 1',
            ],
        },
        questions: null,
        price: 24.99,
        old_price: 49.99,
        rating: 4,
        picture: '/_nuxt/public/images/products/bamboo-basket.png',
        discount: {
            value: 50,
            expires: '2026-05-01',
        },
        measurements: '17 1/2x20 5/8 "',
        available_colors: ['black'],
        balance: 15,
        sku: 1222,
        category: ['Living Room', 'Bedroom'],
        review_count: 2,
        reviews: [
            {
                id: 2,
                rating: 5,
                description: 'Very comfortable basket.',
                user: { img: "https://example.com/images/user1.jpg", name: "Jack" },
                stat: {
                    timestamp: '2025-05-01',
                    likes: 5,
                    dislikes: 0,
                }
            },
        ],
    },
    {
        id: 3,
        title: "Comfort Sofa",
        description: "A cozy and stylish sofa for your living room.",
        is_new: false,
        additional_info: {
            details: "Material: fabric, frame: wood, color: grey",
            packaging: ["Sofa", "Cushions", "Assembly instructions"]
        },
        questions: [
            { title: "Can I choose a different color?", answer: "Yes, several color options are available." },
            { title: "What is the weight of the sofa?", answer: "The weight of the sofa is 50 kg." }
        ],
        price: 1200,
        old_price: 1400,
        rating: 4.6,
        picture: '',
        discount: null,
        measurements: "200x90x80 cm",
        available_colors: ["Grey", "Black", "Brown"],
        balance: 30,
        sku: 345678,
        category: ["Furniture", "Sofas"],
        review_count: 2,
        reviews: [
            {
                id: 1,
                rating: 5,
                description: "Very comfortable sofa, perfect for the living room.",
                user: { img: "https://example.com/images/user1.jpg", name: "Marina" },
                stat: { timestamp: "2025-01-10", likes: 20, dislikes: 1 }
            },
            {
                id: 2,
                rating: 4,
                description: "Great sofa, but a bit firm for sleeping.",
                user: { img: "https://example.com/images/user2.jpg", name: "Alexey" },
                stat: { timestamp: "2025-01-14", likes: 15, dislikes: 2 }
            }
        ]
    },
    {
        id: 4,
        title: "Elegant Dining Table",
        description: "An elegant dining table for your dining room.",
        is_new: false,
        additional_info: {
            details: "Material: glass, frame: metal, size: 150x80 cm",
            packaging: ["Table", "Assembly instructions"]
        },
        questions: [
            { title: "Can the table be used outdoors?", answer: "The table is designed for indoor use." },
            { title: "What is the weight of the table?", answer: "The table weighs 25 kg." }
        ],
        price: 850,
        old_price: 950,
        rating: 4.3,
        picture: "https://example.com/images/table.jpg",
        discount: { value: 80, expires: "2025-01-31" },
        measurements: "150x80x75 cm",
        available_colors: ["Transparent", "Black"],
        balance: 50,
        sku: 456789,
        category: ["Furniture", "Tables"],
        review_count: 2,
        reviews: [
            {
                id: 1,
                rating: 5,
                description: "Very beautiful and stylish table, fits perfectly in the interior.",
                user: { img: "https://example.com/images/user3.jpg", name: "Irina" },
                stat: { timestamp: "2025-01-05", likes: 18, dislikes: 0 }
            },
            {
                id: 2,
                rating: 3,
                description: "Good table, but the glass scratches easily.",
                user: { img: "https://example.com/images/user4.jpg", name: "Max" },
                stat: { timestamp: "2025-01-07", likes: 8, dislikes: 3 }
            }
        ]
    },
    {
        id: 5,
        title: "Wooden Bookshelf",
        description: "A spacious and sturdy bookshelf for your collection.",
        is_new: true,
        additional_info: {
            details: "Material: oak wood, dimensions: 180x80x35 cm",
            packaging: ["Bookshelf", "Assembly instructions"]
        },
        questions: [
            { title: "How many shelves are there?", answer: "There are 5 shelves." },
            { title: "Can the bookshelf hold heavy books?", answer: "Yes, it's designed to hold heavy books." }
        ],
        price: 350,
        old_price: 400,
        rating: 4.7,
        picture: "https://example.com/images/bookshelf.jpg",
        discount: null,
        measurements: "180x80x35 cm",
        available_colors: ["Natural Oak", "Dark Oak"],
        balance: 40,
        sku: 567890,
        category: ["Furniture", "Bookshelves"],
        review_count: 2,
        reviews: [
            {
                id: 1,
                rating: 5,
                description: "Perfect bookshelf! Very solid and looks amazing.",
                user: { img: "https://example.com/images/user5.jpg", name: "John" },
                stat: { timestamp: "2025-01-09", likes: 25, dislikes: 1 }
            },
            {
                id: 2,
                rating: 4,
                description: "Nice shelf, but assembly took a bit longer than expected.",
                user: { img: "https://example.com/images/user6.jpg", name: "Sarah" },
                stat: { timestamp: "2025-01-12", likes: 18, dislikes: 2 }
            }
        ]
    },
    {
        id: 6,
        title: "Modern Office Desk",
        description: "A sleek and modern office desk with plenty of workspace.",
        is_new: false,
        additional_info: {
            details: "Material: metal, top: wood, size: 140x70 cm",
            packaging: ["Desk", "Assembly instructions"]
        },
        questions: [
            { title: "Does the desk have drawers?", answer: "Yes, it has two small drawers." },
            { title: "Can it support two monitors?", answer: "Yes, it has enough space for two monitors." }
        ],
        price: 500,
        old_price: 550,
        rating: 4.4,
        picture: "https://example.com/images/office_desk.jpg",
        discount: { value: 60, expires: "2025-02-10" },
        measurements: "140x70x75 cm",
        available_colors: ["Black", "White"],
        balance: 70,
        sku: 678901,
        category: ["Furniture", "Desks"],
        review_count: 2,
        reviews: [
            {
                id: 1,
                rating: 5,
                description: "Great desk! The design is very modern and the space is just right.",
                user: { img: "https://example.com/images/user7.jpg", name: "Eva" },
                stat: { timestamp: "2025-01-11", likes: 22, dislikes: 0 }
            },
            {
                id: 2,
                rating: 4,
                description: "Good desk, but the surface is a bit prone to scratches.",
                user: { img: "https://example.com/images/user8.jpg", name: "David" },
                stat: { timestamp: "2025-01-13", likes: 10, dislikes: 3 }
            }
        ]
    },
    {
        id: 7,
        title: "Leather Armchair",
        description: "A luxurious leather armchair for your office or living room.",
        is_new: true,
        additional_info: {
            details: "Material: genuine leather, frame: metal, color: black",
            packaging: ["Armchair", "Assembly instructions"]
        },
        questions: [
            { title: "Is the leather easy to clean?", answer: "Yes, the leather is very easy to clean." },
            { title: "What is the weight capacity?", answer: "It can support up to 120 kg." }
        ],
        price: 800,
        old_price: 900,
        rating: 4.8,
        picture: "https://example.com/images/armchair.jpg",
        discount: { value: 90, expires: "2025-02-20" },
        measurements: "80x80x100 cm",
        available_colors: ["Black", "Brown"],
        balance: 20,
        sku: 789012,
        category: ["Furniture", "Chairs"],
        review_count: 2,
        reviews: [
            {
                id: 1,
                rating: 5,
                description: "This armchair is incredibly comfortable and looks amazing in my office.",
                user: { img: "https://example.com/images/user9.jpg", name: "Lana" },
                stat: { timestamp: "2025-01-06", likes: 15, dislikes: 0 }
            },
            {
                id: 2,
                rating: 4,
                description: "Comfortable chair, but the leather feels a bit stiff at first.",
                user: { img: "https://example.com/images/user10.jpg", name: "Eugene" },
                stat: { timestamp: "2025-01-08", likes: 12, dislikes: 2 }
            }
        ]
    },
    {
        id: 8,
        title: "Storage Cabinet",
        description: "A practical storage cabinet with multiple compartments.",
        is_new: false,
        additional_info: {
            details: "Material: MDF, color: white, size: 100x50x30 cm",
            packaging: ["Cabinet", "Assembly instructions"]
        },
        questions: [
            { title: "How many compartments does the cabinet have?", answer: "It has 4 compartments." },
            { title: "Is the cabinet easy to assemble?", answer: "Yes, it comes with clear instructions and takes about 30 minutes to assemble." }
        ],
        price: 150,
        old_price: 180,
        rating: 4.2,
        picture: "https://example.com/images/storage_cabinet.jpg",
        discount: { value: 30, expires: "2025-02-05" },
        measurements: "100x50x30 cm",
        available_colors: ["White", "Grey"],
        balance: 100,
        sku: 890123,
        category: ["Furniture", "Storage"],
        review_count: 2,
        reviews: [
            {
                id: 1,
                rating: 4,
                description: "Great cabinet for storing documents, easy to assemble.",
                user: { img: "https://example.com/images/user11.jpg", name: "Olga" },
                stat: { timestamp: "2025-01-02", likes: 10, dislikes: 1 }
            },
            {
                id: 2,
                rating: 3,
                description: "Decent quality, but the material could be sturdier.",
                user: { img: "https://example.com/images/user12.jpg", name: "Oleg" },
                stat: { timestamp: "2025-01-04", likes: 8, dislikes: 4 }
            }
        ]
    }
];
