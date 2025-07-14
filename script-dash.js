const stats = sessionStorage.getItem('stats');
console.log(stats);

if (stats !== '1') {
window.location.href = '/index.html';
    
    
} ;
        
        
         
setInterval(function() {location.reload();}, 10000); 