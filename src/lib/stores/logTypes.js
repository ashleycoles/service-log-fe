import { readable } from "svelte/store";
import { getTypes } from "../requests/typeRequests";

function createLogTypesStore() {
    let setStore;

    const { subscribe } = readable([], set => {
        setStore = set;
        getData();
        return () => {}; // No cleanup necessary
    });

    const getData = async () => {
        try {
            const data = await getTypes();
            setStore(data.data);
        } catch (error) {
            console.error("Failed to fetch types:", error);
        }
    };

    return {
        subscribe,
        refresh: getData // Expose the getData function as refresh
    };
}

export const logTypes = createLogTypesStore();
