---
id: gearbox
title: Gearbox
sidebar_label: Gearbox
---

**Gearbox** :gear: instance that provides functionalities of Gearbox

### New

creates a new instance of Gearbox with *optional settings*

```go
New(settings ...*Settings) Gearbox 
```

### Settings

You can pass application settings when calling New

``` go
func main() {
	// Setup gearbox
	g := gearbox.New(&gearbox.Settings{
		CaseInSensitive: true
		ServerName:      "gearbox"
	})

	// ...

	// Start service
	g.Start(":3000")
}
```


**Settings** **fields**

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| ServerName | `string` | Enables the `Server` HTTP header with the given value | `""` |
| CaseSensitive | `bool` | When enabled, `/Foo` and `/foo` are different routes. When disabled, `/Foo`and `/foo` are treated the same | `false` |
| MaxRequestBodySize | `int` | Sets the maximum allowed size for a request body, if the size exceeds the configured limit, it sends `413 - Request Entity Too Large` response | `4 * 1024 * 1024` |
| Concurrency | `int` | Maximum number of concurrent connections | `256 * 1024` |
| CacheSize | `int` | Maximum size of LRU cache if it's enabled | `1000` |
| DisableCaching | `bool` | Disable LRU caching (used for speed up route matching) for recent `CacheSize` matched routes | `false` |
| DisableKeepalive | `bool` | Disable keep-alive connections, the server will close incoming connections after sending the first response to client | `false` |
| DisableDefaultDate | `bool` | When set to true causes the default date header to be excluded from the response | `false` |
| DisableDefaultContentType | `bool` | When set to true, causes the default Content-Type header to be excluded from the Response | `false` |
| DisableStartupMessage | `bool` | When set to true, it will not print out Gearbox banner | `false` |
| DisableHeaderNormalizing | `bool` | By default all header names are normalized: conteNT-tYPE -&gt; Content-Type | `false` |
| ReadTimeout | `time.Duration` | The amount of time allowed to read the full request, including body | `unlimited` |
| WriteTimeout | `time.Duration` | The maximum duration before timing out writes of the response| `unlimited` |
| IdleTimeout | `time.Duration` | The maximum amount of time to wait for the next request when keep-alive is enabled. If `IdleTimeout` is zero, the value of `ReadTimeout` is used | `unlimited` |


### HTTP Methods

Routes an HTTP request, where **METHOD** is the HTTP method of the request

#### Get
The `GET` method requests a representation of the specified resource. Requests using GET should only retrieve data

```go
Get(path string, handlers ...handlerFunc) *Route
```

#### Head
The `HEAD` method asks for a response identical to that of a GET request, but without the response body

```go
Head(path string, handlers ...handlerFunc) *Route
```


#### Post
The `POST` method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server

```go
Post(path string, handlers ...handlerFunc) *Route
```


#### Put
The `PUT` method replaces all current representations of the target resource with the request payload

```go
Put(path string, handlers ...handlerFunc) *Route
```

#### Delete
The `DELETE` method deletes the specified resource

```go
Delete(path string, handlers ...handlerFunc) *Route
```

#### Connect
The `CONNECT` method establishes a tunnel to the server identified by the target resource

```go
Connect(path string, handlers ...handlerFunc) *Route
```

#### Options
The `OPTIONS` method is used to describe the communication options for the target resource

```go
Options(path string, handlers ...handlerFunc) *Route
```

#### Trace
The `TRACE` method performs a message loop-back test along the path to the target resource

```go
Trace(path string, handlers ...handlerFunc) *Route
```

#### Patch
The `PATCH` method is used to apply partial modifications to a resource

```go
Patch(path string, handlers ...handlerFunc) *Route
```

#### Method
The `METHOD` method is used to define your own HTTP Method

```go
Method(method, path string, handlers ...handlerFunc) *Route
```

### Fallback

A default handlers that will be called if there is no matches for requested route

```go
Fallback(handlers ...handlerFunc) error
```


### Use

Applies middlware(s) to be called in order they were defined before calling handlers

```go
Use(middlewares ...handlerFunc)
```


### Group

Groups registered routes under specific prefix

```go
Group(prefix string, routes []*Route) []*Route
```

**For Example**
```go
gb.Group("/account",  []*gearbox.Route{
	gb.Get("/id", func(ctx *gearbox.Context) {
		ctx.RequestCtx.Response.SetBodyString("User X")
	})
})
```

Handles requests for `/account/id`

