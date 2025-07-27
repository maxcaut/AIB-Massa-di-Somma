const stats = sessionStorage.getItem('stats');
const username = sessionStorage.getItem('username');


if (stats !== '1') {
window.location.href = '/index.html';
    
    
} ;
        
        
         
setInterval(function() {location.reload();}, 120000); 



const logOut = document.querySelector('#logout-btn');

logOut.addEventListener('click', function(){
    sessionStorage.setItem('stats', 0);
    window.location.href = '/index.html';
    
    

})
