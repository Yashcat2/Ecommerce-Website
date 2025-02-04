import React, { useContext ,useState} from 'react'
import { shopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {
 
  const { products } = useContext(shopContext);
  const [showFilter,setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1  sm:gap-10 pt-10 border-t '>
      {/* filter OPtions */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} /> Women
            </p>  
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids '} /> Kids
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700 '>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topware'} /> Topware
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'BottomWare'} /> BottomWare
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'WinterWare '} /> WinterWare
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection