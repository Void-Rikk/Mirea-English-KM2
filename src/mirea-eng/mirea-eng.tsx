import { useState } from "react";
import Abbreviations from "./components/abbreviations.tsx";
import Translations from "./components/translations.tsx";
import Definitions from "./components/definitions.tsx";

type Topics = "translations" | "abbreviations" | "definitions";

const topics: Topics[] = ["translations", "abbreviations", "definitions"];

const pointsInfo = {
    translationsInfo: "перевод 25 единиц лексического материала (слов и устойчивых словосочетаний) с русского на английский язык – 5 баллов",
    abbreviationsInfo: "расшифровка 10 аббревиатур и других сокращений на английском языке – 2 балла",
    definitionsInfo: "определение 6 терминов на английском языке – 6 баллов"
};

function MireaEng() {
    const [currentTopic, setCurrentTopic] = useState<Topics>(localStorage.getItem("topic") as Topics || "translations");

    const switchTopic = (topic: Topics) => {
        if (currentTopic === topic) return;
        localStorage.setItem("topic", topic);
        setCurrentTopic(topic);
    }

    return (
        <div className="flex flex-col items-center gap-4">
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

            { currentTopic === "translations" && <>
                <p className="mt-5">{ pointsInfo.translationsInfo }</p>
                <Translations />
            </> }
            { currentTopic === "abbreviations" && <>
                <p className="mt-5">{ pointsInfo.abbreviationsInfo }</p>
                <Abbreviations />
            </> }
            { currentTopic === "definitions" && <>
                <p className="mt-5">{ pointsInfo.definitionsInfo }</p>
                <Definitions />
            </> }
        </div>
    );
}

export default MireaEng;