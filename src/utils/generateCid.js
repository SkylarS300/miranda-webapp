export function generateCid(existingCids = []) {
    const today = new Date();
    const dateString = today.toISOString().split("T")[0]; // e.g. "2024-07-30"

    let counter = 1;
    let newCid;

    do {
        newCid = `chat-${dateString}-${String(counter).padStart(2, "0")}`;
        counter++;
    } while (existingCids.includes(newCid));

    return newCid;
}
