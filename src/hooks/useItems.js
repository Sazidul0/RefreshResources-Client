import { useEffect, useState } from "react"

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://ancient-hamlet-40943.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return [items, setItems]
}

export default useItems;