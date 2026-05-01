import { useState } from "react";
import { translations } from "../constants/constants.ts";
import { toggleWord } from "../utils/utils.ts";
import { useDisplays } from "../hooks/hooks.ts";


function Translations() {
    const [parsedString] = useState<string[]>(translations.split("\n"));
    const [displays, setDisplays] = useDisplays();


    return (
        <div className="flex flex-col gap-4 mt-5 mb-10 w-[60%] max-md:w-[90%]">
            {
                parsedString.map((s, ind) => {
                    const leftPart = s.substring(0, s.indexOf(".") + 1);
                    const darkPart = s.substring(s.indexOf(".") + 1, s.indexOf("–"));
                    const rightPart = s.substring(s.indexOf("–"), s.length);
                    return (<div key={ s } className="flex gap-2">
                        <p>{ leftPart }</p>
                        <p
                            className={ `${displays[ind] ? "bg-transparent" : "bg-black"} transition-all rounded-lg text-wrap
                            hover:cursor-pointer` }
                            onClick={() => toggleWord(ind, displays, setDisplays)}
                        >
                            { darkPart }
                        </p>
                        <p>
                            { rightPart }
                        </p>
                    </div>);
                })
            }
        </div>
    );
}

export default Translations;