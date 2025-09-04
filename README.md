# CineList API - Guia de Testes no Postman

Este guia fornece instruções detalhadas para testar todas as rotas da API CineList usando o Postman.

## Configuração Inicial

1. Abra o Postman
2. Crie uma nova coleção chamada "CineList API"
3. Configure as variáveis de ambiente:
   - URL_BASE: http://localhost:4000
   - TOKEN: (será preenchido após o login)

## Autenticação

### 1. Criar Usuário (Register)
```http
POST {{URL_BASE}}/auth/register
Content-Type: application/json

{
    "name": "Teste Usuario",
    "email": "teste@email.com",
    "password": "123456",
    "bio": "Amante de cinema e sempre em busca de novos filmes!"
}
```
- **Resposta esperada**: Status 201 com dados do usuário criado

### 2. Login
```http
POST {{URL_BASE}}/auth/login
Content-Type: application/json

{
    "email": "teste@email.com",
    "password": "123456"
}
```
- **Resposta esperada**: Status 200 com token JWT
- **Importante**: Copie o token recebido e configure como variável de ambiente TOKEN

## Rotas de Filmes

### 1. Listar Todos os Filmes
```http
GET {{URL_BASE}}/movies
```
- **Resposta esperada**: Status 200 com array de filmes

### 2. Buscar Filme por ID
```http
GET {{URL_BASE}}/movies/1
```
- **Resposta esperada**: Status 200 com dados do filme

### 3. Buscar Filmes por Nome ou Gênero
```http
GET {{URL_BASE}}/movies/search?query=ação
```
- **Resposta esperada**: Status 200 com array de filmes que correspondem à busca

### 4. Criar Novo Filme (Requer Autenticação)
```http
POST {{URL_BASE}}/movies
Authorization: Bearer {{TOKEN}}
Content-Type: application/json

{
    "title": "Inception",
    "description": "Um ladrão que rouba segredos corporativos através da tecnologia de compartilhamento de sonhos.",
    "releaseYear": 2010,
    "director": "Christopher Nolan",
    "genres": "Ação,Ficção Científica,Thriller",
    "rating": 8.8,
    "imageUrl": "https://example.com/inception.jpg",
    "cast": "Leonardo DiCaprio,Joseph Gordon-Levitt,Ellen Page",
    "duration": 148
}
```
- **Resposta esperada**: Status 201 com dados do filme criado

### 5. Atualizar Filme (Requer Autenticação)
```http
PUT {{URL_BASE}}/movies/1
Authorization: Bearer {{TOKEN}}
Content-Type: application/json

{
    "rating": 9.0,
    "description": "Descrição atualizada do filme"
}
```
- **Resposta esperada**: Status 200 com dados atualizados

### 6. Deletar Filme (Requer Autenticação)
```http
DELETE {{URL_BASE}}/movies/1
Authorization: Bearer {{TOKEN}}
```
- **Resposta esperada**: Status 204 sem conteúdo

## Rotas de Favoritos (Todas Requerem Autenticação)

### 1. Adicionar Filme aos Favoritos
```http
POST {{URL_BASE}}/favorites
Authorization: Bearer {{TOKEN}}
Content-Type: application/json

{
    "movieId": 1
}
```
- **Resposta esperada**: Status 201 com dados do favorito criado

### 2. Listar Filmes Favoritos
```http
GET {{URL_BASE}}/favorites
Authorization: Bearer {{TOKEN}}
```
- **Resposta esperada**: Status 200 com array de filmes favoritos

### 3. Verificar se Filme está nos Favoritos
```http
GET {{URL_BASE}}/favorites/check/1
Authorization: Bearer {{TOKEN}}
```
- **Resposta esperada**: Status 200 com { "isFavorite": true/false }

### 4. Remover Filme dos Favoritos
```http
DELETE {{URL_BASE}}/favorites/1
Authorization: Bearer {{TOKEN}}
```
- **Resposta esperada**: Status 204 sem conteúdo

## Dicas de Teste

1. **Autenticação**:
   - Sempre que ver "Requer Autenticação", adicione o header:
     ```
     Authorization: Bearer {{TOKEN}}
     ```
   - O token é obtido após o login

2. **Ordem de Testes**:
   - Primeiro crie um usuário
   - Faça login e guarde o token
   - Crie alguns filmes
   - Teste as operações de favoritos

3. **Tratamento de Erros**:
   - Teste cenários de erro enviando dados inválidos
   - Verifique se as mensagens de erro são claras
   - Teste rotas autenticadas sem token ou com token inválido

4. **Variáveis de Ambiente**:
   - Configure no Postman:
     - URL_BASE: http://localhost:4000
     - TOKEN: (após login)

5. **Status Codes Comuns**:
   - 200: Sucesso
   - 201: Criado
   - 204: Sem conteúdo
   - 400: Erro de requisição
   - 401: Não autorizado
   - 404: Não encontrado
   - 500: Erro interno do servidor

## Exemplos de Respostas

### Resposta de Login Bem-Sucedido
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "id": 1,
        "name": "Teste Usuario",
        "email": "teste@email.com"
    }
}
```

### Resposta de Listagem de Filmes
```json
[
    {
        "id": 1,
        "title": "Inception",
        "description": "Um ladrão que rouba segredos corporativos...",
        "releaseYear": 2010,
        "director": "Christopher Nolan",
        "genres": "Ação,Ficção Científica,Thriller",
        "rating": 8.8,
        "cast": "Leonardo DiCaprio,Joseph Gordon-Levitt,Ellen Page",
        "duration": 148,
        "imageUrl": "https://example.com/inception.jpg"
    }
]
```
