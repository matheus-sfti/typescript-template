import request from 'supertest';

import app from '../../src/start/app';

describe('Teste de rota', () =>
  it('Deve retornar status http 200 e uma propriedade "message" (rota: GET/)', async () => {
    const res = await request(app).get('/');

    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty('message');
  }));
