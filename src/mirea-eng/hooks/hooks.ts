import { useState } from "react";

export const useDisplays = () => useState<Record<number, boolean>>({});