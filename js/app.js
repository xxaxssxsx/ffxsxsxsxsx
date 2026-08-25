function showAuth(mode){document.getElementById("authModal").classList.add("show");document.getElementById("authLogin").classList.toggle("hidden",mode!=="login");document.getElementById("authCadastro").classList.toggle("hidden",mode!=="cadastro");document.getElementById("authMsg").textContent="";}
function closeAuth(){document.getElementById("authModal").classList.remove("show")}
function msg(t){document.getElementById("authMsg").textContent=t}
async function api(path,opts={}){const r=await fetch(API_BASE+path,opts);let d={};try{d=await r.json()}catch{};if(!r.ok)throw new Error(d.erro||"Erro");return d}
async function login(){try{const d=await api("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:loginEmail.value,senha:loginSenha.value})});localStorage.setItem("sensiFF_token",d.token);location.href="painel.html"}catch(e){msg(e.message)}}
async function cadastro(){try{const d=await api("/api/auth/cadastro",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nome:cadNome.value,email:cadEmail.value,telefone:cadTel.value,senha:cadSenha.value})});localStorage.setItem("sensiFF_token",d.token);location.href="painel.html"}catch(e){msg(e.message)}}
function toggleMenu(){document.querySelector("nav").classList.toggle("open")}
