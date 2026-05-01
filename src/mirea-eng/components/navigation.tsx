import type { Topic } from "../utils/types.ts";


interface NavigationProps {
    topics: Topic[];
    currentTopic: Topic;
    switchTopic: (topic: Topic) => void;
}

function Navigation({ topics, currentTopic, switchTopic }: NavigationProps) {

    return (
        <nav
            className="flex justify-center gap-4 mt-10"
        >
            {
                topics.map(t => (
                    <button
                        key={ t }
                        className={ `${ currentTopic === t ? "bg-transparent text-black" : "bg-black text-white"} 
                            border-1 border-gray-400 p-4 rounded-xl shadow-gray-400
                            hover:cursor-pointer hover:translate-y-[-1px] hover:shadow-md  transition-all` }
                        onClick={() => switchTopic(t)}
                    >
                        { t }
                    </button>
                ))
            }
        </nav>
    );
}

export default Navigation;