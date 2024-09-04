
# Documentação da API

## Configuração Inicial

1. **Suba os contêineres Docker:**

   ```bash
   docker-compose up -d
   ```

2. **Inicie a aplicação:**

   Execute a classe `VulnerabilidadesWebApplication.java` para iniciar a aplicação.

---

## Rotas da API

### 1. Criar Usuário - `/user` (POST)

**Descrição:** Cria um novo usuário no sistema.

**Request:**

```json
{
	"username": "pedro",
	"password": "12345h",
	"job": "data scientist",
	"age": "17",
	"agencia": "1234",
	"numConta": "12318",
	"digito": "1",
	"secret": "123456",
	"saldo": "999"
}
```

**Response:**

```json
{
	"username": "pedro",
	"password": "$2a$10$aPIi6eihiqPOqsKy3AlB3e1FabzDcj7xftewOVfNBT.8.C7qnsugy",
	"job": "data scientist",
	"age": 17,
	"agencia": 1234,
	"numConta": 12318,
	"digito": 1,
	"secret": "123456",
	"saldo": 999.0
}
```

**Descrição:** Retorna as informações do usuário criado.

---

### 2. Autenticar Usuário - `/user/auth` (POST)

**Descrição:** Autentica o usuário e retorna um token de acesso.

**Request:**

```json
{
	"username": "pedro",
	"password": "12345h"
}
```

**Response:**

```json
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3ZWItdnVsbmVyYWJpbGl0aWVzIiwic3ViIjoicGVkcm8iLCJyb2xlcyI6WyJVU0VSIiwiQURNSU4iXSwiZXhwIjoxNzI1MzE4MTg4fQ.cu7tRM4Wirc3zNEtbzIBp6LbbLmDPGF96OskLA6nXzs",
	"expires_in": 1725318188046
}
```

---

### 3. Enviar Mensagem - `/user/message` (POST)

**Descrição:** Envia uma mensagem associada ao usuário autenticado.

**Request:**

```json
{
	"message": "uma mensagem para todos no banco de dados aqui"
}
```

**Response:**

```json
{
	"message": "uma mensagem para todos no banco de dados aqui",
	"username": "pedro"
}
```

---

### 4. Obter Informações do Usuário - `/user/` (GET)

**Descrição:** Retorna as informações do usuário autenticado.

**Request:**

- **Token:** Inclua o token de acesso no cabeçalho da requisição:

```json
{
	"Authorization": "Bearer <seu_token_aqui>"
}
```

**Response:**

```json
{
	"username": "pedro",
	"age": 17,
	"job": "data scientist",
	"createdAt": "2024-09-01"
}
```

---

### 5. Obter Informações Bancárias - `/user/bank/` (GET)

**Descrição:** Retorna as informações bancárias do usuário autenticado.

**Request:**

- **Token:** Inclua o token de acesso no cabeçalho da requisição:

```json
{
	"Authorization": "Bearer <seu_token_aqui>"
}
```

**Response:**

```json
{
	"agencia": 1234,
	"numConta": 12318,
	"saldo": 999.0
}
```

---

### 6. Obter Todos os Usuários (Modo Fácil) - `/admin/all/easy` (GET)

**Descrição:** Retorna os dados de todos os usuários. O usuário deve estar autenticado.

**Request:**

- **Token:** Inclua o token de acesso no cabeçalho da requisição:

```json
{
	"Authorization": "Bearer <seu_token_aqui>"
}
```

**Response:**

```json
[
	{
		"username": "pedro",
		"age": 17,
		"job": "data scientist",
		"createdAt": "2024-09-01"
	}
]
```

---

### 7. Obter Todos os Usuários (Modo Difícil) - `/admin/all/hard` (GET)

**Descrição:** Retorna os dados de todos os usuários. O usuário deve estar autenticado e ser um administrador.

**Request:**

- **Token:** Inclua o token de acesso no cabeçalho da requisição:

```json
{
	"Authorization": "Bearer <seu_token_aqui>"
}
```

**Response:**

```json
[
	{
		"username": "pedro",
		"age": 17,
		"job": "data scientist",
		"createdAt": "2024-09-01"
	}
]
```

### 8. Obter Informações Bancárias Vulnerável - `/user/bank/vulnerable` (POST)

**Descrição**: Esta rota foi criada para fins educacionais e de teste. Ela permite que você obtenha informações bancárias de um usuário com base nos parâmetros branchNumber (agência) e accountNumber (número da conta) fornecidos na requisição. Atenção: esta rota é vulnerável a **SQL Injection**, o que significa que um usuário malicioso pode manipular a consulta SQL executada pelo servidor para acessar dados não autorizados

**Request:**

```json
{
    "branchNumber": "string",
    "accountNumber": "string"
}
```

* **branchNumber**: Número da agência bancária associada à conta do usuário.
* **accountNumber**: Número da conta bancária do usuário

**Response:**

```json
[
    {
        "branchNumber": "1234",
        "accountNumber": "12318",
        "balance": 999.0,
        "secret": "123456",
        "digit": 1
    }
]
```