export const getAllOrders = async () => {
    let res = await fetch('http://localhost:8080/api/v1/order/');
    let data = await res.json();
    return data;
}
export const getOrder = async id => {
    let res = await fetch(`http://localhost:8080/api/v1/order/${id}`);
    let data = await res.json();
    return data;
}
export const createOrder = async (order) => {
    let res = await fetch('http://localhost:8080/api/v1/order/save_order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });
    let data = await res.json();
    return data;
}