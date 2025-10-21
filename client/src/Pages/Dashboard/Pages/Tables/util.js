const URL = 'http://localhost:8080/api/v1/tables';
const getTables = async (setTables, default_data) => {
    try {
        const res = await fetch(URL);
        const parsedRes = await res.json();
        setTables(parsedRes);
    } catch (error) {
        console.error('Error fetching tables:', error);
        setTables(default_data);
    }
};

const reserveTable = async (table_id, setTables) => {
    try {
        const res = await fetch(`${URL}/${table_id}/reserve`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            // Update the table's availability status locally
            setTables(prevState => {
                const updatedData = prevState.data.map(table => {
                    if (table.id === table_id) {
                        return { ...table, available: false };
                    }
                    return table;
                });
                return { ...prevState, data: updatedData };
            });
        }
    } catch (error) {
        console.error('Error updating table availability:', error);
    }
}

const releaseTable = async (table_id, setTables) => {
    try {
        const res = await fetch(`${URL}/${table_id}/release`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            // Update the table's availability status locally
            setTables(prevState => {
                const updatedData = prevState.data.map(table => {
                    if (table.id === table_id) {
                        return { ...table, available: true };
                    }
                    return table;
                });
                return { ...prevState, data: updatedData };
            });
        }
    } catch (error) {
        console.error('Error updating table availability:', error);
    }
}

const deleteTable = async (table_id, setTables) => {
    try {
        const res = await fetch(`${URL}/${table_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (res.ok) {
            // Remove the table from the local state
            setTables(prev => {
                const updatedData = prev.data.filter(table => table.id !== table_id);
                return { ...prev, data: updatedData };
            });
        }
    } catch (error) {
        console.error('Error deleting table:', error);
    }
}

export { getTables, reserveTable, releaseTable, deleteTable };