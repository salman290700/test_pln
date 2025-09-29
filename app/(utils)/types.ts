export type ViewPegawai = {
  id_peg: number,
  nama: string,
  email: string,
  nama_div: string
}

export type Pegawai = {
  id_peg: number,
  nama: string,
  email: string,
  id_div: number
}

export type Divisi = {
  id: number,
  nama_div: string, 
  anggaran: number
}

export type SearchByName = {
  message: string
}

export type EditPegawai = {
  id: number
}

export type IdPegawai = {
  id: number
}