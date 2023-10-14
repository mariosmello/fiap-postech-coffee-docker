CREATE
DATABASE IF NOT EXISTS `default` COLLATE 'utf8_general_ci';
GRANT ALL
ON `default`.* TO 'default'@'%';

CREATE
DATABASE IF NOT EXISTS `test` COLLATE 'utf8_general_ci';
GRANT ALL
ON `test`.* TO 'default'@'%';
