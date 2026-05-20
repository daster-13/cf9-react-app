import {useEffect, useState} from "react";

const WindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        //SetUp
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener("resize", handleResize)

        //CleanUp
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return(
        <>
            <div className= "text-center pt2">
                <h1 className="text-cf-dark-gray text-2xl mb-4">
                    Window size: {size.width} x {size.height}
                </h1>
                <p>Resize the window and watch it update</p>

            </div>
        </>
    )
}
export default WindowSize;