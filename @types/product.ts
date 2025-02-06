export interface ProductAdditionalInfo {
    details: string;
    packaging: string[];
}

export interface ProductQuestion {
    title: string;
    answer: string;
}

export interface ProductDiscount {
    value: number;
    expires: string;
}

export interface ProductUser {
    img: string;
    name: string;
}

export interface ProductStat {
    timestamp: string;
    likes: number;
    dislikes: number;
}

export interface ProductReview {
    id: number;
    rating: number;
    description: string;
    user: ProductUser;
    stat: ProductStat;
}

export interface AvailableColorItem {
    color: string;
    image: string;
    available: boolean;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    is_new: boolean,
    additional_info: ProductAdditionalInfo | null;
    questions: ProductQuestion[] | null;
    price: number;
    old_price: number;
    rating: number;
    picture: string;
    discount: ProductDiscount | null;
    measurements: string | null;
    available_colors: AvailableColorItem[];
    balance: number;
    sku: number;
    category: string[];
    review_count: number;
    reviews: ProductReview[] | null;
}
