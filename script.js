const btn = document.getElementById('themeBtn');
btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
<script>
document.body.style.overflow = "hidden";
setTimeout(()=>{
  document.body.style.overflow = "auto";
},3200);
</script>
