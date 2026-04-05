import { get } from '@vercel/blob';
import { Readable } from 'stream';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const file = req.query.file as string;

  if (!file) {
    return res.status(400).json({ error: 'O parâmetro "file" é obrigatório' });
  }

  try {
    // 1. Armazene a resposta completa na variável (sem desestruturar)
    const result = await get(file, { access: 'private' });

    // 2. Faça a checagem para garantir que o arquivo foi encontrado e não é null
    if (!result) {
      return res.status(404).json({ error: 'Arquivo não encontrado' });
    }

    // Agora o TypeScript tem certeza que "result" é um "GetBlobResult". 
    // Podemos extrair o stream e o blob com segurança.
    const { stream, blob } = result;

    // 3. Define os cabeçalhos
    res.setHeader('Content-Type', blob.contentType || 'application/octet-stream');
    
    // Opcional: Se quiser que o navegador force o download em vez de tentar abrir na tela
    // res.setHeader('Content-Disposition', `attachment; filename="${file.split('/').pop()}"`);

    // 4. Converte o Web Stream para um Node Stream e envia (pipe) como resposta
    const nodeStream = Readable.fromWeb(stream as any);
    nodeStream.pipe(res);

  } catch (error) {
    console.error('Erro ao baixar o arquivo:', error);
    res.status(500).json({ error: 'Erro ao tentar buscar o arquivo' });
  }
}