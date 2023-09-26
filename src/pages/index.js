import Hasil from "./b";

export default function App() {
  return (
    <div>
      <div className="flex flex-row justify-between mt-20">
        <img src="/test.png" alt="" />
        <img src="/frontend.png" alt="" />
      </div>

      <div className="flex flex-col md:flex-row justify-around">
        <div className="w-full md:w-1/2 justify-center items-center p-6">
          <div className="mt-40 ">
            <h1 className="text-5xl text-white text-center">START YOUR JOURNEY</h1>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit sit alias. Id distinctio praesentium reprehenderit consequuntur doloremque cumque quisquam voluptates, non veritatis velit mollitia ducimus deserunt unde
              possimus accusamus numquam assumenda. Commodi, obcaecati. Impedit odio inventore natus, delectus suscipit soluta voluptatum rerum odit eos culpa totam ducimus nihil deleniti!
            </p>
          </div>
        </div>

        <div className="w-full md:w-auto mt-10">
          <Hasil />
        </div>
      </div>
    </div>
  );
}
