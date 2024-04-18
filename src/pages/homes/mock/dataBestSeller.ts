import car1 from '../../../assets/image/bestSeller/Chevrolet Camaro SS.jpg'
import car2 from '../../../assets/image/bestSeller/Honda Jazz.jpg'
import car3 from '../../../assets/image/bestSeller/Hyundai Ioniq 5.jpg'
import car4 from '../../../assets/image/bestSeller/Toyota Fortuner.jpg'

interface Best  {
    id : number
    name :string
    image :string
    rate: number
    price : number
}[];

const dataBestSeller : Best[]= 
[
    {
        id : 1,
        name: "Chevrolet Camaro SS",
        image : car1,
        rate: 5,
        price: 20000
    },
    {
        id : 2,
        name: "Honda Jazz",
        image : car2,
        rate: 5,
        price: 30000
    },
    {
        id : 3,
        name: "Hyundai Ioniq 5",
        image : car3,
        rate: 5,
        price: 35000
    },
    {
        id : 4,
        name: "Toyota Fortuner",
        image : car4,
        rate: 4,
        price: 50000
    }
]


export default dataBestSeller