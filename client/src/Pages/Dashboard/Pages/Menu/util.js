const getMenus = async () => {
    let res = await fetch('http://localhost:8080/api/v1/menus/');
    return await res.json();
};

const getMenuById = async (menuId) => {
    let res = await fetch(`http://localhost:8080/api/v1/menus/${menuId}`);
    return await res.json();
}

const updateMenu = async (menuId, menuData) => {
    let res = await fetch(`http://localhost:8080/api/v1/menus/update_menu/${menuId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(menuData),
    });
    return await res.json();
};

const deleteMenu = async (menuId) => {
    let res = await fetch(`http://localhost:8080/api/v1/menus/delete_menu/${menuId}`, {
        method: 'DELETE',
    });
    return await res.json();
}

export { getMenus, getMenuById, updateMenu, deleteMenu };