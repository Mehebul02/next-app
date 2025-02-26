import React from "react";

const DynamicProductPage = async ({ params ,searchParams}) => {
  const productId = await params;
  console.log(productId);
  console.log(await searchParams);
  return (
    <div>
      <h1 className="text-4xl text-center text-yellow-600">
        Dynamic product page
      </h1>
    </div>
  );
};

export default DynamicProductPage;
