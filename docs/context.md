---
id: context
title: Context
sidebar_label: Context
---

**Context** (Ctx) holds the HTTP request, response and provide methods


### Context

Allows you to use all **Fasthttp** methods and properties
(check [Fasthttp Documentation](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) for more information)

```go
Context() *fasthttp.RequestCtx
```

**Example**

```go
gb.Get("/hello", func(ctx gearbox.Context) {
	ctx.Context().Response.SetBodyString("Hello World!")
})
```

### Param

Returns value of path parameter specified by key in request

```go
Param(key string) string
```

**Example**

```go
gb.Get("/users/:user", func(ctx gearbox.Context) {
	fmt.Printf("%s\n", ctx.Param("user"))
})
```

### SendString

Sets the body of response as with specified string

```go
SendString(value string) Context
```

**Example**

```go
gb.Get("/hello", func(ctx gearbox.Context) {
	ctx.SendString("Hello World!")
})
```


### Status

Sets the HTTP status code of response

```go
Status(status int) Context
```

**Example**

```go
gb.Get("/hello", func(ctx gearbox.Context) {
	ctx.Status(gearbox.StatusUnauthorized)
})
```


### Get

Returns the HTTP request header specified by field key

```go
Get(key string) string
```

**Example**

```go
gb.Get("/hello", func(ctx gearbox.Context) {
	headerValue = ctx.Get("custom-header-request")
	// ...
})
```

### Set

Sets the response's HTTP header field key to the specified key, value

```go
Set(key string, value string)
```

**Example**

```go
gb.Get("/hello", func(ctx gearbox.Context) {
	ctx.Set("custom-header-response", "my-value")
	// ...
})
```


### Query

Returns the query string parameter in the request url

```go
Query(key string) string
```

**Example**

```go
gb.Get("/book", func(ctx gearbox.Context) {
	name := ctx.Query("name")
	// ...
})
```

### Body

Returns the raw body (string) submitted in a POST request

```go
Body() string
```

**Example**

```go
gb.Get("/hello", func(ctx gearbox.Context) {
	requestBody := ctx.Body()
	// ...
})
```