---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

**Gearbox** :gear: is a web framework for building micro services written in Go with a focus on high performance. It's built on fasthttp which is up to 10x faster than net/http.

### Installation

:gear: gearbox requires version `1.11` or higher of Go ([Download Go](https://golang.org/dl/))

Just use [go get](https://golang.org/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) to download and install gearbox

``` go
go get -u github.com/gogearbox/gearbox
```

### Hello World!

You easily start your service in few lines!

``` go
package main

import (
	"github.com/gogearbox/gearbox"
)

func main() {
	// Setup gearbox
	g := gearbox.New()

	// Define your handlers
	g.Get("/", func(ctx gearbox.Context) {
		ctx.SendString("Hello World!")
	})

	// Start service
	g.Start(":3000")
}
```

Start your service

``` go
go run service.go
```

Visit `http://localhost:3000` to your Gearbox serivce in action!