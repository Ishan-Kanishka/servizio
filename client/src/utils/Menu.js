export const getMenu = async id => {
    let res = await fetch(`http://localhost:8080/api/v1/menus/${id}`);
    let data = await res.json();
    return data;
};

export const getAllMenus = async () => {
    let res = await fetch('http://localhost:8080/api/v1/menus/');
    let data = await res.json();
    return data;
}