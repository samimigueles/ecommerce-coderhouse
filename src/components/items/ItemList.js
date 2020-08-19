
export default function ItemList() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([{ id: '1', name: 'transistor', stock: 3 }, { id: '2', name: 'potentiometer', stock: 7 }, { id: '3', name: 'resistor', stock: 9 }])
        }, 2000)
    })

    

    
}
