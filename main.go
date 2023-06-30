package main

import (
	"Quiz/utils"
	"fmt"
	"html/template"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

var port string

func login(rw http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("src/app/login/page.js")
	utils.HandelERror(err)
	tmpl.Execute(rw, nil)
}

func main() {
	router := mux.NewRouter()
	if port == "" {
		port = ":5000" // 기본 포트 설정
	}
	router.HandleFunc("/", login)
	fmt.Printf("http://localhost%s", port)
	log.Fatal(http.ListenAndServe(port, router))
}
