import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-all duration-300">
      <div className="relative w-full h-56">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg text-black font-semibold">{product.name}</h2>
        <p className="text-black-500 text-sm">{product.brand} • {product.category}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xl font-bold text-blue-600">${product.price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
