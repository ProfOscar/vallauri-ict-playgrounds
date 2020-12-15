function init() {
    $('#container')
        .append(
            $(document.createElement('label')).prop({
                for: 'authors'
            }).html('Choose your author: ')
        )
        .append(
            $(document.createElement('select')).prop({
                id: 'authors',
                name: 'authors'
            })
        )

    readAuthors();
}

function readAuthors() {
    let finalUrl = "http://localhost:3000/authors/";
    $.ajax({
        url: finalUrl,
        success: function (_authorsData) {
            console.log(_authorsData);
            for (const val of _authorsData) {
                $('#authors').append($(document.createElement('option')).prop({
                    value: val.id,
                    text: val.name
                }))
            }
        }
    });
};

function readPosts(author) {
    let finalUrl = "http://localhost:3000/posts?author=" + author;
    //console.log(finalUrl);
    $.ajax({
        url: finalUrl,
        success: function (_postsData) {
            console.log(_postsData);
        }
    });
};