window.onload = function () {
    const urlID = new URLSearchParams(window.location.search)
    const keyword = urlID.get('keyword')    
    getProductSearch(keyword)
}

