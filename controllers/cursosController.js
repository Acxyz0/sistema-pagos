const cursos = (req, res) => {
    res.render("sistema/mantenimientos/cursos/main", {
        titulo: "Cursos",
        nombre: "AcxyzDev",
    });
};  

export { cursos };
