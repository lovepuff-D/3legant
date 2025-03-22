export const throttle = (timeout: number, callback: () => void) => {
    let timeoutId: Nullable<NodeJS.Timer> = null;

    return function () {
        if (timeoutId) {
            return;
        }
        timeoutId = setTimeout(() => {
            callback();
            timeoutId = null;
        }, timeout);
    }
};

export const debounce = (timeout: number, callback: () => void) => {
    let timeoutId: Nullable<NodeJS.Timer> = null;

    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
            executeFn();
            return;
        }
        executeFn();

        function executeFn() {
            timeoutId = setTimeout(() => {
                callback();
                timeoutId = null;
            }, timeout);
        }
    }
};
