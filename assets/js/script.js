function post()
{
    var ta = document.getElementById('textarea1');
    var post = ta.value;
    ta.value = "";

    // This will eventually send the data (using PHP) to a database which
    // will then be retrieved and posted in reverse chronological order.

    alert(post);
}