-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 21 Okt 2020 pada 11.47
-- Versi server: 10.4.6-MariaDB
-- Versi PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spbu`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `report`
--

CREATE TABLE `report` (
  `id` int(11) NOT NULL,
  `timestamp` varchar(255) NOT NULL,
  `nama_pelaksana` varchar(255) NOT NULL,
  `nik` varchar(255) NOT NULL,
  `sumberwo` varchar(255) NOT NULL,
  `no_spbu` varchar(255) NOT NULL,
  `kerusakan` text NOT NULL,
  `tindakan` text NOT NULL,
  `dll` text NOT NULL,
  `tanggal` varchar(255) NOT NULL,
  `status` enum('CLOSE','OPEN') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `report`
--

INSERT INTO `report` (`id`, `timestamp`, `nama_pelaksana`, `nik`, `sumberwo`, `no_spbu`, `kerusakan`, `tindakan`, `dll`, `tanggal`, `status`) VALUES
(2, '01/07/2020 16:53:21', 'ALIM', '20870106', 'wa', '5463409', 'tidak bisa masuk operational', 'Pengoneksian kembali dispenser pasca servis', '-', '01/07/2020', 'CLOSE'),
(3, '02/07/2020 12:15:50', 'SUPRIYONO', '18890007', 'wa', '5463101', 'Dispenser rusak', 'Restart router dan PC pos', '-', '01/07/2020', 'CLOSE'),
(4, '01/07/2020 16:53:21', 'ALIM', '18890007', 'wa', '5463409', 'tidak bisa masuk operational', 'Restart router dan PC pos', '-', '02/07/2020', 'CLOSE'),
(5, '02/07/2020 12:15:50', 'EKA ARDYANTO', '18890007', 'wa', '5463409', 'Dispenser rusak', 'restart pc posh...', '-', '01/07/2020', 'CLOSE'),
(6, '01/07/2020 16:53:21', 'ALIM', '18890007', 'wa', '5463409', 'layar monitor mati', 'Restart router dan PC pos', '-', '01/07/2020', 'CLOSE'),
(7, '02/07/2020 12:15:50', 'SUPRIYONO', '19940274', 'wa', '5463409', 'Dispenser rusak', 'restart pc', '-', '01/07/2020', 'CLOSE'),
(8, '02/07/2020 12:15:50', 'SUPRIYONO', '18890007', 'wa', '5463108', 'Transaksi Mypertamina tidak bisa', 'restart pc', '-', '01/07/2020', 'CLOSE'),
(9, '01/07/2020 16:53:21', 'SUPRIYONO', '18890007', 'wa', '5463409', 'Dispenser rusak', 'restart', '-', '01/07/2020', 'CLOSE');

-- --------------------------------------------------------

--
-- Struktur dari tabel `spbu`
--

CREATE TABLE `spbu` (
  `id` int(20) NOT NULL,
  `no_spbu` enum('51-63125','51-63126','51-63221','51-63222','53-62117','53-62120','53-62321','53-62322','53-62323','53-62324','53-62325','53-62326','53-62328','53-62329','54-62101','54-62102','54-62103','54-62104','54-62105','54-62106','54-62107','54-62108','54-62109','54-62110','54-62111','54-62112','54-62113','54-62114','54-62115','54-62116','54-62118','54-62119','54-62121','54-62122','54-62301','54-62302','54-62303','54-62304','54-62305','54-62307','54-62309','54-62310','54-62311','54-62312','54-62313','54-62314','54-62315','54-62316','54-62317','54-62318','54-62319','54-62327','54-63101','54-63102','54-63103','54-63104','54-63105','54-63106','54-63107','54-63108','54-63109','54-63110','54-63111','54-63112','54-63113','54-63114','54-63115','54-63116','54-63117','54-63118','54-63119','54-63121','54-63122','54-63123','54-63124','54-63201','54-63202','54-63203','54-63204','54-63205','54-63206','54-63207','54-63208','54-63209','54-63210','54-63211','54-63212','54-63214','54-63215','54-63216','54-63217','54-63218','54-63301','54-63302','54-63303','54-63304','54-63305','54-63306','54-63307','54-63308','54-63309','54-63310','54-63311','54-63312','54-63313','54-63314','54-63315','54-63316','54-63317','54-63318','54-63401','54-63402','54-63403','54-63404','54-63405','54-63406','54-63407','54-63408','54-63409','54-63410','54-63411','54-63412','54-63413','54-63414','54-63415','54-63416','54-63417','54-63418','54-63419','54-63420','54-63421','54-63422','54-63501','54-63502','54-63503','54-63504','54-63505','54-63506') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `spbu`
--

INSERT INTO `spbu` (`id`, `no_spbu`) VALUES
(1, '51-63125');

-- --------------------------------------------------------

--
-- Struktur dari tabel `teknisi`
--

CREATE TABLE `teknisi` (
  `id` int(20) NOT NULL,
  `nama_teknisi` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `jabatan` varchar(200) NOT NULL,
  `negara` varchar(200) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `teknisi`
--

INSERT INTO `teknisi` (`id`, `nama_teknisi`, `email`, `password`, `jabatan`, `negara`, `image`) VALUES
(1, 'ALIM', 'alim@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', 'file-1603208293976.PNG'),
(2, 'EKA ARDYANTO', 'eka_ardyanto@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', ''),
(3, 'SUPRIYONO', 'supriyono@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', ''),
(4, 'AR RIZAL', 'ar_rizal@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', ''),
(5, 'SYAIFUL ARIFIN', 'syaiful_arifin@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', ''),
(6, 'MUHAMMAD FAJJAR KURNIAWAN', 'muhammad_fajjar_kurniawan@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', ''),
(7, 'JOKO ADI PUTRO', 'joko_adi_putro@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', ''),
(8, 'BAGUS HARIANTO', 'bagus_harianto@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', ''),
(9, 'M NURMAWI', 'm_nurmawi@gmail.com', 'fec357d687001d6dd8c8a5d1be2b62f8', 'Teknisi', 'Indonesia', '');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `spbu`
--
ALTER TABLE `spbu`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `teknisi`
--
ALTER TABLE `teknisi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `report`
--
ALTER TABLE `report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
