"use client";

import Link from "next/link";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useSelectedLayoutSegments,
} from "next/navigation";

const Header = () => {
  const segments = useSelectedLayoutSegments();
  const currentArea = segments[1];
  const recipeId = segments[2];

  return (
   <div className="py-5 bg-slate-300 ">
     <div className="flex justify-between max-w-6xl w-full mx-auto">
      <div className="">
        <Link href="/">
          <h1 className="text-blue-700 font-bold text-5xl text-center">
            Foode
          </h1>
        </Link>
      </div>

      {currentArea && (
        <Link href={recipeId ? `/types/${currentArea}` : `/types`}
            className="bg-blue-500 text-white text-xsm p-4 rounded font-bold"
        >
            {recipeId ? `Back to recipe` : `Back recipe type`}
        </Link>
      )}
    </div>
   </div>
  );
};

export default Header;
