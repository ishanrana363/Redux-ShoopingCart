import Product from './Product'
import AddProduct from './AddProduct';

const HomePage = () => {
  return (
    <div className='w-11/12 mx-auto ' >
      <div className='flex justify-between gap-5 ' >
        <div className='w-[65%]' >
            <Product></Product>
        </div>
        <div className='w-[35%]' >
            <AddProduct></AddProduct>
        </div>
      </div>
    </div>
  )
}

export default HomePage
