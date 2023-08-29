//interfaces de todos os controles

export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}

export interface HttpRequest<B> {
  //receber na nossa requisição
  params?: any;
  headers?: any;
  body?: B;
}
