export class PQRform{
    constructor(
        public username: string,
        public email: string,
        public description: string,
        public pqr: string,

        public id ?: number,
        public pqr_detail?: number,
        public user?: Usuario,
        public user_type?: number,
    
        public status?: number, 
        public created_at?: string,
        public completed_at?: string,

    ){}
}
export class Usuario {
    constructor(
        public id: number ,
        public username: string,
        public first_name: string,
        public last_name: string,
        public photo?: string,

        public total?: string,
        public person?: person
        
    ){
        
    }
}
export interface person {
    birthday: string,
    id: number,
    photo: string,
    phone: string,
    city: UserCity,
    location: string,
    reviews: number,
    stars: number,
    domi_count:number,
    available:boolean,
    user:number,
    refer_code: string
}
export interface UserCity {
    name:string,
    latitude:number,
    longitude:	number,
    state_code:	string,
    country_name:	string,
    currency:	string,
}