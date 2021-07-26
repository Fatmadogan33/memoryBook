export interface MemoryBook{
    id : number | null;
    title : string;
    date : string | number ;
    memory : string;
    location : string;

}


export const memories : MemoryBook[] = [
    {
        id : 1,
        title : "Travel",
        date : "10.02.2012" ,
        memory : "First business trip" ,
        location : "Ankara" ,

    },

    {
        id : 2,
        title : "Abroad Holiday",
        date : "03.11.2020",
        memory : "First trip to London",
        location : "Londra"
    },
    {
        id : 3,
        title : "Marriage proposal",
        date : "25.05.2021",
        memory : "I got a marriage proposal on the beach",
        location : "İstanbul"
    },



];