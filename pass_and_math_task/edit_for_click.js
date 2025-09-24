function find_edit(){
    const change_name_node  = document.getElementById('name')
    console.log(change_name_node.innerText)
    change_name_node.innerHTML="<b>Elena</b>"

    const change_surname_node  = document.getElementById('surname')
    console.log(change_surname_node.innerText)
    change_surname_node.innerHTML="<b>Mikhailova</b>"

    const change_date_node  = document.getElementById('date')
    console.log(change_date_node.innerText)
    change_date_node.innerHTML="<b>05.06.2004</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)
