import { Injectable } from '@angular/core';
import { Writer } from '../models/writer.model';
import { ESCRITORES } from '../db/writers.db';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  constructor() { }

  getAll(): Promise<Writer[]> {
    return new Promise<Writer[]>((resolve, reject) => {
      resolve(ESCRITORES);
      reject({ error: 'No hay escritores para mostrar' });
    })
  }

  getById(writerId: number): Promise<Writer> {
    return new Promise<Writer>((resolve, reject) => {
      const writer = ESCRITORES.find((writer) => writer.id === writerId);
      writer ? resolve(writer) : reject({ error: 'No se encontró al escritor en la BD' })
    })
  }

  getByPais(country: string): Promise<Writer[]> {
    return new Promise((resolve, reject) => {
      if (country === '') resolve(ESCRITORES);
      const arrCountries = ESCRITORES.filter((writer) => writer.pais === country.toLowerCase());
      arrCountries? resolve(arrCountries) : reject({ error: `No hay escritores de ${country}` })
    })
  }
}
