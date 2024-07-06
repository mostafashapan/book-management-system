-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2024 at 11:28 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `filtertask`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `BookId` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Price` decimal(10,2) UNSIGNED NOT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `Stock` int(10) UNSIGNED NOT NULL,
  `CategoryId` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`BookId`, `Name`, `Description`, `Price`, `Author`, `Stock`, `CategoryId`, `createdAt`, `updatedAt`) VALUES
(1, 'Harry Potter and the Philosopher\'s Stone', 'The first book in the Harry Potter series.', '19.99', 'J.K. Rowling', 150, 1, '2024-07-06 07:14:09', '2024-07-06 07:31:55'),
(2, 'To Kill a Mockingbird', 'A ndddddddddddddddddddddffffovel by Harper Lee.', '12.50', 'Harper Lee', 100, 2, '2024-07-06 07:14:09', '2024-07-06 08:49:52'),
(3, '1984', 'A dystopian novel by George Orwell.', '15.99', 'George Orwell', 80, 1, '2024-07-06 07:14:09', '2024-07-06 07:31:55'),
(4, 'The Great Gatsby', 'A novel by F. Scott Fitzgerald.', '10.75', 'F. Scott Fitzgerald', 120, 2, '2024-07-06 07:14:09', '2024-07-06 07:31:55'),
(5, 'Harry Potter and the Philosopher\'s Stone', 'The first book in the Harry Potter series.', '19.99', 'J.K. Rowling', 150, 1, '2024-07-06 07:14:09', '2024-07-06 09:10:48'),
(6, 'The Hobbit', 'A fantasy novel by J.R.R. Tolkien.', '18.25', 'J.R.R. Tolkien', 110, 1, '2024-07-06 07:14:09', '2024-07-06 07:31:55'),
(7, '1984', 'A dystopirrrrrrrrrrrrrrrrrrrrrrrrran novel by George Orwell.', '56615.99', 'George Orwell', 80, 1, '2024-07-06 07:36:32', '2024-07-06 07:46:14'),
(9, 'To Kill a Mockingbird', 'Acccc novel byffffffffff Harper Lee.', '12.50', 'Harper Lee', 100, 2, '2024-07-06 07:14:09', '2024-07-06 08:46:22'),
(13, 'To rrrrrrrKill a Mockingbird', 'A ndddddddddddddddddddddffffovel by Harper Lee.', '12.50', 'Harper Lee', 100, 2, '2024-07-06 09:09:14', '2024-07-06 09:09:14');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CategoryId` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CategoryId`, `Name`, `Description`, `createdAt`, `updatedAt`) VALUES
(1, 'Fiction', 'Books that are based on imaginary events or people.', '2024-07-06 08:33:52', '2024-07-06 08:33:52'),
(2, 'Non-fiction', 'Books that are based on facts and real events.', '2024-07-06 08:33:52', '2024-07-06 08:33:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`BookId`),
  ADD KEY `CategoryId` (`CategoryId`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CategoryId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `BookId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CategoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`CategoryId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
