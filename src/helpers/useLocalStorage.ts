export function useLocalStorage() {

    function save(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function load(key: string) {
        let item: any = localStorage.getItem(key);

        return JSON.parse(item);
    }

    return {
        load,
        save,
    };
}
