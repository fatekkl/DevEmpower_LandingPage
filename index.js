

const mockups = document.querySelectorAll(".mockup_cellphone");

mockups.forEach(mockup => {
    mockup.addEventListener("click", (event) => {
        // Remove a classe 'active' de todos os elementos
        mockups.forEach(item => item.classList.remove("active"));
        // Adiciona a classe 'active' ao elemento clicado
        event.target.classList.toggle("active");
    });
});

btn.addEventListener("click", () => {
    const target = document.querySelector(".video_page_container")

    target.scrollIntoView({ behavior: "smooth" })
})
