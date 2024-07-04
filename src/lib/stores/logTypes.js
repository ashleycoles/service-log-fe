import { readable } from "svelte/store";
import { getTypes } from "../requests/typeRequests";

function createLogTypesStore() {
    let setStore;

    const { subscribe } = readable([], set => {
        setStore = set;
        getData();
        return () => {};
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
        refresh: getData 
    };
}

export const logTypes = createLogTypesStore();
