# CadastroSenha Pro

## Tela de Cadastro e Alteração de Senha Avançada

CadastroSenha Pro é uma aplicação web moderna e responsiva para gerenciamento de cadastro e senhas de usuários. Desenvolvida com HTML, CSS e JavaScript, esta aplicação oferece uma interface intuitiva e recursos avançados de segurança.

### Características

- Formulário de cadastro completo
- Validação de força de senha em tempo real
- Funcionalidade de alteração de senha
- Design responsivo para desktop e mobile
- Interface em português

### Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite (para build e desenvolvimento)
- zxcvbn (para análise de força de senha)

## Componentes Principais

### 1. Formulário de Cadastro
- Implementado no arquivo `index.html`
- Campos: nome, email, senha, confirmação de senha
- Validação de entrada em tempo real

### 2. Modal de Alteração de Senha
- Implementado no arquivo `index.html`
- Acionado via JavaScript em `main.js`
- Campos: senha atual, nova senha, confirmação da nova senha

### 3. Indicador de Força de Senha
- Implementado em `main.js`
- Utiliza a biblioteca zxcvbn para análise
- Atualização visual em tempo real

## Fluxo de Dados

1. O usuário insere dados no formulário de cadastro ou no modal de alteração de senha.
2. Os eventos de input são capturados pelo JavaScript (`main.js`).
3. A senha é analisada em tempo real usando zxcvbn.
4. O indicador visual de força da senha é atualizado.
5. Ao submeter o formulário, os dados são validados.
6. Feedback é fornecido ao usuário (sucesso ou erro).

![Captura de tela 2025-02-02 181807](https://github.com/user-attachments/assets/d8d696a6-e92a-464d-9315-41c5723f1ba1)
![imagem_2025-02-02_183009140](https://github.com/user-attachments/assets/21c198b6-1cf2-4a66-a74c-a63a1112972d)
