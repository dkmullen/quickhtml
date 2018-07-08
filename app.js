function toggleDisplay() {
    let vis = document.getElementById('main-nav')
    vis.style.display === '' || vis.style.display === 'none' 
        ? vis.style.display = 'block' 
        : vis.style.display = 'none';  
    
}