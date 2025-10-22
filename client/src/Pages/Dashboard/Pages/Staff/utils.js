const getEmployees = async () => {
    try {
        let res = await fetch('http://localhost:8080/api/v1/employees/');
        res = await res.json();
        console.log('Fetched staff:', res);
        return res;
    } catch (err) {
        console.error('Failed to fetch staff:', err);
        return null;
    }
};

const getEmployeeById = async (id) => {
    try {
        let res = await fetch(`http://localhost:8080/api/v1/employees/get_employee?id=${id}`);
        res = await res.json();
        console.log('Fetched employee:', res);
        return res;
    } catch (err) {
        console.error('Failed to fetch employee:', err);
        return null;
    }
};

const updateEmployee = async (employee) => {
    try {
        let res = await fetch(`http://localhost:8080/api/v1/employees/update_employee`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": employee.id,
                "name": employee.name,
                "email": employee.email,
                ...employee,
            }),
        });
        res = await res.json();
        console.log('Updated employee:', res);
        return res;
    }
    catch (err) {
        console.error('Failed to update employee:', err);
        return null;
    }
};

const deleteEmployee = async (id) => {
    try {
        await fetch(`http://localhost:8080/api/v1/employees/delete_employee?id=${id}`, {
            method: 'DELETE',
        });
        console.log('Deleted employee with id:', id);
        return true;
    }
    catch (err) {
        console.error('Failed to delete employee:', err);
        return false;
    }
};

export { getEmployees, getEmployeeById, updateEmployee, deleteEmployee };