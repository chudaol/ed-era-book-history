$(document).ready(function() {
    function init () {
        $( "div.popup" ).replaceWith( "<div class='description'><div class='text'>Ще більше відеоматеріалів в <a class='knopka1' href='https://courses.ed-era.com/courses/EdEra/hi102/Hi102/about' target='_blank'>онлайн-курсі</a> від розробників цієї книги</div><div class='btn-knopka'><a class='knopka' href='https://courses.ed-era.com/courses/EdEra/hi102/Hi102/about'   target='_blank'>Перейти на курс</a></div>" );
        $( "div.description" ).after( "<p></p>" );
    }

    init();
    require(["gitbook"], function (gitbook) {
        gitbook.events.bind("page.change", init);
    });
});
