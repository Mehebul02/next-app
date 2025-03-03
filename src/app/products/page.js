import ProductCard from '@/components/products/ProductCard';

const ProductsPage = async() => {
    const res = await fetch('http://localhost:5000/products',{
      cache:'no-store'
    })
    const products = await res.json();
    console.log(products);
    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl text-center text-yellow-300 mt-4'>All Product</h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
        {
          products?.map((product)=>
            <ProductCard key={product.id} product={product}/>
          )
        }
      </div>
        </div>
    );
};

export default ProductsPage;