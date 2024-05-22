import Image from "next/image";
import styles from "./page.module.css";
import Navigation from './nav'
import Introduction from "./about";
import Contact from "./contact";

export default function Main() {
  return (
    <div className="grid grid-cols-8 grid-rows-6 h-screen">
      {/* Navigation */}
      <div className="col-span-2 row-span-5 bg-gray-500 flex justify-center"  >
        <Navigation />
      </div>
      
      <div className="col-start-1 col-span-2 row-start-6 bg-gray-500">
          <Contact/>
      </div>

      {/* Introduction */}
      <div className="col-span-4 flex justify-center items-start m-2 p-2">
        <Introduction />
      </div>
    </div>
  );
}

