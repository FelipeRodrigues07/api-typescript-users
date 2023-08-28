//interfaces de todos os controles

export interface HttpResponse<T> {
  statusCode: number;
  body: T | string;
}
