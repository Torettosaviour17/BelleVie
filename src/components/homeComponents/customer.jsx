import customerimg from "../../assets/customerimg.png"


export default function CustomerStories() {
    return (
      <section className="bg-pink-50 py-12 h-[100vh] flex items-center justify-center">
        <div className="max-w-screen-lg mx-auto px-4 relative ">
          <div className="flex flex-col md:flex-row h-50% items-start bg-purple-200 p-6  shadow-lg">
            <div className="flex-1 md:w-1/2 space-y-4">
              <h2 className="text-4xl font-semibold text-purple-900">Customer Stories <span className="underline">_</span></h2>
              <p className="text-lg text-purple-800">
                BelleView is the best choice for you and your loved ones to feel at home, away from home. With a combination of charm and convenience, you are sure of a pleasant stay.
              </p>
              <p className="text-md font-semibold text-purple-900">Simmon Haruna</p>
            </div>
            <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center absolute">
              <img
                className="rounded-full w-32 object-cover"
                src={customerimg}
                alt="Customer"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  