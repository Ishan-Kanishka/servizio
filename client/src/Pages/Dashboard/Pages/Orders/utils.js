const getOrders = async sortBy => {
    let res = await fetch(
        `http://localhost:8080/api/v1/order/?sortBy=${sortBy}`
    );
    let data = await res.json();
    console.log(data);
    return data;
};

const getOrderDetailsById = async (id) => {
    const res = await fetch(
        `http://localhost:8080/api/v1/order-items/by-order/${id}`
    );
    const data = await res.json();
    if (res.ok) {
        console.log(data);
        return data.data;
    }
};

const deleteOrderById = async (id) => {
    const res = await fetch(
        `http://localhost:8080/api/v1/order/delete_order?id=${id}`,
        { method: "DELETE" }
    );
    const data = await res.json();
    if (res.ok) {
        console.log(data);
        return data.data;
    }
};
export { getOrderDetailsById, getOrders, deleteOrderById };
