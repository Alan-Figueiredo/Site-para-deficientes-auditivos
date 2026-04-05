import { list } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { blobs } = await list({ prefix: 'modelos-curriculo/'});

  const models = blobs
  .filter((b) => b.size > 0)
  .map((b) => ({
    name: b.pathname.replace("modelos-curriculo/",""),
    url: `/api/downloadFile?file=${encodeURIComponent(b.pathname)}`,
    size: b.size,
  }))

  res.status(200).json(models);
}

//https://6dvdqzsavtw2hne5.private.blob.vercel-storage.com/