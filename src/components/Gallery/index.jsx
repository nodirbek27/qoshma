import React from "react";

const Gallery = () => {
  const pictures = [
    { id: 1, image: "https://i.imgur.com/5yeBVeM.jpeg", view: 24, like: 3 },
    { id: 2, image: "https://i.imgur.com/fjXFX93.jpeg", view: 15, like: 5 },
    { id: 3, image: "https://i.imgur.com/ISpNf4j.jpeg", view: 18, like: 12 },
    { id: 4, image: "https://i.imgur.com/DBpznrn.jpeg", view: 30, like: 8 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
        <div className="mb-5">
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3">
            Gallareya
          </h2>
          <div className="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {pictures.map((item) => (
          <div className="bg-white" key={item.id}>
            <img
              className="h-36 md:h-48 w-full object-cover rounded"
              src={item.image}
              alt=""
            />
            <ul className="mt-3 flex justify-end pr-2">
              <li className="mr-2">
                <a href="/" className="flex text-gray-400 hover:text-gray-600">
                  <svg className="mr-0.5 h-[20px] w-auto" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                  {item.view}
                </a>
              </li>
              <li>
                <a href="/" className="flex text-gray-400 hover:text-gray-600">
                  <svg className="mr-0.5 h-[20px] w-auto" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                    />
                  </svg>
                  {item.like}
                </a>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
