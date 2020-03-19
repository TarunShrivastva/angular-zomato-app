export interface GalleryThumbnail {
    id: number
    name: string
    image: string
    street: string 
    country_id: number
    state_id: number
    city_id: number
    created_at: Date
    updated_at: Date
    deleted_at: Date
    foods: Food[]
}

export interface Food {   
    [index: number]: FoodData[]        
}

export interface FoodData {
        id: number
        name: string
        image: string
        price: number
        category_id: number
        subcategory_id: number
        restaurent_id: number
        created_at: Date
        updated_at: Date
        deleted_at: Date 
}