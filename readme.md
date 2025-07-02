# Go Web Development

The repo serves as a beginner-level tutorial for web development. We will use Golang to write the backend and React.js for the frontend.

> I first met web development in my freshman year as an undergraduate student. I joined a student organization, touched Node.js, javascript, KOA framework, HTML/CSS and a bunch of web-related technologies. From my experience, the universities usually do not teach web development. They focus more on research productivity instead of the "fanciness" of your web interface. Therefore, even many Ph.D. students have very little knowledge on web development. However, I consider web development one of the essential skills in computer science. I present this open-source tutorial for people that are interested in building a website with a real backend.

## Why Golang?

Go is developed by Google, used in Google for massive, high performance tasks. The language is built for web. Youtube is rewritten in Go. Google is rewriting Google with Go. When I had an internship in Alibaba Cloud, their backend was also in Go and they continue to invest in Go development. Learning Go language can not only fulfill your requirement for personal web development but also prepare you better for the modern industry.

## Get Started

For people that are not familiar with Go, which is quite common even for Ph.D. students, you can go to [go-lang-basics](go-lang-basics/readme.md) to familiarize yourself with the language.

The web backend development will be explained in [web-backend](web-backend/readme.md).

The web frontend development will be explained in [web-frontend](web-frontend/readme.md).

## Configuration for China

In China, the installation using `go install` can be extremely slow because of accessing foreign domains including `golang.org`, so we need to set a proxy for Golang.

```bash
go env -w GO111MODULE=on
go env -w GOPROXY=https://goproxy.cn,direct

# Verify the environment by
go env GOPROXY
```

We can revert to the default by

```bash
go env -w GOPROXY=https://proxy.golang.org,direct
```

### For Python and NPM

Python and npm also need to use a mirror for fast and reliable download speeds. Create a file `~/.pip/pip.conf`, and put the following inside to use Tsinghua mirror.

```bash
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
timeout = 60
```

For npm and yarn

```bash
npm config set registry https://registry.npmmirror.com
yarn config set registry https://registry.npmmirror.com
```
