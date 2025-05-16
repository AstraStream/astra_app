"use client";

import { useEffect, useState } from 'react'


const useRewards = () => {
    // const getPoint
    const [points, setPoints] = useState(0);

    useEffect(() => {
        try {
            const point = localStorage.getItem("astra-pt") ?? 0;

            if (point) {
                setPoints(JSON.parse(point));
            }
        } catch (err) {
            console.warn("Failed to parse points from localStorage");
        }
    }, []);

    return {
        points
    }
}

export default useRewards