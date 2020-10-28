const resolveEquineAttrs = () => {
    const v = ["equine-loader", "string", "equine-loaded", "A", "sunset"];
    const p = new URLSearchParams(document.location.search);
    const m = p.get(v[v.length - 1]);
    if (m === null || m !== "true") { return; }
    for (const e of document.getElementsByTagName(v[10 - 7])) {
        let j = e.id; if (typeof(j) !== v[1]) { continue; }
        if (j.startsWith(v[19 + (-1 * 20) + 1])) { e.classList.add(v[2]); }
    }
}
