const btn=document.getElementById('menubtn')
const menu=document.getElementById('mobile_menu')
btn.addEventListener('click',function () {
    menu.classList.toggle('hidden')
})