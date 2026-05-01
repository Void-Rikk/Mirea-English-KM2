import { useState } from "react";
import { abbreviations } from "../constants/constants.ts";
import { toggleWord } from "../utils/utils.ts";
import { useDisplays } from "../hooks/hooks.ts";


function Abbreviations() {
    const [parsedString] = useState<string[]>(abbreviations.split("\n"));
    const [displays, setDisplays] = useDisplays()


    return (
        <div className="flex flex-col gap-4 mt-5 mb-10 max-md:w-[90%]">
            {
                parsedString.map((s, ind) => {
                    const leftPart = s.substring(0, s.indexOf("—") + 2);
                    const rightPart = s.substring(s.indexOf("—") + 2, s.length);
                    return (<div key={ s } className="flex gap-2">
                        <p>{ leftPart }</p>
                        <p
                            className={ `${displays[ind] ? "bg-transparent" : "bg-black"} transition-all rounded-lg` }
                            onClick={() => toggleWord(ind, displays, setDisplays)}
                        >
                            { rightPart }
                        </p>
                    </div>);
                })
            }
        </div>
    );
}

export default Abbreviations;