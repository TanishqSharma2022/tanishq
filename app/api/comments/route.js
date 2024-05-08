import { promises as fs } from 'fs';
import {NextResponse} from 'next/server';
export async function POST  (req, res) {
    try {
      const  data  = req.body;
      console.log(data);
      await fs.writeFile(process.cwd() + '/app/api/comments/data.json', data);
      return NextResponse.json({message: 'Data written to file'});
    } catch (error) {
      console.error(error);
      return NextResponse.json({message: 'Error writing data to file'});
    }


};


export async function GET  (req, res) {
  try {
    const file = await fs.readFile(process.cwd() + '/app/api/comments/data.json', 'utf8');
    const data = JSON.parse(file)
    return NextResponse.json({data });
  } catch (error) {
    console.error('Error :', error);
    return NextResponse.json({ error: error.message});
  }
}