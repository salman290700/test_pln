import { SearchByName, ViewPegawai } from "@/app/(utils)/types";
import Pool from "@/db/DbConnection";

export async function GET (req: Request) {
  try {
    const search: SearchByName = await req.json() as SearchByName
    const connex = await Pool.getConnection()
    const [results]= await connex.query(`SELECT p.id_peg, p.nama, p.email, d.nama_div FROM pegawai p
    INNER JOIN divisi d ON p.id_div = d.id_div
    WHERE p.nama LIKE '%${search.message}%';`)  
    const pegawai = results as ViewPegawai[]
    return Response.json(pegawai)
  }
  catch(error) {
    return Response.json({error: error})
  }
}