import { useFetchCategories } from "../hooks/useFetchCategories";

export default function Categories({ setSelectedCategory }) {
    const { data, isLoading, error } = useFetchCategories('desc');

    return (
        <div className="flex justify-center mt-3 items-center">
            {!isLoading && data && (
                <button
                    className="bg-red-400 text-center mr-4 hover:bg-red-500
                    text-zinc-50 font-semibold p-3 w-45 rounded-xl"
                    onClick={() => setSelectedCategory(null)}
                >
                    ALL
                </button>
            )}
            {data && data.map(category => (
                <ul key={category}>
                    <li className="bg-red-400 text-center mr-4 hover:bg-red-500
                        text-zinc-50 font-semibold p-3 w-45 rounded-xl"
                    >
                        <button onClick={() => setSelectedCategory(category)}>
                            {category.toUpperCase()}
                        </button>
                    </li>
                </ul>
            ))}
        </div>
    );
}
