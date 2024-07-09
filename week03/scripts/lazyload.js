function info_footer() {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    const options2 = { weekday: "short", year: "numeric", month: "short", day: "numeric" };

    const date = new Date();

    let copyrightYear = date.getFullYear();
    document.getElementById("year").innerHTML = `&copy; ${copyrightYear}`;

    let lastModified = new Date(document.lastModified).toLocaleDateString("en-US", options);
    document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;
}
info_footer();