import { Divisi, EditPegawai, IdPegawai, ViewPegawai } from "@/app/(utils)/types";
import Pool from "@/db/DbConnection";

export async function GET () {
  try {
    const connex = await Pool.getConnection()
    const [results]= await connex.query(`SELECT p.id_peg, p.nama, p.email, d.nama_div FROM pegawai p
    INNER JOIN divisi d ON p.id_div = d.id_div`)  
    const pegawai = results as ViewPegawai[]
    return Response.json(pegawai)
  }
  catch(error) {
    return Response.json({error: error})
  }
}

export async function PUT (req: Request) {
  try {
    const data: ViewPegawai = await req.json() as ViewPegawai
  
    const connex = await Pool.getConnection()
    const [div_result] = await connex.query(`SELECT * from divisi WHERE name = '${data.nama_div}'`)
    const divisi_results = div_result as Divisi[]
    const divisi = divisi_results[0]
    const [results]= await connex.query(`UPDATE PEGAWAI 
    SET NAMA = '${data.nama}', EMAIL = '${data.email}', ID_DIV = ${divisi.id}
    WHERE ID_PEG = ${data.id_peg};`)
    results    
    return Response.json({success: "Data has been Updated"})
  }
  catch(error) {
    return Response.json({error: error})
  }
}

export async function POST (req: Request) {
  try {
    const data: ViewPegawai = await req.json() as ViewPegawai
  
    const connex = await Pool.getConnection()
    const [div_result] = await connex.query(`SELECT * from divisi WHERE name = '${data.nama_div}'`)
    const divisi_results = div_result as Divisi[]
    const divisi = divisi_results[0]
    const [results]= await connex.query(`INSERT INTO pegawai (nama, email, id_div) VALUES ('${data.nama}', '${data.email}', ${divisi.id})`)  
    results    
    return Response.json({success: "Data has been Created"})
  }
  catch(error) {
    return Response.json({error: error})
  }
}

export async function DELETE (req: Request) {
  try {
    const data: IdPegawai = await req.json() as IdPegawai
  
    const connex = await Pool.getConnection()
    // const [div_result] = await connex.query(`SELECT * from divisi WHERE name = '${data.nama_div}'`)
    // const divisi_results = div_result as Divisi[]
    // const divisi = divisi_results[0]
    const [results]= await connex.query(`DELETE FROM PEGAWAI WHERE id = ${data.id}`)  
    results    
    return Response.json({success: "Data has been Deleted"})
  }
  catch(error) {
    return Response.json({error: error})
  }
}

