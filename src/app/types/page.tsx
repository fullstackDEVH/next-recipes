import Link from "next/link";

const fetchRecipesArea = async () => {
    const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    const data = await res.json();

    return data.meals.map((a : any ) => a.strArea);
};


// server component
const Types = async () => {
    const areas = await fetchRecipesArea();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
            {
                areas.map((area : any, index : number) => (
                    <Link href={`types/${area}`} key={index} 
                    className="rounded bg-gray-300 shadow-gray-500 text-black block text-2xl py-10 font-bold text-center hover:bg-blue-500 hover:text-white" 
                    >{area}</Link>
                ))
            }
        </div>
    )
}

export default Types;