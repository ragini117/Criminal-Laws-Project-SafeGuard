
function showDetails(category) {
    let modal = document.getElementById(`modal-${category}`);
    if (modal) {
        modal.style.display = "block";
    }
}

function showContent(index, modalId) {
    let modal = document.getElementById(modalId);
    if (!modal) return;

    let tabs = modal.querySelectorAll(".tab");
    let contents = modal.querySelectorAll(".content");

    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    tabs[index].classList.add("active");
    contents[index].classList.add("active");
}

function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

function filterCategories() {
    let input = document.getElementById('search').value.toLowerCase();
    let categories = document.querySelectorAll('.category');
    categories.forEach(cat => {
        if (cat.innerText.toLowerCase().includes(input)) {
            cat.style.display = "flex";
        } else {
            cat.style.display = "none";
        }
    });
}