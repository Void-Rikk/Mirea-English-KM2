import { useState } from "react";
import Abbreviations from "./components/abbreviations.tsx";
import Translations from "./components/translations.tsx";
import Definitions from "./components/definitions.tsx";
import Description from "./components/description.tsx";
import Navigation from "./components/navigation.tsx";
import type { Topic } from "./utils/types.ts";
import { pointsInfo, topics } from "./constants/constants.ts";


function MireaEng() {
    const [currentTopic, setCurrentTopic] = useState<Topic>(localStorage.getItem("topic") as Topic || "translations");

    const switchTopic = (topic: Topic) => {
        if (currentTopic === topic) return;
        localStorage.setItem("topic", topic);
        setCurrentTopic(topic);
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <Navigation
                topics={ topics }
                currentTopic={ currentTopic }
                switchTopic={ switchTopic }
            />
            { currentTopic === "translations" && <>
                <Description content={ pointsInfo[currentTopic] } />
                <Translations />
            </> }
            { currentTopic === "abbreviations" && <>
                <Description content={ pointsInfo[currentTopic] } />
                <Abbreviations />
            </> }
            { currentTopic === "definitions" && <>
                <Description content={ pointsInfo[currentTopic] } />
                <Definitions />
            </> }
        </div>
    );
}

export default MireaEng;