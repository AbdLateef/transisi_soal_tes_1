
var projectLists = document.getElementById('project-detail-lists')
var statuses = {
    'approved': 'Approved',
    'inprogress': 'In Progress',
    'inreview': 'In Review', 
    'waiting': 'Waiting'
}

document.getElementById('add-project-list').onclick = () => {
    
    var keysStatus = Object.keys(statuses)
    const randomIndexStatus = keysStatus[Math.floor(Math.random() * keysStatus.length)]
    const itemStatus = statuses[randomIndexStatus]

    var div = document.createElement('div')
    div.classList.add('project-detail-list')
    var child = 
    '<div class="checkbox-container">'+
        '<div class="check-circle">'+
            '<input type="checkbox" id="checkbox_5" />'+
            '<label for="checkbox_5"></label>'+
        '</div>'+
    '</div>'+
    '<div class="label">'+
        'New project detail list'+
    '</div>'+
    '<div class="status">'+
        '<span class="'+randomIndexStatus+'">'+
        itemStatus+
        '</span>'+
    '</div>'

    div.innerHTML = child
    projectLists.appendChild(div)
}