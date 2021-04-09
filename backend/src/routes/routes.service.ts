import { Injectable } from '@nestjs/common';
import { promises as fs } from "fs";
import * as path from 'path';
import { Routes } from './entities/Routes';

const { readFile } = fs;

@Injectable()
export class RoutesService {
  async readRoutes() {
 
      const data = JSON.parse(await readFile(path.join(__dirname, '../../Destinations/routes.json'), 'utf8'))
      
      const routes: Routes = data.routes.map(r => {
        const route: Routes = {
          title: r.title,
          startPosition: {
            latitude: r.startPosition.lat,
            longitude: r.startPosition.lng,
          },
          endPosition: {
            latitude: r.startPosition.lat,
            longitude: r.startPosition.lng,
          }
        }

        return route
        
      });
      
      return routes
  }

  findAll() {
    return this.readRoutes()

  }
}
