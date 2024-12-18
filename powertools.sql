-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2022 at 01:34 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `powertools`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminlogin`
--

CREATE TABLE `adminlogin` (
  `id` int(11) NOT NULL,
  `adminid` varchar(28) NOT NULL,
  `PASSWORD` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminlogin`
--

INSERT INTO `adminlogin` (`id`, `adminid`, `PASSWORD`) VALUES
(102, 'sanju@gmail.com', '4444');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `cateid` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`cateid`, `title`, `description`) VALUES
(1, 'Drill machines', 'woodworking,metalworking,machine tool'),
(2, 'Sawss', 'U-shaped frame and blades'),
(3, 'Nail guns', 'compressed air or gas to shoot a nail'),
(4, 'dfsa', 'sd');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `name` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `phone` int(10) DEFAULT NULL,
  `message` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`name`, `email`, `phone`, `message`) VALUES
('damini', 'da@gmail', 2147483647, 'hello'),
(NULL, NULL, NULL, NULL),
('meghu', 'mg@gmail.com', 635723468, 'hello'),
('harsha', 'hr@gmail.com', 2147483647, 'huighihk'),
('harsha', 'hr@gmail.com', 2147483647, 'huighihk'),
('anuu', 'an@gmail.com', 2147483647, 'yuikyuitighjghj'),
('kdsfkjfs', 'afdsa@gmail.com', 2147483647, 'hy'),
('kdsfkjfs', 'afdsa@gmail.com', 2147483647, 'hy'),
('kdsfkjfs', 'afdsa@gmail.com', 2147483647, 'hy'),
('kdsfkjfs', 'afdsa@gmail.com', 2147483647, 'hy'),
('muskan', 'mu@gmail.com', 2147483647, 'gm..'),
('namu', 'nu@gmail.com', 2147483647, 'bips.........................');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerid`, `name`, `phone`, `email`, `password`) VALUES
(101, 'megha', '6261988031', 'megha@gmail.com', '12345678'),
(102, 'sanju', '6261980831', 'sanju@gmail.com', '12567478'),
(103, 'mansi', '9827344761', 'mansi@gmail.com', '123789'),
(104, 'namrata', '9827344716', 'namrata@gmail.com', '123798'),
(105, 'vikas', '1255854672', 'vis@ff', '123'),
(106, 'nikku', '5437589437', 'nikk@gmail', '8783\n'),
(107, 'anuu', '4634364783', 'an@gmail.com', '345'),
(108, 'radhika', '8901234567', 'tyu@gmai.com', '345'),
(109, 'harsha', '3075309475', 'har@gmail.com', '82368'),
(110, 'nandini', '4683482643', 'ny@gmail.com', '0897'),
(160, 'rtgr', '8574965241', 'affdsfsa@gmail.com', '123'),
(161, 'kdsfkjfs', '5698745263', 'afdsa@gmail.com', ''),
(162, 'hjdsafds', '5685967485', 'hrsa@gmail.com', '123456'),
(165, 'palak', '1234567892', 'pl@gmail.com', '456'),
(168, 'damini', '123456789', 'pdt@gmail.com', '456');

-- --------------------------------------------------------

--
-- Table structure for table `customerorder`
--

CREATE TABLE `customerorder` (
  `orderid` int(11) NOT NULL,
  `orderdate` date NOT NULL,
  `amount` float NOT NULL,
  `billnumber` varchar(20) NOT NULL,
  `paymentmode` varchar(20) NOT NULL,
  `referencenumber` varchar(50) DEFAULT NULL,
  `customer` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orderitem`
--

CREATE TABLE `orderitem` (
  `orderitemid` int(11) NOT NULL,
  `price` float NOT NULL,
  `product` int(11) DEFAULT NULL,
  `customerorder` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `productid` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `images` varchar(50) NOT NULL,
  `price` float NOT NULL,
  `category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`productid`, `title`, `images`, `price`, `category`) VALUES
(102, 'abcd', 'upload/image/393.jpg', 12345, 3),
(103, 'qaws', 'upload/image/746.jpg', 2341, 2),
(104, 'abcd', 'upload/image/364.jpg', 12345, 1),
(105, 'gvfdgbfb', 'upload/image/355.png', 57574, 3),
(107, 'hfghfghfgh', 'upload/image/838.jpg', 67567, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminlogin`
--
ALTER TABLE `adminlogin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `PASSWORD` (`PASSWORD`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`cateid`),
  ADD UNIQUE KEY `title` (`title`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerid`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `customerorder`
--
ALTER TABLE `customerorder`
  ADD PRIMARY KEY (`orderid`),
  ADD KEY `customer` (`customer`);

--
-- Indexes for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`orderitemid`),
  ADD KEY `product` (`product`),
  ADD KEY `customerorder` (`customerorder`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`productid`),
  ADD KEY `category` (`category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `cateid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customerid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=174;

--
-- AUTO_INCREMENT for table `customerorder`
--
ALTER TABLE `customerorder`
  MODIFY `orderid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `orderitemid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `productid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customerorder`
--
ALTER TABLE `customerorder`
  ADD CONSTRAINT `customerorder_ibfk_1` FOREIGN KEY (`customer`) REFERENCES `customer` (`customerid`);

--
-- Constraints for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD CONSTRAINT `orderitem_ibfk_1` FOREIGN KEY (`product`) REFERENCES `product` (`productid`),
  ADD CONSTRAINT `orderitem_ibfk_2` FOREIGN KEY (`customerorder`) REFERENCES `customerorder` (`orderid`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`cateid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
