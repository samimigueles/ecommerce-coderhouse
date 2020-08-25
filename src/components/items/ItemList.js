
export default function ItemList() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res([
                { id: '1', name: 'transistor', price: 50 , view: 'https://cdmxelectronica.com/wp-content/uploads/AR0258-Transistor-BC547B.jpg'},
                { id: '2', name: 'potentiometer', price: 65, view:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Potentiometer.jpg' },
                { id: '3', name: 'resistor', price: 45, view:'https://www.diyelectronics.co.za/store/10512-thickbox_default/resistor-220-ohm-14w-5.jpg' }])
        }, 2000)
    })




}
