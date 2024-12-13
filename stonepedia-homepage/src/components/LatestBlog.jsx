
import React from "react";
import { ImArrowRight2 } from "react-icons/im";

const LatestBlog = () => {
  const blogs = [
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/14d7af350175da9c3414a859a6404384-467x352.webp",
      title:
        "Sustainability in the Marble Industry: How Eco-Friendly Practices Are Shaping the Future",
    },
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/urja-infracon-and-projects-faridabad-faridabad-civil-contractors-due1vl1ets-467x352.png",
      title:
        "The Economics of Marble: Why It’s a Lucrative Material for Builders",
    },
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/container-cargo-ship-import-export-business-across-globe-aerial-top-down-drone-view-running-open-sea-freight-carrying-319582594-transformed-UUtXJY0Ac-transformed-467x352.jpeg",
      title: "Global Market Capitalization of the Natural Stone Industry",
    },
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/A-spacious-feel-in-your-kitchen-where-practical-splendor-meets-design-orchestration-467x352.jpg",
      title:
        "Marble in Modern Kitchen Design: Why It Remains a Timeless Favorite",
    },
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/240_F_830701413_SHu9MSkuj0loVrCuYMhzM7PT3FP7f7ME-transformed-467x352.jpeg",
      title: "The Role of Marble in Luxury Commercial Spaces",
    },
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/krotov_studio_Keeping_Your_Stone_Countertops_Pristine_women_wor_ee2bba4c-3d09-42b5-acfc-49b42c2d89a9-1024x574-1-467x352.webp",
      title: "Marble Care and Maintenance: How to Keep Your Surfaces Pristine",
    },
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/12-6-scaled-1-467x352.webp",
      title:
        "The Rise of Granite: Why It’s More Than Just a Countertop Material",
    },
    {
      imgUrl:
        "https://stonepedia.in/wp-content/uploads/2024/10/381301677487946-467x352.jpg",
      title:
        "Understanding the Economic Factors That Influence the Cost of Marble",
    },
  ];
  return (
    <div>
      <div className=" md:flex justify-between items-center p-5 max-md:space-y-2 md:px-10">
        <h1 className="text-lg font-serif md:text-xl lg:text-4xl font-bold text-orange-600">
          Watch Our Latest Blog
        </h1>
        <button className="flex items-center gap-2 bg-yellow-400 text-white font-semibold px-3 py-1 hover:bg-gray-500">
          VIEW MORE
          <span>
            <ImArrowRight2 />
          </span>
        </button>
      </div>

      <div className=" max-md:space-y-3 mb-5 md:px-10 lg:px-20 md:grid grid-cols-3 gap-4 lg:gap-y-10">
        {blogs.map((each) => (
          <div
            className="relative w-64 h-60 md:w-52 lg:w-60 xl:w-80 max-md:mx-auto rounded-xl"
            style={{ perspective: "1000px" }}
          >
            <div
              className="absolute inset-0 w-full h-full transition-transform duration-[800ms] ease-in-out hover:rotate-y-180"
              style={{
                transformStyle: "preserve-3d",
              }}
            >

              <div className="absolute inset-0 w-full h-full text-black rounded-lg backface-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg z-10"></div>

                <img
                  src={each.imgUrl}
                  alt=""
                  className="h-full w-full object-cover rounded-xl"
                />
                <button
                  className="absolute inset-0 m-auto flex items-center justify-center border-2 border-yellow-300 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-110 transition duration-300 z-20"
                  style={{ width: "fit-content", height: "fit-content" }}
                >
                  Visit
                </button>
              </div>

              <div className="absolute inset-0 w-full h-full bg-gray-700 text-gray-800 text-center rounded-lg transform rotate-y-180 backface-hidden flex justify-center items-center">
                <div className="p-2">
                  <h1 className="font-bold text-center text-xl text-yellow-400">
                    {each.title}
                  </h1>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <style jsx>{`
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .hover\\:rotate-y-180:hover {
            transform: rotateY(180deg);
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
        `}</style>
      </div>
    </div>
  );
};

export default LatestBlog;
