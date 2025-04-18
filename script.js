
const ageRanges = [
    { min: 0, max: 6, iron: "0.27 mg", vitaminD: "400 IU (supplement)", zinc: "2 mg", calcium: "200 mg", protein: "9.1 g", sleep: "14–17 hrs" },
    { min: 7, max: 12, iron: "11 mg", vitaminD: "400 IU", zinc: "3 mg", calcium: "260 mg", protein: "11 g", sleep: "12–15 hrs" },
    { min: 13, max: 24, iron: "7 mg", vitaminD: "600 IU", zinc: "3 mg", calcium: "700 mg", protein: "13 g", sleep: "11–14 hrs" }
];

const mumTips = [
    "Even 5 minutes of silence with tea counts as rest. Take it.",
    "You're allowed to rest even when the dishes aren't done.",
    "That laundry can wait. You are not a machine.",
    "Ask for help. It's a strength, not a weakness.",
    "You are your baby's whole world — and that's beautiful."
];

function updateAgeLabel(value) {
    document.getElementById("ageLabel").textContent = value + " months old";
}

function getRangeData(age) {
    return ageRanges.find(r => age >= r.min && age <= r.max);
}

function showRecommendations() {
    const age = parseInt(document.getElementById("ageInput").value);
    const data = getRangeData(age);
    const results = document.getElementById("results");
    results.classList.remove("hidden");
    results.innerHTML = `
        <h2>At ${age} months, here’s what your baby needs:</h2>
        <ul>
            <li>🧠 <strong>Iron:</strong> ${data.iron}</li>
            <li>☀️ <strong>Vitamin D:</strong> ${data.vitaminD}</li>
            <li>💪 <strong>Protein:</strong> ${data.protein}</li>
            <li>🛏️ <strong>Recommended Sleep:</strong> ${data.sleep}</li>
        </ul>
    `;
    document.getElementById("moreInfo").classList.remove("hidden");

    const tip = mumTips[Math.floor(Math.random() * mumTips.length)];
    document.getElementById("mumTip").innerHTML = "<strong>Self-Care Tip:</strong> " + tip;
}

function toggleDetails() {
    const age = parseInt(document.getElementById("ageInput").value);
    const data = getRangeData(age);
    const details = document.getElementById("details");
    if (details.classList.contains("hidden")) {
        details.innerHTML = `
            <h3>Full Nutrient Breakdown</h3>
            <ul>
                <li><strong>Iron:</strong> ${data.iron}</li>
                <li><strong>Vitamin D:</strong> ${data.vitaminD}</li>
                <li><strong>Zinc:</strong> ${data.zinc}</li>
                <li><strong>Calcium:</strong> ${data.calcium}</li>
                <li><strong>Protein:</strong> ${data.protein}</li>
            </ul>
        `;
        details.classList.remove("hidden");
    } else {
        details.classList.add("hidden");
    }
}
