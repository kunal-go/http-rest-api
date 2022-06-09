import { HttpStatusCode } from "./types"

export class HttpError extends Error {
	isHttpError: boolean
	httpStatusCode: HttpStatusCode
	name: string

	constructor(message: string) {
		super(message)

		this.isHttpError = true
		this.httpStatusCode = HttpStatusCode.INTERNAL_SERVER_ERROR
		this.name = "HttpError"

		// This clips the constructor invocation from the stack trace.
		// It's not absolutely essential, but it does make the stack trace a little nicer.
		Error.captureStackTrace(this, this.constructor)
	}
}

export class InternalServerError extends HttpError {
	constructor(message: string, stack?: Error["stack"]) {
		super(message)
		this.name = "InternalServerError"
		if (stack) this.stack = stack
	}
}

export class BadRequestError extends HttpError {
	constructor(message: string, stack?: Error["stack"]) {
		super(message)
		this.name = "BadRequestError"
		this.httpStatusCode = HttpStatusCode.BAD_REQUEST
		if (stack) this.stack = stack
	}
}

export class UnauthorisedError extends HttpError {
	constructor(message: string, stack?: Error["stack"]) {
		super(message)
		this.name = "UnauthorisedError"
		this.httpStatusCode = HttpStatusCode.UNAUTHORIZED
		if (stack) this.stack = stack
	}
}

export class ForbiddenError extends HttpError {
	constructor(message: string, stack?: Error["stack"]) {
		super(message)
		this.name = "ForbiddenError"
		this.httpStatusCode = HttpStatusCode.FORBIDDEN
		if (stack) this.stack = stack
	}
}

export class NotFoundError extends HttpError {
	constructor(message: string, stack?: Error["stack"]) {
		super(message)
		this.name = "NotFoundError"
		this.httpStatusCode = HttpStatusCode.NOT_FOUND
		if (stack) this.stack = stack
	}
}

export class ConflictError extends HttpError {
	constructor(message: string, stack?: Error["stack"]) {
		super(message)
		this.name = "ConflictError"
		this.httpStatusCode = HttpStatusCode.CONFLICT
		if (stack) this.stack = stack
	}
}

export class UnprocessableEntityError extends HttpError {
	constructor(message: string, stack?: Error["stack"]) {
		super(message)
		this.name = "UnprocessableEntityError"
		this.httpStatusCode = HttpStatusCode.UNPROCESSABLE_ENTITY
		if (stack) this.stack = stack
	}
}

export function isHttpError(err: unknown | any) {
	return err?.isHttpError ?? false
}
