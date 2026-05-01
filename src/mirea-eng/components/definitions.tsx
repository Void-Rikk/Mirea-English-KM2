import { useState } from "react";
import { definitions } from "../constants/constants.ts";
import { toggleWord } from "../utils/utils.ts";
import { useDisplays } from "../hooks/hooks.ts";


function Definitions() {
    const [parsedString] = useState<string[]>(definitions.split("\n"));
    const [displays, setDisplays] = useDisplays();


    return (
        <div className="flex flex-col gap-4 mt-5 mb-10 w-[60%] max-md:w-[90%]">
            {
                parsedString.map((s, ind) => {
                    const word = s.substring(0, s.indexOf("-") + 1);
                    const def = s.substring(s.indexOf("-") + 1, s.length);
                    return (<div key={ s } className="flex gap-2">
                        <p>{ word }</p>
                        <p
                            className={ `${displays[ind] ? "bg-transparent" : "bg-black"} transition-all rounded-lg text-wrap
                            hover:cursor-pointer` }
                            onClick={() => toggleWord(ind, displays, setDisplays)}
                        >
                            { def }
                        </p>
                    </div>);
                })
            }
        </div>
    );
}

export default Definitions;