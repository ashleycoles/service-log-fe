import { readable } from "svelte/store";
import { getLogs } from "../requests/logRequests";

function createLogsStore() {
    let setStore;

    const { subscribe } = readable([], set => {
        setStore = set;
        getData();
        return () => {};
    });

    const getData = async (type = null) => {
        try {
            const data = await getLogs(type);
            setStore(data.data);
        } catch (error) {
            console.error("Failed to fetch logs:", error);
        }
    };

    return {
        subscribe,
        refresh: getData 
    };
}

export const logs = createLogsStore();
