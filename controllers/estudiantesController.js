const estudiantes = (req, res) => {
    res.render("sistema/estudiantes/main", {
        titulo: "Estudiantes",
        nombre: "AcxyzDev",
    });
};

export { estudiantes };
