import React from 'react'

const useWindowDimension = () => {
    const [dimensions, setDimensions] = React.useState({ width: window.innerWidth, height: window.innerHeight });

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