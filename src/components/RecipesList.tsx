import Image from "next/image";
import Link from "next/link";

const RecipesList = ({ recipes, type }: any) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {recipes.meals.map((receipe: any, ind: number) => (
        <div
          className="rounded bg-slate-400 cursor-pointer overflow-hidden "
          key={ind}
        >
          <Image
            src={receipe.strMealThumb}
            width={500}
            height={500}
            alt="Recepe Image"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold">{receipe.strMeal}</h2>
            <Link
              href={`types/${type}/${receipe.idMeal}`}
              className="text-white bg-blue-500 rounded py-1 px-3 mt-3 block text-center hover:bg-blue-600"
            >
              Get Recipe Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesList;
