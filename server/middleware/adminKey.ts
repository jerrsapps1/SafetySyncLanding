import type { Request, Response, NextFunction } from 'express';

export function requireAdminKey(req: Request, res: Response, next: NextFunction) {
  const adminKey = process.env.ADMIN_API_KEY;
  
  if (!adminKey) {
    return res.status(500).json({ error: 'Admin key not configured' });
  }
  
  const providedKey = req.headers['x-api-key'] as string;
  
  if (!providedKey || providedKey !== adminKey) {
    return res.status(401).json({ error: 'Invalid or missing admin key' });
  }
  
  next();
}