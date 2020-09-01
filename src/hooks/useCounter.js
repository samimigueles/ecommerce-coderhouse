import { useState } from 'react';

const Counter = (init) => {
    const [item, setItem] = useState(init);

    function addItem() {
        setItem(item + 3);
    }

    function subtractItem() {
        setItem(item - 3);
    }

    return [item, addItem, subtractItem]
}

export default Counter;
