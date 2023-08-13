$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault()

        const inputTask = $('#input_task').val()
        const newList = $('<li></li>')
        $(`<p>${inputTask}</p>`).appendTo(newList)
        $(newList).appendTo('ul')
        $(newList).fadeIn(500)
        $('#input_task').val('')
    })

    $('ul').on('click','li', function(){
        $(this).css('text-decoration', 'line-through');
    })

    $('#reset_ul').click('reset', function() {
        $('ul').empty()
    })
})