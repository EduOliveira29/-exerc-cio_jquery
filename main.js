$(document).ready(function() {

    $('form').on ('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        $('#lista-tarefas').append('<li><span>' + novaTarefa + '</span></li>');
    }) 
})

$('#lista-tarefas').on('click', 'li', function(e) {
    if (!$(e.target).is('button')) {
        $(this).find('span').toggleClass('line-through');
    }
})

