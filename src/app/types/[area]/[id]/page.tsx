import Image from "next/image";

const fetchRecipeDetail = async (id: string) => {
  return await (
    await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  ).json();
};

const MealIdDetail = async ({ params }: any) => {
  const { meals } = await fetchRecipeDetail(params.id);
    const ingrediant = Object.keys(meals[0]).filter(meal => {
        return meal.indexOf("Ingredient") > 0
    }).map(item => meals[0][item]).filter(Boolean);
    
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <Image
          src={meals[0].strMealThumb}
            width={500}
            height={500}
          alt={meals[0].strMealThumb}
          className="w-full"
        />
      </div>
      <div className="p-5">
        <h3 >Recipe Name : <span className="font-bold text-lg">{meals[0].strMeal}</span></h3>
        <div className="tag mt-3" >
            <p>Ingrediant List :</p>
            {
                ingrediant.map((ingredian: string, index:number) => (
                    <span key={ingredian} className="bg-blue-500 text-white px-2 py-1 inline-block mr-1 mb-1 rounded cursor-pointer">
                        {ingredian}
                    </span>
                ))
            }
        </div>

        <div className="mt-3">
            <p>Video link : </p>
            <a href={meals[0].strYoutube} target="_blank" rel="noreferrer" className="text-blue-500" >How to make {meals[0].strMeal } </a>
        </div>
      </div>
    </div>
  );
};

export default MealIdDetail;
