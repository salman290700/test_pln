CREATE USER 'db_user'@'localhost' IDENTIFIED BY 'root';
CREATE DATABASE muhammad_salman_al_farisi_2025;
CREATE TABLE divisi (
  id_div INT PRIMARY KEY AUTO_INCREMENT,
  nama_div VARCHAR(100) NOT NULL,
  anggaran DECIMAL(12,2) NOT NULL DEFAULT 0
);

CREATE TABLE pegawai(
  id_peg INT PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  id_div INT NOT NULL,
  FOREIGN KEY (id_div) REFERENCES divisi(id_div)
);

INSERT INTO divisi (id_div, nama_div, anggaran) VALUES (1, 'IT', 1000000);
INSERT INTO divisi (id_div, nama_div, anggaran) VALUES (2, 'HR', 500000);
INSERT INTO divisi (id_div, nama_div, anggaran) VALUES (3, 'Finance', 1450000);
INSERT INTO divisi (id_div, nama_div, anggaran) VALUES (4, 'Marketing', 650000);
INSERT INTO divisi (id_div, nama_div, anggaran) VALUES (5, 'Sales', 900000);

INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (1, 'Arlina Harun', ' arlina.harun@example.com', 1);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (2, 'Angga Putra', ' angga.putra@example.com', 2);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (3, 'Ranum Sari', ' ranum.sari@example.com', 3);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (4, 'Rianti Hasna', ' rianti.hasna@example.com', 1);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (5, 'Putri Renita', ' putri.renita@example.com', 4);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (6, 'Dian Sastro', ' dian.sastro@example.com', 5);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (7, 'Erlina Dewi', ' erlina.dewi@example.com', 2);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (8, 'Rian Darma', ' rian.darma@example.com', 3);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (9, 'Panji Kelana', ' panji.kelana@example.com', 4);
INSERT INTO pegawai (id_peg, nama, email, id_div) VALUES (10, 'Rendy Arlan', ' rendy.arlan@example.com', 5);

SELECT p.id_peg, p.nama, p.email, d.nama_div FROM pegawai p
INNER JOIN divisi d ON p.id_div = d.id_div;

SELECT p.id_peg, p.nama, p.email, d.nama_div FROM pegawai p
INNER JOIN divisi d ON p.id_div = d.id_div
WHERE p.nama LIKE '%put%';

