interface NewArrivals  {
    id : number
    name :string
    image :string
    rate: number
    price : number
}[];

const dataCars : NewArrivals[]= 
[
    {
        id : 1,
        name: "BOSS 302",
        image : "https://i.ibb.co/dkznZYD/BOSS-302.jpg",
        rate: 4,
        price: 20000
    },
    {
        id : 2,
        name: "Bullit 1968",
        image : "https://i.ibb.co/NVY45Jc/bullit-1968.jpg",
        rate: 4.5,
        price: 30000
    },
    {
        id : 3,
        name: "Eleanor 1967",
        image : "https://i.ibb.co/3yVJSJT/eleanor-1967.jpg",
        rate: 5,
        price: 35000
    },
    {
        id : 4,
        name: "Mustang GT 390",
        image : "https://i.ibb.co/jL111GD/Mustang-GT-390.jpg",
        rate: 3,
        price: 50000
    }
]


export default dataCars