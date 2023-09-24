export interface Game {
    id : string;
    name : string;
    cover_url : string;
    date_released : string;
    idgb_rating : number;
    pm_rating : number;
}

export interface Game_Service{
    id: number,
    catagory : number,
    cover : number,
    created_at : number,
    external_games: [number],
    first_release_date : number,
    game_modes: number,
    genres: [number],
    involved_companies : [number],
    keywords : [number], 
    name: string,
    platforms : [number],
    player_perspectives: [number],
    release_dates : [number],
    screenshots : [number],
    similar_games: [number], 
    slug: string,
    summary: string,
    tags: [number], 
    themes: [number], 
    updated_at : number,
    url: string,
    websites: [number], 
    checksum: string,
    language_supports: [number]
}

export interface Review {
    id : string;
    game_id : string;
    title : string;
    text : string;
    date_created : string;
    feature_ratings : Feature_Rating[];
    username: string;
    user_id: string;
}

export interface Feature_Rating {
    disability : string;
    name : string;
    rating : number;
}

export interface Disability {
    id : string;
    name : string;
    features : Feature[];
}

export interface Feature {
    id : string;
    name : string;
}

export interface User {
    id : string;
    username : string;
    date_joined : string;
    avatar_url : string;
    dis : Disability[];
}

export interface Scores {
    overall : number,
    hard_of_hearing: number,
    vision_impairment : number,
    motor_disability: number,
    misc: number
}