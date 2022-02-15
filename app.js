document.getElementById('bt').addEventListener('click', function () {
    var b = document.getElementById('in');
    if (b.value == '') {
        alert('Enter something items');
    }
    else {
        var a = document.createElement('tr');
        a.classList.add('tdd')
        a.innerHTML = `<td>${b.value}</td>
                <td>In Progress</td>
                <td><button class='text-white fw-bold rounded-3 btt'><i class="fas fa-check"></i></button> <button  class='text-white fw-bold rounded-3 btt2'><i class="fas fa-trash-alt"></i></button></td>`;
        var c = document.getElementById('tb');
        c.appendChild(a);
        b.value = '';
    }


    var x = document.getElementsByClassName('btt');
    for (const y of x) {
        y.addEventListener('click', function () {
            y.parentNode.parentNode.childNodes[2].innerText = 'Completed';
            y.parentNode.parentNode.childNodes[2].style.color = 'green';
            y.parentNode.parentNode.childNodes[0].style.textDecoration = 'line-through';


        });
    }

    var x2 = document.getElementsByClassName('btt2');
    for (const y2 of x2) {
        y2.addEventListener('click', function () {
            y2.parentNode.parentNode.style.display = 'none';
            // y2.parentNode.parentNode.innerText='';



        });
    }
});
document.getElementById('cl').addEventListener('click', function () {
    document.getElementById('tb').innerText = '';
})