-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 05, 2021 at 03:31 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mainnet`
--

-- --------------------------------------------------------

--
-- Table structure for table `v2_loans`
--

CREATE TABLE `v2_loans` (
  `id` int(11) NOT NULL,
  `loanID` int(11) NOT NULL,
  `loan_duration` int(11) NOT NULL,
  `category` varchar(300) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `story` text NOT NULL,
  `title` varchar(300) NOT NULL,
  `cover_image` varchar(200) NOT NULL,
  `other_images` text NOT NULL,
  `due_date` datetime NOT NULL,
  `backed` decimal(65,30) NOT NULL,
  `isLoan` tinyint(1) NOT NULL,
  `repaid` tinyint(1) NOT NULL DEFAULT 0,
  `creator` varchar(100) NOT NULL,
  `transaction_hash` varchar(300) NOT NULL,
  `is_approved` tinyint(1) NOT NULL,
  `loan_amount` decimal(65,30) NOT NULL,
  `inventry_fee` decimal(65,30) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `isConfirmed` tinyint(1) NOT NULL,
  `is_display` tinyint(1) NOT NULL DEFAULT 0,
  `votingThreshold` decimal(65,30) NOT NULL DEFAULT 0.000000000000000000000000000000,
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `v2_loans`
--
ALTER TABLE `v2_loans`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `v2_loans`
--
ALTER TABLE `v2_loans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
