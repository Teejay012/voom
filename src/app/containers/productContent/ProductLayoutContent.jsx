import ProductDescription from "@/app/containers/productContent/ProductDescription";

const ProductLayoutContent = ({ children }) => {
    return (
      <div className="min-h-screen flex flex-col">
        <nav className="bg-gray-800 text-[#fff] p-4">
          {/* Navigation content goes here */}
          <ul className="flex flex-col 400:flex-row gap-5">
            <li><button href="/" className="border-b-2 text-[20px] cursor-pointer border-secondary-color">Descriptionn</button></li>
            <li><button href="/about" className="border-b-2 text-[20px] cursor-pointer hover:border-secondary-color">Reviews</button></li>
            <li><button href="/contact" className="border-b-2 text-[20px] cursor-pointer hover:border-secondary-color">More Products</button></li>
          </ul>
        </nav>
        <main className="flex-1 bg-gray-100 p-4">
          {/* Main content goes here */}
          <ProductDescription />
        </main>
      </div>
    );
  };
  
  export default ProductLayoutContent;
  