const getEvents = async (id) => {
    const res = await fetch(`http://localhost:8080/api/v1/events/${id}`);
    const data = await res.json();
    return data;
}

const deleteEvent = async (id) => {
    try {
        const res = await fetch(`http://localhost:8080/api/v1/events/delete_event`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "eventId": id }),
        });
        if (res.ok) {
            console.log("Event deleted successfully");
        } else {
            console.error("Failed to delete event");
        }
    } catch (err) {
        console.error("Error deleting event:", err);
    }
}

export { getEvents, deleteEvent };