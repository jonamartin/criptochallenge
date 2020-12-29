USE `cripto`;

CREATE TABLE `currencies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(25) NOT NULL,
  `symbol` varchar(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- cripto.rates definition

CREATE TABLE `rates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_currency` int NOT NULL,
  `value` decimal(15,6) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rates_fk` (`id_currency`),
  CONSTRAINT `rates_fk` FOREIGN KEY (`id_currency`) REFERENCES `currencies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- filling with some data
INSERT INTO cripto.currencies (id,description,symbol) VALUES
	 (1,'bitcoin','BTC'),
	 (2,'ethereum','ETH'),
	 (3,'cardano','ADA');
INSERT INTO cripto.rates (id_currency,value,created_at) VALUES
	 (1,11934.231445,'2020-12-28 03:28:00'),
	 (2,11934.252624,'2020-12-28 03:33:01'),
	 (3,11934.806593,'2020-12-28 03:34:29'),
	 (1,11935.999999,'2020-12-28 03:35:01');