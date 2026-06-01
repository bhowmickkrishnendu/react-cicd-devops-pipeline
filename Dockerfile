# Stage 1: Build the static server
FROM cgr.dev/chainguard/go:latest-dev AS server

WORKDIR /src

ARG TARGETARCH

RUN cat <<'EOF' > main.go
package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
)

func main() {
	buildDir := "/app/build"
	fileServer := http.FileServer(http.Dir(buildDir))

	handler := http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		requestPath := filepath.Clean(r.URL.Path)
		candidatePath := filepath.Join(buildDir, requestPath)

		if info, err := os.Stat(candidatePath); err == nil && !info.IsDir() {
			fileServer.ServeHTTP(w, r)
			return
		}

		http.ServeFile(w, r, filepath.Join(buildDir, "index.html"))
	})

	fmt.Println("serving static content on :8080")
	if err := http.ListenAndServe(":8080", handler); err != nil {
		panic(err)
	}
}
EOF

RUN CGO_ENABLED=0 GOOS=linux GOARCH=${TARGETARCH} go build -ldflags='-s -w' -o /server main.go

# Stage 2: Minimal runtime
FROM scratch

COPY --from=server /server /server
COPY ui/build /app/build

USER 65532:65532
EXPOSE 8080
ENTRYPOINT ["/server"]
