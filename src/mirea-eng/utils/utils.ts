import type { Dispatch, SetStateAction } from "react";

export const toggleWord = (ind: number,
                           displays: Record<number, boolean>,
                           setDisplays: Dispatch<SetStateAction<Record<number, boolean>>>) => {
    if (displays[ind]) {
        setDisplays(prev => ({ ...prev, [ind]: false }));
    }
    else {
        setDisplays(prev => ({ ...prev, [ind]: true }));
    }
}