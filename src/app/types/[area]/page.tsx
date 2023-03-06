import RecipesList from "@/components/RecipesList";

const fetchRecipes = async (area : string) => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await res.json();
    return data;
};

const fetchRecipesArea = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const data = await res.json();

    return data.meals.map((a : any ) => a.strArea);
};


export const generateStaticParams = async () => {
    // SSG
    const areas = await fetchRecipesArea();

    return areas.map((area : any ) => ({
        area : area
    }));
}


const AreaDetail = async ({ params } : any) => {
    let recipes = await fetchRecipes(params.area);
    
    return (
        <div className="">
            <RecipesList recipes={recipes} type={params.area} />
        </div>
    )
};



export default AreaDetail;