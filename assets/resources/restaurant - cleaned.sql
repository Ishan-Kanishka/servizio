-- phpMyAdmin SQL Dump
-- Database: `restaurant`
-- Server version: 8.0.31
-- Author: Thamidu Nadun
-- Generated: Oct 12, 2025

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS = 0;
START TRANSACTION;
SET time_zone = "+00:00";

-- --------------------------------------------------------
-- Table structure for table `category`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `cat_id` bigint NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`cat_id`),
  CONSTRAINT uniqueCatName UNIQUE (`cat_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `category` (`cat_id`, `cat_name`) VALUES
(1, 'Lunch'),
(2, 'Dinner'),
(3, 'Drinks'),
(4, 'Dessert'),
(5, 'Breakfast');

-- --------------------------------------------------------
-- Table structure for table `event`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `event`;
CREATE TABLE IF NOT EXISTS `event` (
  `event_date` date DEFAULT NULL,
  `num_of_people` int DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `updated_at` date DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `event_id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `event` (`event_date`, `num_of_people`, `status`, `updated_at`, `customer_id`, `event_id`, `description`) VALUES
('2025-10-16', 50, b'0', '2025-10-01', 1, 1, 'Company Annual Dinner'),
('2025-12-25', 20, b'0', '2025-10-01', 1, 2, 'Christmas Party'),
('2025-11-28', 15, b'0', '2025-10-01', 1, 3, 'Thanksgiving Dinner'),
('2025-10-20', 10, b'0', '2025-10-01', 1, 4, 'Birthday Celebration'),
('2025-10-30', 30, b'0', '2025-10-01', 1, 5, 'Halloween Party');

-- --------------------------------------------------------
-- Table structure for table `ingredients`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `ingredients`;
CREATE TABLE IF NOT EXISTS `ingredients` (
  `ing_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ing_id`),
  CONSTRAINT uniqueIngName UNIQUE (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `ingredients` (`ing_id`, `name`) VALUES
(1, 'Butter'),
(2, 'Salt'),
(3, 'Pepper'),
(4, 'Chicken'),
(5, 'Beef'),
(6, 'Lettuce'),
(7, 'Tomato'),
(8, 'Cheese'),
(9, 'Onion'),
(10, 'Garlic'),
(11, 'Basil'),
(12, 'Oregano'),
(13, 'Mushroom'),
(14, 'Rice'),
(15, 'Noodles');

-- --------------------------------------------------------
-- Table structure for table `menu`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `menu`;
CREATE TABLE IF NOT EXISTS `menu` (
  `is_available` bit(1) NOT NULL,
  `price` int DEFAULT NULL,
  `cat_id` bigint DEFAULT NULL,
  `menu_id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`menu_id`),
  KEY `FK6kaa70i7f33mpk2q0yeflgicr` (`cat_id`),
  CONSTRAINT uniqueMenuName UNIQUE (`name`, `cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `menu` (`is_available`, `price`, `cat_id`, `menu_id`, `description`, `img_url`, `name`) VALUES
(b'1', 1200, 1, 1, 'Delicious beef burger', 'https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg', 'Burger'),
(b'1', 1500, 1, 2, 'Cheesy pepperoni pizza', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgh6Xx8CBnZM8NPOmIEOwqV_KK6PnE1pluA&s', 'Pizza'),
(b'1', 1300, 1, 3, 'Creamy Alfredo pasta', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGj5fp8DwKOgB02Y1w-suEvsEg_E0eYYdO_A&s', 'Pasta'),
(b'1', 800, 1, 4, 'Fresh garden salad', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCj3FBQYgKwjQp9bjsACmzEIGzi2ka5GU_g&s', 'Salad'),
(b'1', 2000, 1, 5, 'Assorted sushi platter', 'https://t3.ftcdn.net/jpg/16/81/34/12/360_F_1681341228_lyn7H9OfCGT7YdMN3pVYzdOqWoi4rqsQ.jpg', 'Sushi'),
(b'1', 2500, 1, 6, 'Grilled ribeye steak', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEnPtC8wtemA3xWJqp84PkzjL8pAy9Mem4A&s', 'Steak'),
(b'1', 1100, 1, 7, 'Spicy chicken tacos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwC1NZB5dFmhv6q9Ru58wTyQVXm_MhrhL0w&s', 'Tacos'),
(b'1', 900, 1, 8, 'Classic cheeseburger', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4gk2yX1YHjv5Yk1bX3KXJt5eXo0FJz4z7A&s', 'Cheeseburger');

-- --------------------------------------------------------
-- Table structure for table `menu_ingredients`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `menu_ingredients`;
CREATE TABLE IF NOT EXISTS `menu_ingredients` (
  `quantity` int DEFAULT NULL,
  `ing_id` bigint NOT NULL,
  `menu_id` bigint NOT NULL,
  `unit` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ing_id`,`menu_id`),
  KEY `FK2417wohcu0wg90vm00ipjhm1v` (`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------
-- Table structure for table `orders`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_date` date DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `total_price` int DEFAULT NULL,
  `customer_id` bigint DEFAULT NULL,
  `order_id` bigint NOT NULL AUTO_INCREMENT,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FK14n2jkmoyhpimhracvcdy7sst` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `orders` (`order_date`, `status`, `total_price`, `customer_id`, `order_id`, `note`) VALUES
('2025-10-01', b'1', 3900, 1, 1, 'Please serve hot.'),
('2025-10-02', b'0', 2500, 1, 2, 'No onions, please.'),
('2025-10-03', b'1', 1500, 1, 3, 'Extra cheese.'),
('2025-10-04', b'0', 2000, 1, 4, 'Gluten-free crust.'),
('2025-10-05', b'1', 3000, 1, 5, 'Well-done steak.');

-- --------------------------------------------------------
-- Table structure for table `order_item`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `order_item`;
CREATE TABLE IF NOT EXISTS `order_item` (
  `price` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `menu_id` bigint NOT NULL,
  `order_id` bigint NOT NULL,
  PRIMARY KEY (`menu_id`,`order_id`),
  KEY `FKt4dc2r9nbvbujrljv3e23iibt` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `order_item` (`price`, `quantity`, `menu_id`, `order_id`) VALUES
(2400, 2, 1, 1),
(1500, 1, 2, 1),
(1300, 1, 3, 2),
(800, 1, 4, 2),
(2000, 1, 5, 3),
(2500, 1, 6, 4),
(1100, 2, 7, 5);

-- --------------------------------------------------------
-- Table structure for table `promotion`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `discount` double DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `promotion_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`promotion_id`),
  CONSTRAINT uniquePromotionName UNIQUE (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `promotion` (`discount`, `end_date`, `start_date`, `promotion_id`, `name`) VALUES
(0.45, '2024-04-03', '2024-04-01', 1, '45% Off New Year Sale'),
(0.30, '2024-12-31', '2024-11-25', 2, 'Black Friday Special'),
(0.20, '2024-02-15', '2024-02-10', 3, 'Valentine\'s Day Discount'),
(0.25, '2024-03-17', '2024-03-10', 4, 'St. Patrick\'s Day Offer'),
(0.15, '2024-07-04', '2024-07-01', 5, 'Independence Day Sale'),
(0.10, '2024-10-31', '2024-10-25', 6, 'Halloween Treat'),
(0.50, '2024-12-26', '2024-12-24', 7, 'Christmas Special');

-- --------------------------------------------------------
-- Table structure for table `restaurant_table`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `restaurant_table`;
CREATE TABLE IF NOT EXISTS `restaurant_table` (
  `capacity` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `is_available` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `restaurant_table` (`capacity`, `id`, `is_available`) VALUES
(4, 1, b'1'),
(4, 2, b'0'),
(4, 3, b'0'),
(4, 4, b'0'),
(10, 5, b'0'),
(30, 6, b'0'),
(3, 7, b'0');

-- --------------------------------------------------------
-- Table structure for table `role`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) NOT NULL,
  PRIMARY KEY (`role_id`),
  CONSTRAINT uniqueRoleName UNIQUE (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'ADMIN'),
(4, 'CASHIER'),
(3, 'CHEF'),
(2, 'CUSTOMER'),
(6, 'EVENT_COORDINATOR'),
(7, 'GUEST'),
(5, 'MANAGER');

-- --------------------------------------------------------
-- Table structure for table `user`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `date_of_birth` date DEFAULT NULL,
  `hired_date` date DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `salary` bigint DEFAULT NULL,
  `dtype` varchar(31) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `zip_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`),
  CONSTRAINT uniqueUserEmail UNIQUE (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user` (`date_of_birth`, `hired_date`, `role_id`, `id`, `salary`, `dtype`, `address`, `city`, `country`, `email`, `name`, `password`, `zip_code`) VALUES
('1990-05-25', NULL, 2, 1, NULL, 'Customer', '123 Main St', 'New York', 'USA', 'john.doe@example.com', 'John Doe', 'mypassword', '12345'),
('2012-05-25', '2020-01-01', 4, 2, 50000, 'Employee', NULL, NULL, NULL, 'kev.in@example.com', 'Kevin', 'mypassword', NULL),
('1985-08-15', '2015-06-01', 5, 3, 75000, 'Employee', NULL, NULL, NULL, 'e@g.com', 'Emma Green', 'mypassword', NULL),
('1992-11-30', '2018-09-15', 3, 4, 60000, 'Employee', NULL, NULL, NULL, 'example@example.com', 'Alice Smith', 'mypassword', NULL),
('1988-03-22', '2016-04-10', 6, 5, 65000, 'Employee', NULL, NULL, NULL, 'info@example.com', 'Bob Johnson', 'mypassword', NULL),
('1995-07-19', NULL, 2, 6, NULL, 'Customer', '456 Oak St', 'Los Angeles', 'USA', 'cont@example.com', 'Charlie Brown', 'mypassword', '67890'),
('1998-12-05', NULL, 7, 7, NULL, 'Guest', '789 Pine St', 'Chicago', 'USA', 'hj@example.com', 'Diana Prince', 'mypassword', '11223');

-- --------------------------------------------------------
-- Table structure for table `user_phone_numbers`
-- --------------------------------------------------------

DROP TABLE IF EXISTS `user_phone_numbers`;
CREATE TABLE IF NOT EXISTS `user_phone_numbers` (
  `user_id` bigint NOT NULL,
  `phone_numbers` varchar(255) DEFAULT NULL,
  KEY `FKrc9w7h2r983rbf4c9h8kinnrk` (`user_id`),
  CONSTRAINT uniqueUserPhone UNIQUE (`user_id`, `phone_numbers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `user_phone_numbers` (`user_id`, `phone_numbers`) VALUES
(1, '123-456-7890'),
(1, '098-765-4321'),
(2, '123-456-7890'),
(2, '098-765-4321'),
(3, '555-555-5555'),
(4, '444-444-4444'),
(5, '333-333-3333'),
(6, '222-222-2222'),
(7, '111-111-1111');

-- --------------------------------------------------------
-- Foreign Key Constraints
-- --------------------------------------------------------

ALTER TABLE `event`
  ADD CONSTRAINT `FKn28v3d7p3dbcy5nrchewlb6s1` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`);

ALTER TABLE `menu`
  ADD CONSTRAINT `FK6kaa70i7f33mpk2q0yeflgicr` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`);

ALTER TABLE `menu_ingredients`
  ADD CONSTRAINT `FK2417wohcu0wg90vm00ipjhm1v` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`),
  ADD CONSTRAINT `FKj1u1uh34pm7r7fttgjp4jlsyo` FOREIGN KEY (`ing_id`) REFERENCES `ingredients` (`ing_id`);

ALTER TABLE `orders`
  ADD CONSTRAINT `FK14n2jkmoyhpimhracvcdy7sst` FOREIGN KEY (`customer_id`) REFERENCES `user` (`id`);

ALTER TABLE `order_item`
  ADD CONSTRAINT `FKt4dc2r9nbvbujrljv3e23iibt` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `FKb7ohkjol4fszgjd3jmh8w63cl` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`menu_id`);

ALTER TABLE `user`
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

ALTER TABLE `user_phone_numbers`
  ADD CONSTRAINT `FKrc9w7h2r983rbf4c9h8kinnrk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

COMMIT;
SET FOREIGN_KEY_CHECKS = 1;
