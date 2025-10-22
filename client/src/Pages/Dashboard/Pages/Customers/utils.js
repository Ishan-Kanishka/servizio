const getCustomers = async () => {
    let res = await fetch('http://localhost:8080/api/v1/customer/');
    res = await res.json();
    console.log(res);
    return res;
};

const getCustomerById = async (customerId) => {
    let res = await fetch(`http://localhost:8080/api/v1/customer/get_customer/${customerId}`);
    res = await res.json();
    console.log('Fetched customer by ID:', res);
    return res;
};

const updateCustomer = async (customer) => {
    let res = await fetch(`http://localhost:8080/api/v1/customer/update_customer`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "id": customer.id,
            "name": customer.name,
            "email": customer.email,
            "address": customer.address,
            "zipCode": customer.zipCode,
            "city": customer.city,
            "country": customer.country,
            ...customer,
        }),
    });
    res = await res.json();
    console.log('Updated customer:', res);
    return res;
};

const deleteCustomer = async (customerId) => {
    let res = await fetch(`http://localhost:8080/api/v1/customer/delete_customer/${customerId}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        console.log(`Deleted customer with ID: ${customerId}`);
    } else {
        console.error(`Failed to delete customer with ID: ${customerId}`);
    }
    return res.ok;
};

export { getCustomers, getCustomerById, updateCustomer, deleteCustomer };