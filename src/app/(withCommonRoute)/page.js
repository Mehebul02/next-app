import ProductCard from "@/components/products/ProductCard";
import Link from "next/link";

const HomePage =async () => {

  const res = await fetch("http://localhost:5000/products",{
    // cache:"force-cache"
  next:{
    revalidate:5
  }
  })
  const products =await res.json();

  console.log(products);


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className='mt-14 text-3xl text-center text-white '>Welcome in my laptop world </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
        {
          products?.slice(0,6).map((product)=>
            <ProductCard key={product.id} product={product}/>
          )
        }
      </div>
     <Link href='/products'>
     <div className="w-40 mx-auto text-center my-7 bg-green-600 px-3 py-2 rounded-md">See All Products</div>
     </Link>
    </div>
  );
};

export default HomePage;