import Image from 'next/image';
import apple from "../../../public/assets/apple.png";

const categoriesContents = [
    {
        url: "#",
        image: apple,
        name: "PHONES & TABLETS",
    },
    {
        url: "#",
        image: apple,
        name: "PHONES & TABLETS",
    },
    {
        url: "#",
        image: apple,
        name: "PHONES & TABLETS",
    },
    {
        url: "#",
        image: apple,
        name: "PHONES & TABLETS",
    },
    {
        url: "#",
        image: apple,
        name: "PHONES & TABLETS",
    },
    {
        url: "#",
        image: apple,
        name: "PHONES & TABLETS",
    },
]

const Categories = () => {
  return (
    <div className="categories_container bg-[#f3f3f3] flex justify-between items-center h-[300px] overflow-auto py-10 px-6">
        {categoriesContents.map((content, index) => (
            <div key={index}>
            <a href={content.url} className="categories_container-category group flex items-center mx-3 justify-center flex-col gap-3">
                <div className="h-[170px] w-[170px] bg-[#fff] flex items-center justify-center overflow-hidden rounded-[50%] relative">
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20 rounded-[50%]"></div>

                    {/* Image */}
                    <Image
                    src={content.image}
                    alt="Iphone"
                    className="w-[100px] object-cover object-center transition-transform duration-300 group-hover:scale-90"
                    />
                </div>

                <p className="text-primary-color font-bold text-[14px] transition-colors duration-300 hover:text-secondary-color">{content.name}</p>
            </a>
            </div>
        ))}
        
    </div>
  )
}

export default Categories