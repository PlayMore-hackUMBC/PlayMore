export interface Game {
    id : string;
    name : string;
    cover_url : string;
    date_released : string;
    idgb_rating : number;
    pm_rating : number;
}

export interface Review {
    id : string;
    game_id : string;
    title : string;
    text : string;
    date_created : string;
    feature_ratings : any;
}

export interface Feature_Rating {
    id : string;
    dis_id : string;
    review_id : string;
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