-- ========================================================================
-- TABELA COM ID AUTOINCREMENTÁVEL
-- ========================================================================

-- 1. Criação da tabela
CREATE TABLE inventario_games (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- O sistema gera o ID sequencial automaticamente (1, 2, 3...)
    nome VARCHAR(60),
    categoria VARCHAR(40),
    quantidade_estoque INT,
    preco DECIMAL(10, 2),
    marca VARCHAR(30)
);

-- 2. Inserção de dados (repare que a coluna 'id' já não entra na lista)
INSERT INTO inventario_games (nome, categoria, quantidade_estoque, preco, marca) VALUES
('Controle Sem Fio Xbox', 'Acessórios', 15, 420.00, 'Microsoft'),
('Headset Gamer Pro', 'Áudio', 8, 250.00, 'Redragon'),
('Teclado Mecânico RGB', 'Periféricos', 20, 310.00, 'HyperX'),
('Mouse Gamer 16000 DPI', 'Periféricos', 5, 180.00, 'Logitech'),
('Monitor 27 Polegadas 144Hz', 'Monitores', 3, 1350.00, 'LG'),
('SSD NVMe 1TB', 'Hardware', 12, 490.00, 'Kingston');

-- 3. Visualizar todos os dados (os IDs 1 a 6 surgirão preenchidos automaticamente)
SELECT * FROM inventario_games;

-- 4. Consulta 1: Stock crítico (< 10 unidades)
SELECT id, nome, categoria, quantidade_estoque, preco 
FROM inventario_games 
WHERE quantidade_estoque < 10;

-- 5. Consulta 2: Periféricos com valor acima de 200.00
SELECT id, nome, marca, preco 
FROM inventario_games 
WHERE categoria = 'Periféricos' AND preco > 200.00;