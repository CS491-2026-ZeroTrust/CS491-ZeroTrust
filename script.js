/* Add an entry here and a card appears automatically. */
const deliverables = [
    {
        title: "Project Information Form",
        date: "2026-10-23",
        path: "deliverables/CS491_Project_Information_Form_ZeroTrust.pdf"
    },
    {
        title: "Assessment of Innovation Form",
        date: "2026-10-23",
        path: "deliverables/ZeroTrust_Assessment_of_Innovation_Form_v4-signed.pdf"
    }
];

function fileName(path) {
    return path.split("?")[0].split("/").pop();
}

function formatDate(iso) {
    const d = new Date(iso + "T00:00:00");
    return isNaN(d) ? iso : d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

function fileExtension(path) {
    const match = path.split("?")[0].match(/\.([^.]+)$/);
    return match ? match[1] : "file";
}

function createDeliverableCard(item) {
    const card = document.createElement("div");
    card.className = "card deliverable-card";
    card.innerHTML = `
        <div class="deliverable-top">
            <h3 class="deliverable-title">${item.title}</h3>
            <span class="deliverable-date">${formatDate(item.date)}</span>
        </div>
        <div class="deliverable-bottom">
            <div class="file-info">
                <span class="file-name">${fileName(item.path)}</span>
                <span class="file-type">(.${fileExtension(item.path)})</span>
            </div>
            <a href="${item.path}" class="download-btn" download>Download File</a>
        </div>`;
    return card;
}

const container = document.getElementById("deliverables");
deliverables.forEach(item => container.appendChild(createDeliverableCard(item)));
