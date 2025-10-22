const getPromotions = async () => {
    try {
        let res = await fetch('http://localhost:8080/api/v1/promotions/');
        let data = await res.json();
        if (data.code === 200) {
            return data.data;
        }
    } catch (error) {
        console.error('Error fetching promotions:', error);
    }
    return [];
}

const getPromotionById = async (id) => {
    try {
        let res = await fetch(`http://localhost:8080/api/v1/promotions/get_promotion?id=${id}`);
        let data = await res.json();
        if (data.code === 200) {
            return data.data;
        }
    } catch (error) {
        console.error(`Error fetching promotion with ID ${id}:`, error);
    }
    return null;
}

const updatePromotionById = async (id, updatedData) => {
    let res = await fetch(`http://localhost:8080/api/v1/promotions/update_promotion?id=${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
    });
    let data = await res.json();
    return data;
};

const deletePromotionById = async (id) => {
    console.log(`Delete promotion with ID: ${id}`);
    let res = await fetch(`http://localhost:8080/api/v1/promotions/delete_promotion?id=${id}`,
        {
            method: 'DELETE',
        }
    );
    let data = await res.json();
    return data;
}
export { getPromotions, getPromotionById, updatePromotionById, deletePromotionById };