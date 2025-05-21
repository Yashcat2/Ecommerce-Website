import React, { useContext, useEffect ,useState} from 'react'
import { shopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(shopContext);
    const [latestProduct,setLatestProduct] = useState([]);

    useEffect(()=>{
        setLatestProduct(products.slice(0,10));
    },[products])


  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl '>
            <Title text1={'LATEST'} text2={"COLLECTION"}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Discover the latest arrivals at <strong>Infinity Laptop Store</strong> — featuring cutting-edge technology, sleek designs, and powerful performance. Whether you're a gamer, a student, or a professional, our newest laptop collections are designed to meet your every need. Shop now and stay ahead with innovation!
        </p>

        </div>
        {/* Rendering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProduct.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }

        </div>
    </div>
  )
}

export default LatestCollection