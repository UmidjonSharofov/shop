import Home from "../Home";
import Shop from "../Shop";
import SingUp from "../SingUp";
import Singip from "../Singip";
import Wishlist from "../Wishlist";
import Profile from "../profile";

export const navbar =[
   {
    id:1,
    title:"Home",
    path:'/',
    element:<Home/>,
    hidden:false,
    isPrivate:true,
    primary:"true"

   },
   {
    id:2,
    title:"Shop",
    path:'/shop',
    element:<Shop/>,
    hidden:false,
    isPrivate:true, 
   },
   {
    id:3,
    title:"wishlist",
    path:'Wishlist/',
    element:<Wishlist/>,
    hidden:true,
    isPrivate:true
   },
   {
    id:4,
    title:"Singip",
    path:'/Singip',
    element:<Singip/>,
    hidden:true,
    isPrivate:false
   },
   {
    id:5,
    title:"SingUp",
    path:'/SingUp',
    element:<SingUp/>,
    hidden:true,
    isPrivate:false
   },
   {
    id:6,
    title:"Profile",
    path:'/profile/',
    element:<Profile/>,
    hidden:true,
    isPrivate:true
   },
   {
      id:7,
    title:"Log oute",
    path:'/Home',
    element:<Home/>,
    hidden:true,
    isPrivate:true
   }
]