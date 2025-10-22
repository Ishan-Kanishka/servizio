const getMenus = async () => {
    let res = await fetch('http://localhost:8080/api/v1/menus/');
    return await res.json();
};

const deleteMenu = async (menuId) => {
    let res = await fetch(`http://localhost:8080/api/v1/menus/delete_menu/${menuId}`, {
        method: 'DELETE',
    });
    return await res.json();
}

export { getMenus, deleteMenu };