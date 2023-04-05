import Frite from './assets/image/frite.jpg';
import Hamburger from './assets/image/hamburger-3.jpg';
import Pizza from './assets/image/pizaa-2.jpg';
import Hamburger2 from './assets/image/hamburger.jpg';
import Pizza1 from './assets/image/pizza-1.jpg';
import {TbDiscount2} from 'react-icons/tb'
import {TbTruckDelivery} from 'react-icons/tb'
import {BiRestaurant} from 'react-icons/bi'
import {BiLike} from 'react-icons/bi'
export const navigation=[
    {
        id:'nav-1',
        nav:'home'
    },
    {
        id:'nav-2',
        nav:'food'
    },
    {
        id:'nav-3',
        nav:'service'
    },
    {
        id:'nav-4',
        nav:'about'
    },
    {
        id:'nav-5',
        nav:'contact'
    },
]

export const TopMenu=[
    {
        id:'top-1',
        image:Frite,
        title:'frite steak',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'82.00'
    },
    {
        id:'top-2',
        image:Hamburger,
        title:'hamburger',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'400.00'
    },
    {
        id:'top-3',
        image:Pizza,
        title:'pizza',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'100.00'
    },
]
export const Menu=[
    {
        id:'top-1',
        image:Frite,
        title:'frite steak',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'82.00'
    },
    {
        id:'top-2',
        image:Hamburger,
        title:'hamburger',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'400.00'
    },
    {
        id:'top-3',
        image:Pizza,
        title:'pizza',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'160.00'
    },
    {
        id:'top-4',
        image:Hamburger2,
        title:'Hamburger',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'40.00'
    },
    {
        id:'top-5',
        image:Pizza,
        title:'pizza',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'120.00'
    },
    {
        id:'top-6',
        image:Pizza1,
        title:'pizza',
        description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, quo.',
        price:'130.00'
    },
]

export const Service=[
    {
        id:'serv-1',
        icon:<TbDiscount2 size={50} className='text-[#ff8400]'/>,
        title:'Discount system',
        description:'we have favorable Discount system for Our regular customer'
    },
    {
        id:'serv-2',
        icon:<TbTruckDelivery size={50} className='text-[#ff8400]'/>,
        title:'Delivery',
        description:'Fast and safe Delivery from us with a reliable introduction'
    },
    {
        id:'serv-3',
        icon:<BiRestaurant size={50} className='text-[#ff8400]'/>,
        title:'500+ Restaurant',
        description:'we have more than 500 Restaurant who cooperate with us'
    },
    {
        id:'serv-4',
        icon:<BiLike size={50} className='text-[#ff8400]'/>,
        title:'Best Quality',
        description:'we provide the best service and high Quality',
    },

]
export const Info=[
    {
        id:"info-1",
        title:"about us"
    },
    {
        id:"info-2",
        title:"Event"
    },
    {
        id:"info-3",
        title:"More search"
    },
    
]
export const Link=[
    {
        id:"Link-1",
        title:"service"
    },
    {
        id:"Link-2",
        title:"support"
    },
    {
        id:"Link-3",
        title:"term & condition"
    },
    {
        id:"Link-4",
        title:"privacy"
    },
   
    
]

export const MenuFooter=[
    {
        id:'menu-1',
        title:'Driver'
    },
    {
        id:'menu-2',
        title:'Catalog'
    },
    {
        id:'menu-1',
        title:'Launch'
    },
]