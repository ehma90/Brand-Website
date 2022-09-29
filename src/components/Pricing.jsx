import { GiCheckMark } from "react-icons/gi";

function Pricing() {
  return (
    <div name="pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">The right price for your research</h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            praesentium, pariatur vero nemo amet veritatis, maxime obcaecati
            quae soluta ad asperiores. Architecto unde officia exercitationem
            doloremque, reiciendis cumque ducimus dicta?
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">standard</span>
            <div>
              <p className="text-6xl font-bold py-4 px-0">
                $49<sub className="text-xl text-slate-500">/mo</sub>{" "}
              </p>
            </div>

            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            <ul className="text-2xl ">
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <button className="w-full py-4 my-4">Get Started</button>
            </ul>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <span className="uppercase px-3 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">premium</span>
            <div>
              <p className="text-6xl font-bold py-4 px-0">
                $99<sub className="text-xl text-slate-500">/mo</sub>{" "}
              </p>
            </div>

            <p className="text-2xl py-8 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            <ul className="text-2xl ">
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <li className="flex items-center py-4">
                <GiCheckMark className="text-green-600 mr-5"/>
                 Lorem ipsum dolor.
              </li>
              <button className="w-full py-4 my-4">Get Started</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
