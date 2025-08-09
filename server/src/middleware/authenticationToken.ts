import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend Express Request interface to include 'user'
declare global {
  namespace Express {
    interface Request {
      userName?: string;
    }
  }
}


const JWT_SECRET = process.env.JWT_SECRET;

export function authenticationToken( req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers['authorization'];

    const token = ( typeof authHeader === 'string' && authHeader.startsWith('Bearer ') ) ? authHeader.split( ' ' )[1] : undefined;

    if( !JWT_SECRET ){
        return res.status(500).json({ message: 'JWT secret is not configured on the server.' });
    }

    if( !token ){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if (typeof decoded === 'object' && decoded !== null && 'userName' in decoded) {
            req.userName = (decoded as jwt.JwtPayload).userName as string;
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized' });
        }
    } catch (error) {
        console.error('Authentication error:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }

};