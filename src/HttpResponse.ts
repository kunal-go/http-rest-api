import { HttpStatusCode } from "./types"

export class HttpResponse {
	httpStatusCode: HttpStatusCode
	data: any

	constructor(httpStatusCode: HttpStatusCode, data: any) {
		this.httpStatusCode = httpStatusCode
		this.data = data
	}
}

export function sendSuccessResponse(data: any) {
	return new HttpResponse(HttpStatusCode.OK, data)
}

export function sendCreatedResponse(data: any) {
	return new HttpResponse(HttpStatusCode.CREATED, data)
}

export function sendEmptyResponse() {
	return new HttpResponse(HttpStatusCode.NO_CONTENT, undefined)
}
