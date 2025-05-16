"use client";

import React from 'react'

const useWindowDimension = () => {
    const [dimensions, setDimensions] = React.useState({ width: window?.innerWidth || 0, height: window?.innerHeight || 0 });

    React.useEffect(() => {
        function handleResize() {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return { ...dimensions }
}

export default useWindowDimension