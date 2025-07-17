const stats = sessionStorage.getItem('stats');
console.log(stats);

if (stats !== '1') {
window.location.href = '/index.html';
    
    
} ;
        
        
         
setInterval(function() {location.reload();}, 120000); 



const logOut = document.querySelector('#logout-btn');

logOut.addEventListener('click', function(){
    sessionStorage.setItem('stats', 0);
    window.location.href = '/index.html';
    
    

})
