export default {
    formatDate(date) {
        if (!date) {
            return '';
        }
        const minutes = date.getMinutes() <= 9 ? `0${date.getMinutes()}` : date.getMinutes();
        const seconds = date.getSeconds() <= 9 ? `0${date.getSeconds()}` : date.getSeconds();
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${minutes}:${seconds}`;
    }
}