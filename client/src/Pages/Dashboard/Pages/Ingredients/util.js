const URL = 'http://localhost:8080/api/v1/ingredients';

const getIngredients = async () => {
    let res = await fetch(`${URL}/`);
    let data = res.json();
    return data;
};

const getIngredientById = async (id) => {
    let res = await fetch(`${URL}/get_ingredient/${id}`);
    let data = await res.json();
    return data;
};

const createIngredient = async (ingredient_name) => {
    let res = await fetch(`${URL}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "name": ingredient_name }),
    });
    return await res.json();
};

const updateIngredient = async (ing_id, ing_name) => {
    let res = await fetch(`${URL}/update_ingredient/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "ingId": ing_id,
            "name": ing_name,
        }),
    });
    return await res.json();
}

const deleteIngredient = async (id) => {
    let res = await fetch(`${URL}/delete_ingredient/${id}`, {
        method: 'DELETE',
    });
    return await res.json();
};

export { getIngredients, getIngredientById, createIngredient, updateIngredient, deleteIngredient };