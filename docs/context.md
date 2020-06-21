---
id: context
title: Context
sidebar_label: Context
---

**Context** (Ctx) holds the HTTP request, response and provide methods


### RequestCtx

Allows you to use all **Fasthttp** methods and properties
(check [Fasthttp Documentation](https://pkg.go.dev/github.com/valyala/fasthttp?tab=doc) for more information)

**Example**

```go
gb.Get("/hello", func(ctx *gearbox.Context) {
	ctx.RequestCtx.Response.SetBodyString("Hello World!")
})
```

### Params

a Map contains values of parameters in requests

**Example**

```go
gb.Get("/users/:user", func(ctx *gearbox.Context) {
	fmt.Printf("%s\n", ctx.Params["user"])
})
```
