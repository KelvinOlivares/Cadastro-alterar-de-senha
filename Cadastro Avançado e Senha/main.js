import zxcvbn from 'zxcvbn';

const formCadastro = document.getElementById('formCadastro');
const formAlterarSenha = document.getElementById('formAlterarSenha');
const btnAlterarSenha = document.getElementById('btnAlterarSenha');
const modal = document.getElementById('modalAlterarSenha');
const fecharModal = document.querySelector('.fechar');
const mensagem = document.getElementById('mensagem');

function validarSenha(senha) {
  const resultado = zxcvbn(senha);
  return resultado.score;
}

function atualizarForcaSenha(senha, elementoForca) {
  const forca = validarSenha(senha);
  const width = (forca / 4) * 100;
  elementoForca.style.width = `${width}%`;
  elementoForca.style.backgroundColor = `hsl(${forca * 30}, 100%, 50%)`;
}

document.getElementById('senha').addEventListener('input', (e) => {
  atualizarForcaSenha(e.target.value, document.getElementById('forcaSenha'));
});

document.getElementById('novaSenha').addEventListener('input', (e) => {
  atualizarForcaSenha(e.target.value, document.getElementById('forcaNovaSenha'));
});

formCadastro.addEventListener('submit', (e) => {
  e.preventDefault();
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha) {
    mensagem.textContent = 'As senhas não coincidem.';
    mensagem.style.color = 'red';
    return;
  }

  if (validarSenha(senha) < 3) {
    mensagem.textContent = 'A senha é muito fraca. Por favor, escolha uma senha mais forte.';
    mensagem.style.color = 'red';
    return;
  }

  mensagem.textContent = 'Cadastro realizado com sucesso!';
  mensagem.style.color = 'green';
  formCadastro.reset();
});

btnAlterarSenha.addEventListener('click', () => {
  modal.style.display = 'block';
});

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

formAlterarSenha.addEventListener('submit', (e) => {
  e.preventDefault();
  const senhaAtual = document.getElementById('senhaAtual').value;
  const novaSenha = document.getElementById('novaSenha').value;
  const confirmarNovaSenha = document.getElementById('confirmarNovaSenha').value;

  if (novaSenha !== confirmarNovaSenha) {
    alert('As senhas não coincidem.');
    return;
  }

  if (validarSenha(novaSenha) < 3) {
    alert('A nova senha é muito fraca. Por favor, escolha uma senha mais forte.');
    return;
  }

  // Aqui você implementaria a lógica para verificar a senha atual e atualizar a senha no backend
  alert('Senha alterada com sucesso!');
  modal.style.display = 'none';
  formAlterarSenha.reset();
});
