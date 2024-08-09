window.addEventListener('scroll', () => {
   let header = document.getElementById('header');
   let spanHeader = document.querySelector('.span-header');
   let links = header.querySelectorAll('a'); // Dapatkan semua link di dalam header
   
   if (window.scrollY > 100) {
       header.classList.add('sticky');
       spanHeader.style.color = '#D0E7D2'; // Warna baru saat scroll
       links.forEach(link => {
           link.style.color = '#D0E7D2'; // Ubah warna link saat scroll
       });
   } else {
       header.classList.remove('sticky');
       spanHeader.style.color = 'white'; // Warna default
       links.forEach(link => {
           link.style.color = 'white'; // Warna default link
       });
   }
});