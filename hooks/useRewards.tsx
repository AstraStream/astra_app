"use client";

import { useState } from 'react'


const useRewards = () => {
    const [points] = useState(0);

    return {
        points
    }
}

export default useRewards