export default function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}