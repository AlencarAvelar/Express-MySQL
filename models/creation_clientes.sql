CREATE TABLE `express mysql`.`clientes` (
    `id` INT(10) NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(255) NOT NULL,
    `Sobrenome` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Idade` INT(200) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;